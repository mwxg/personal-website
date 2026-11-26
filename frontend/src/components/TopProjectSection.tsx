import ImageGallery from "./ImageGallery";
import ProjectImageStack from "./ProjectImageStack";

type ProjectProps = {
  images: readonly [string, ...string[]];
  title: string;
  summary: string;
  techStack: string;
  description: string;
};

export default function TopProjectSection({ images, title, summary, techStack }: ProjectProps) {
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
      <button type="button" className="project-details-button">
        Project details<span className="sr-only"> for {title}</span>
      </button>
    </article>
  );
}
