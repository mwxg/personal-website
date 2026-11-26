const miniTGImages = [
  "/images/MiniTG/image1.png",
  "/images/MiniTG/image2.png",
  "/images/MiniTG/image3.png",
] as const;

const placeholderImage = "/images/placeholder.jpg";
const placeholderImages = [placeholderImage, placeholderImage, placeholderImage] as const;

export const topProjects = [
  {
    title: "MiniTG",
    images: miniTGImages,
    description:
      "MiniTG is a procedural 2D terrain and biome generator built with C++20. It combines deterministic value noise and fractal Brownian motion to generate 13 terrain types based on elevation, moisture, and temperature, with customizable generation parameters and visualization modes.",
  },
  {
    title: "Freeboard",
    images: placeholderImages,
    description:
      "Freeboard is a computer vision-based desktop application built with Python, MediaPipe, OpenCV, and PySide6. It uses real-time hand gesture recognition to enable touchless volume, brightness, and media controls, with customizable detection parameters and local camera processing.",
  },
  {
    title: "Jingdex",
    images: placeholderImages,
    description:
      "Jingdex (精典) is a community-driven Chinese dictionary and vocabulary learning platform built with Next.js, TypeScript, and Supabase. It features multilingual dictionary search, customizable vocabulary decks, community contributions, and a structured content review system with role-based moderation.",
  },
];
