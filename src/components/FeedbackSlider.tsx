'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

const AUTOPLAY_MS = 5000;

export function FeedbackSlider({ images }: { images: StaticImageData[] }) {
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

  if (images.length === 0) {
    return (
      <div className="rounded-xl border border-accent-amber/20 bg-white/30 py-16 text-center">
        <p className="text-text-muted">
          Add feedback images to <code className="text-sm bg-accent-amber/10 px-1 rounded">src/assets/images/feedback/</code> and list them in the index to show them here.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-accent-amber/20 bg-white/30">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] w-full flex-shrink-0">
              <Image
                src={img}
                alt={`Feedback ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
                priority={i === 0}
                loading={i === 0 ? undefined : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow border border-accent-amber/20 flex items-center justify-center text-accent-amber hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent-amber"
            aria-label="Previous feedback"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow border border-accent-amber/20 flex items-center justify-center text-accent-amber hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent-amber"
            aria-label="Next feedback"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Feedback slides">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to feedback ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-accent-amber scale-110' : 'bg-accent-amber/30 hover:bg-accent-amber/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
