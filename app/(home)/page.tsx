import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import Contact from "@/components/Contact";
import SectionHeader from "@/components/SectionHeader";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="main-container">
        <SectionHeader />
        <AboutSection />
        <Contact />
      </div>
    </main>
  )
}
