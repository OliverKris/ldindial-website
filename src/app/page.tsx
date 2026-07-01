import NavBar from "./components/navbar";
import ExperienceSection from "./sections/experience";
import ProjectSection from "./sections/projects";
import HeroSection from "./sections/hero";
import SkillSection from "./sections/skills";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
    </div>
  );
}
