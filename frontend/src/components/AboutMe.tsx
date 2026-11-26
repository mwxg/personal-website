import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex w-2/3 items-start gap-8 text-ink">
      <div className="w-1/2">
        <Image
          src="/images/placeholder.jpg"
          alt="Portrait of Gareth McClellan"
          width={600}
          height={600}
          className="h-auto w-full rounded-4xl object-cover"
        />
      </div>

      <div className="flex w-1/2 flex-col gap-4">
        <h1 className="text-5xl hover:text-shadow-[0_0_10px_rgba(255,255,255,1.0)] transition-[text-shadow] duration-200">About Me</h1>
        <p className="text-2xl">
          I&apos;m Gareth McClellan, a developer who enjoys building thoughtful,
          useful experiences for the web.
        </p>
      </div>
    </section>
  );
}
