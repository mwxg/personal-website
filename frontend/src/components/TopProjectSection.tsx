import ProjectImageStack from "./ProjectImageStack";

type TopProjectSectionProps = {
  images: readonly [string, ...string[]];
  title: string;
  summary: string;
};

export default function TopProjectSection({
  images,
  title,
  summary,
}: TopProjectSectionProps) {
  return (
    <article className="flex min-w-0 flex-col gap-3">
      <ProjectImageStack images={images} title={title} />
      <div className="hover:cursor-pointer rounded-4xl transition duration-200 space-y-1 text-ink hover:bg-surface p-5">
        <h3 className="text-4xl">{title}</h3>
        <p className="leading-relaxed text-xl">{summary}</p>
      </div>
    </article>
  );
}
