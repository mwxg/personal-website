"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryProps = {
  images: readonly [string, ...string[]];
  label: string;
  portrait?: boolean;
};

export default function ImageGallery({ images, label, portrait = false }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const frame = portrait ? "gallery portrait" : "gallery project-preview";
  const photo = (
    <Image src={images[index]} alt={`${label}, image ${index + 1}`} fill
      loading={portrait ? "eager" : "lazy"}
      sizes={portrait ? "(max-width: 720px) 90vw, 40vw" : "(max-width: 720px) 90vw, 33vw"} />
  );

  if (images.length === 1) return <div className={frame}>{photo}</div>;

  return (
    <button className={frame} type="button" aria-label={`Show next image for ${label}`}
      onClick={() => setIndex((index + 1) % images.length)}>
      {photo}
      <span className="gallery-control" aria-live="polite">
        {index + 1} / {images.length}<span aria-hidden="true">›</span>
      </span>
    </button>
  );
}
