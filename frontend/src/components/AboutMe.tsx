import AboutPhotoCollage from "./AboutPhotoCollage";

export default function AboutMe() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div>
        <p className="eyebrow">Digital portfolio</p>
        <h1 id="intro-title">Gareth<br />McClellan<span>.</span></h1>
        <p className="intro"><span className="text-gradient hover:cursor-pointer hover:glow-shadow motion-safe:transition-[text-shadow] duration-300 ease-out"><a href="https://data.science.vt.edu/programs/cmda.html" target="_blank" rel="noopener noreferrer" className="hover-text-gradient">Computational Modeling &amp; Data Analytics</a></span><br />student at Virginia Tech.</p>
      </div>
      <AboutPhotoCollage />
    </section>
  );
}
