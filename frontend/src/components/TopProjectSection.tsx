import ImageGallery from "./ImageGallery";
import ProjectDetails from "./ProjectDetails";
import ProjectImageStack from "./ProjectImageStack";

type ProjectProps = {
  images: readonly [string, ...string[]];
  title: string;
  summary: string;
  techStack: string;
  description: string;
  link: string;
};

export default function TopProjectSection({ images, title, summary, techStack, description, link }: ProjectProps) {
  return (
    <article className="project">
      {images.length > 1 ? (
        <ProjectImageStack images={images} title={title} />
      ) : (
        <ImageGallery images={images} label={title} />
      )}
      <h3>{title}</h3>
      <p className="project-summary">{summary}</p>
      <p className="eyebrow">{techStack}</p>
      <div className="project-actions">
        <ProjectDetails title={title} techStack={techStack} description={description} />
        {link ? (
          <a className="project-details-button" href={link} target="_blank" rel="noopener noreferrer">
            Check it out<span className="sr-only"> for {title}</span>
          </a>
        ) : (
          <button type="button" className="project-details-button" disabled>Check it out</button>
        )}
      </div>
    </article>
  );
}
