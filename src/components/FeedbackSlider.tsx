'use client';

import { useState, useEffect, useCallback } from 'react';
import NextImage from 'next/image';
import type { StaticImageData } from 'next/image';

const AUTOPLAY_MS = 5000;

export type FeedbackImageSource = StaticImageData | string;

function resolveSrc(img: FeedbackImageSource): string {
  return typeof img === 'string' ? img : img.src;
}

function resolveBlurDataURL(img: FeedbackImageSource): string | undefined {
  return typeof img === 'string' ? undefined : img.blurDataURL;
}

export function FeedbackSlider({ images }: { images: FeedbackImageSource[] }) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (images.length === 0) return;
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [images.length, current, goTo]);

  /** Prefetch next slide in background so manual advance / autoplay feels instant. */
  useEffect(() => {
    if (images.length < 2) return;
    const nextIdx = (current + 1) % images.length;
    const src = resolveSrc(images[nextIdx]);
    const img = new window.Image();
    img.decoding = 'async';
    img.src = src;
  }, [current, images]);

  const active = images[current];

  if (images.length === 0) {
    return (
      <div className="rounded-xl border border-brand-forest/15 bg-brand-peach/40 py-16 text-center">
        <p className="text-text-muted">
          Add feedback images to{' '}
          <code className="text-sm bg-white/80 px-1.5 py-0.5 rounded border border-brand-forest/15">
            src/assets/images/feedback/
          </code>{' '}
          and{' '}
          <code className="text-sm bg-white/80 px-1.5 py-0.5 rounded border border-brand-forest/15">
            public/feedback/
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-brand-forest/10 bg-white">
        <div className="relative aspect-[4/3] w-full">
          {active && (
            <NextImage
              key={current}
              src={active}
              alt={`Client feedback ${current + 1} of ${images.length}`}
              fill
              className="object-contain transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={current === 0}
              loading={current === 0 ? 'eager' : 'lazy'}
              decoding="async"
              placeholder={activeBlur(active) ? 'blur' : 'empty'}
              blurDataURL={resolveBlurDataURL(active)}
            />
          )}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-brand-forest/20 flex items-center justify-center text-brand-forest hover:bg-brand-peach/50 focus:outline-none focus:ring-2 focus:ring-accent-gold-bright"
            aria-label="Previous feedback"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-brand-forest/20 flex items-center justify-center text-brand-forest hover:bg-brand-peach/50 focus:outline-none focus:ring-2 focus:ring-accent-gold-bright"
            aria-label="Next feedback"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-2 mt-4 flex-wrap" role="tablist" aria-label="Feedback slides">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to feedback ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors shrink-0 ${
                  i === current
                    ? 'bg-brand-forest scale-110'
                    : 'bg-brand-forest/25 hover:bg-brand-forest/45'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function activeBlur(active: FeedbackImageSource): boolean {
  return typeof active !== 'string' && Boolean(active.blurDataURL);
}
