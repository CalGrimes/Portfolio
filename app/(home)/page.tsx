import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSectionOld"
import ExperienceSection from "@/components/ExperienceSection";
import Contact from "@/components/Contact";
import SkillsSection from "@/components/SkillsSection";
import SectionHeader from "@/components/SectionHeader";
export default function Home() {
  return (
    <main className="mx-auto px-4 sm:px-6">
      <HeroSection />
      <SectionHeader />
      <AboutSection />
      <Contact />
    </main>
  )
}
