import Image from "next/image";

type TopProjectSectionProps = {
  image: string;
  title: string;
  description: string;
};

export default function TopProjectSection({
  image,
  title,
  description,
}: TopProjectSectionProps) {
  return (
    <article className="flex min-w-0 flex-col gap-3">
      <Image
        src={image}
        alt={title}
        width={600}
        height={600}
        className="aspect-[4/3] w-full rounded-4xl object-cover"
      />
      <div className="space-y-1 text-ink">
        <h3 className="text-2xl">{title}</h3>
        <p className="leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
