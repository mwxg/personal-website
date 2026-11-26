import AboutMe from "@/components/AboutMe";
import TopProjectSection from "@/components/TopProjectSection";
import { topProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="shell">
      <AboutMe />
      <section className="projects" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Selected projects</h2>
        <div className="project-grid">
          {topProjects.map((project) => <TopProjectSection key={project.title} {...project} />)}
        </div>
      </section>
    </div>
  );
}
