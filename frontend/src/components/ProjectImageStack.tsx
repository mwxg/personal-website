"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageStackProps = {
  images: readonly [string, string, string];
  title: string;
};

const layerOffset = 8;

export default function ProjectImageStack({ images, title }: ProjectImageStackProps) {
  const [frontIndex, setFrontIndex] = useState(0);
  const stackOffset = layerOffset * (images.length - 1);

  return (
    <button
      type="button"
      aria-label={`Show next image for ${title}`}
      onClick={() => setFrontIndex((current) => (current + 1) % images.length)}
      className="block w-full cursor-pointer rounded-4xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      style={{ paddingRight: stackOffset, paddingBottom: stackOffset }}
    >
      <span className="relative isolate block aspect-[4/3]">
        {images.map((src, index) => {
          const layer = (index - frontIndex + images.length) % images.length;
          const offset = layer * layerOffset;

          return (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              sizes="33vw"
              draggable={false}
              className="rounded-4xl bg-surface object-cover ring-1 ring-inset ring-ink/35 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
              style={{
                transform: `translate(${offset}px, ${offset}px)`,
                zIndex: images.length - layer,
              }}
            />
          );
        })}
      </span>
      <span className="sr-only" aria-live="polite">
        Image {frontIndex + 1} of {images.length}
      </span>
    </button>
  );
}
