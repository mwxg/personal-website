import AboutMe from "@/components/AboutMe";
import TopProjectSection from "@/components/TopProjectSection";
import SectionLine from "@/components/SectionLine";

const topProjects = [
  {
    image: "/images/placeholder.jpg",
    title: "Project One",
    description: "A short description of the first featured project.",
  },
  {
    image: "/images/placeholder.jpg",
    title: "Project Two",
    description: "A short description of the second featured project.",
  },
  {
    image: "/images/placeholder.jpg",
    title: "Project Three",
    description: "A short description of the third featured project.",
  },
];

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
