import ImageGallery from "./ImageGallery";
import ProjectImageStack from "./ProjectImageStack";

type ProjectProps = {
  images: readonly [string, ...string[]];
  title: string;
  summary: string;
  description: string;
};

export default function TopProjectSection({ images, title, summary, description }: ProjectProps) {
  return (
    <article className="project">
      {images.length > 1 ? (
        <ProjectImageStack images={images} title={title} />
      ) : (
        <ImageGallery images={images} label={title} />
      )}
      <h3>{title}</h3>
      <p>{summary}</p>
      <details>
        <summary>Project details<span className="sr-only"> for {title}</span></summary>
        <p>{description}</p>
      </details>
    </article>
  );
}
