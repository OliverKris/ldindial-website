import NavBar from "./components/navbar";
import ExperienceSection from "./sections/experience";
import ProjectSection from "./sections/projects";
import HeroSection from "./sections/hero";
import SkillSection from "./sections/skills";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
