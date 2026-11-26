import AboutPhotoCollage from "./AboutPhotoCollage";

export default function AboutMe() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div>
        <p className="eyebrow">Digital portfolio</p>
        <h1 id="intro-title">Gareth<br />McClellan<span>.</span></h1>
        <p className="intro">Computational Modeling &amp; Data Analytics student at Virginia Tech.</p>
      </div>
      <AboutPhotoCollage />
    </section>
  );
}
