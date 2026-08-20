"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PhotoGallery({
  photos,
  title,
}: {
  photos: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [photos.length]);

  function goPrev() {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }

  function goNext() {
    setIndex((i) => (i + 1) % photos.length);
  }

  if (photos.length === 0) return null;

  return (
    <div>
      <div className="relative w-full aspect-video bg-neutral-800 rounded-lg overflow-hidden border-2 border-black">
        <Image
          src={photos[index]}
          alt={`${title} screenshot ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain"
        />

        {photos.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center"
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: i === index ? "var(--ocean)" : "#D1D5DB",
              }}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}