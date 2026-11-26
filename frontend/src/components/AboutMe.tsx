"use client";

import Image from "next/image";
import { useState } from "react";

const aboutImages = [
  "/images/AboutMe/image1.jpg",
  "/images/AboutMe/image2.jpeg",
  "/images/AboutMe/image3.jpg",
  "/images/AboutMe/image4.jpeg",
  "/images/AboutMe/image5.jpg",
] as const;

export default function AboutMe() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section className="flex w-2/3 items-start gap-8 text-ink">
      <div className="w-1/2">
        <button
          type="button"
          aria-label="Show next About Me image"
          onClick={() => setImageIndex((current) => (current + 1) % aboutImages.length)}
          className="border-4 border-transparent hover:border-4 hover:border-accent motion-safe:ease-out motion-safe:transition-transform motion-safe:duration-400 motion-safe:hover:scale-[1.05] relative block aspect-square w-full cursor-pointer overflow-hidden rounded-4xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {aboutImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              sizes="33vw"
              draggable={false}
              className={`object-cover motion-safe:transition-opacity motion-safe:duration-300 ${
                index === imageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </button>
        <span className="sr-only" aria-live="polite">
          Image {imageIndex + 1} of {aboutImages.length}
        </span>
      </div>

      <div className="flex w-1/2 flex-col gap-4">
        <h1 className="text-5xl hover:text-shadow-[0_0_10px_rgba(255,255,255,1.0)] transition-[text-shadow] duration-200">About Me</h1>
        <p className="text-2xl">
          I&apos;m Gareth McClellan, a developer who enjoys building thoughtful,
          useful experiences for the web.
        </p>
      </div>
    </section>
  );
}
