import ProjectImageStack from "./ProjectImageStack";

type TopProjectSectionProps = {
  images: readonly [string, string, string];
  title: string;
  description: string;
};

export default function TopProjectSection({
  images,
  title,
  description,
}: TopProjectSectionProps) {
  return (
    <article className="flex min-w-0 flex-col gap-3">
      <ProjectImageStack images={images} title={title} />
      <div className="space-y-1 text-ink">
        <h3 className="text-2xl">{title}</h3>
        <p className="leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
