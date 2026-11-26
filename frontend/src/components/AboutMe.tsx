import ImageGallery from "./ImageGallery";

const photos = [
  "/images/AboutMe/image1.jpg",
  "/images/AboutMe/image2.jpeg",
  "/images/AboutMe/image3.jpg",
  "/images/AboutMe/image4.jpeg",
  "/images/AboutMe/image5.jpg",
] as const;

export default function AboutMe() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div>
        <p className="eyebrow">Digital portfolio</p>
        <h1 id="intro-title">Gareth<br />McClellan<span>.</span></h1>
        <p className="intro">Computational Modeling &amp; Data Analytics student at Virginia Tech.</p>
        <a className="work-link" href="#projects">Explore projects</a>
      </div>
      <ImageGallery images={photos} label="Gareth’s photo gallery" portrait />
    </section>
  );
}
