import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection";
import Contact from "@/components/Contact";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {
  return (
    <main className="mx-auto px-4 sm:px-6">
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <ProjectsSection />
      <Contact />
    </main>
  )
}
