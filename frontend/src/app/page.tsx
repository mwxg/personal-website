import AboutMe from "@/components/AboutMe";
import TopProjectSection from "@/components/TopProjectSection";
import SectionLine from "@/components/SectionLine";
import { topProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-14 px-8 py-6">
      <AboutMe />
      <SectionLine></SectionLine>
      <section className="w-full text-ink" aria-labelledby="top-projects-title">
        <h2 id="top-projects-title" className="mb-6 text-3xl">
          Top Projects
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {topProjects.map((project) => (
            <TopProjectSection key={project.title} {...project} />
          ))}
        </div>
      </section>
      <SectionLine></SectionLine>
    </main>
  );
}
