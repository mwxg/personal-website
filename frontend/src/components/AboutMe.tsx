"use client";

import Image from "next/image";
import { useState } from "react";
import image1 from "../../public/images/AboutMe/image1.jpg";
import image2 from "../../public/images/AboutMe/image2.jpeg";
import image3 from "../../public/images/AboutMe/image3.jpg";
import image4 from "../../public/images/AboutMe/image4.jpeg";
import image5 from "../../public/images/AboutMe/image5.jpg";

const aboutImages = [
  { image: image1, ratio: image1.width / image1.height },
  // These JPEGs are stored sideways and rotated for display by EXIF.
  { image: image2, ratio: 3 / 4 },
  { image: image3, ratio: image3.width / image3.height },
  { image: image4, ratio: 3 / 4 },
  { image: image5, ratio: image5.width / image5.height },
] as const;

const photoHeight = "min(32rem, 70vh, var(--about-photo-height-limit))";

export default function AboutMe() {
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = aboutImages[imageIndex];

  return (
    <section className="flex w-full flex-col items-start gap-8 text-ink [--about-photo-height-limit:45vw] md:w-2/3 md:flex-row md:[--about-photo-height-limit:30vw]">
      <div className="shrink-0">
        <button
          type="button"
          aria-label="Show next About Me image"
          onClick={() => setImageIndex((current) => (current + 1) % aboutImages.length)}
          className="relative block box-content cursor-pointer overflow-hidden rounded-4xl border-4 border-transparent hover:border-accent motion-safe:transition-[width] motion-safe:duration-300 motion-safe:ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          style={{
            height: photoHeight,
            width: `calc(${photoHeight} * ${currentImage.ratio})`,
          }}
        >
          {aboutImages.map(({ image, ratio }, index) => (
            <span
              key={image.src}
              style={{ width: `calc(${photoHeight} * ${ratio})` }}
              className={`absolute inset-y-0 left-1/2 -translate-x-1/2 ${
                index === imageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                draggable={false}
                className="object-contain"
              />
            </span>
          ))}
        </button>
        <span className="sr-only" aria-live="polite">
          Image {imageIndex + 1} of {aboutImages.length}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <h1 className="text-5xl hover:text-shadow-[0_0_10px_rgba(255,255,255,1.0)] transition-[text-shadow] duration-200">About Me</h1>
        <p className="text-2xl">
          I&apos;m Gareth McClellan, a developer who enjoys building thoughtful,
          useful experiences for the web.
        </p>
      </div>
    </section>
  );
}
