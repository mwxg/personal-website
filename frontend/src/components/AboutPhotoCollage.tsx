import Image from "next/image";

const photos = [
  "/images/AboutMe/image2.jpeg",
  "/images/AboutMe/image3.jpg",
  "/images/AboutMe/image4.jpeg",
  "/images/AboutMe/image5.jpg",
  "/images/AboutMe/image1.jpg",
];

export default function AboutPhotoCollage() {
  return (
    <div className="about-collage" role="group" aria-label="Gareth’s photo collage">
      {photos.map((src) => (
        <div className="about-collage-photo" key={src}>
          <Image src={src} alt="" fill sizes="(max-width: 720px) 46vw, 22vw" />
        </div>
      ))}
    </div>
  );
}
