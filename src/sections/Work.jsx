import SectionHeading from "../components/SectionHeading";
import ProjectList from "../components/ProjectList";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <section className="work section-pad" id="work">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Built for Different Businesses. Designed for Real Experiences."
        copy="From restaurants and fitness brands to finance platforms and e-commerce experiences, explore some of the digital products we've created."
      />

      <ProjectList projects={projects} />
    </section>
  );
}
