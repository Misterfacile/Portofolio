import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ParticleBackground } from "@/components/ParticleBackground";

interface ContentData {
  meta: {
    siteTitle: string;
    siteDescription: string;
    author: string;
    social: { github: string; linkedin: string };
  };
  hero: {
    headline: string;
    subheadline: string;
    profileImage: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
  };
  about: { bio: string; highlights: string[]; cvUrl: string };
  experience: Array<any>;
  education: Array<any>;
  skills: any;
  certifications: Array<any>;
  projects: Array<any>;
  awards: Array<any>;
  contact: {
    email: string;
    successMessage: string;
    errorMessage: string;
    privacyNote: string;
  };
}

const Index = () => {
  const [content, setContent] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false); // drives HERO + sections
  const [showNavbar, setShowNavbar] = useState(false);   // drives NAVBAR only

  useEffect(() => {
    fetch("/content.json")
      .then((r) => r.json())
      .then((data) => setContent(data))
      .catch((e) => console.error("Error loading content:", e));
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  useEffect(() => {
    if (!showContent) return;
    const t = setTimeout(() => setShowNavbar(true), 1500);
    return () => clearTimeout(t);
  }, [showContent]);

  if (!content || isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out transform-gpu
                    ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <Navbar social={content.meta.social} />
      </header>

      {/* CONTENT */}
      <main className="pt-20 relative z-10">
        <section
          id="home"
          className={`transition-all duration-700 ease-out transform-gpu
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Hero {...content.hero} />
        </section>

        <section
          id="about"
          className={`transition-all duration-700 ease-out transform-gpu delay-200
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <About {...content.about} />
        </section>

        <section
          id="experience"
          className={`transition-all duration-700 ease-out transform-gpu delay-300
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Experience items={content.experience} />
        </section>

        <section
          id="education"
          className={`transition-all duration-700 ease-out transform-gpu delay-400
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Education items={content.education} />
        </section>

        <section
          id="skills"
          className={`transition-all duration-700 ease-out transform-gpu delay-500
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Skills skills={content.skills} />
        </section>

        <section
          id="certifications"
          className={`transition-all duration-700 ease-out transform-gpu delay-600
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Certifications items={content.certifications} />
        </section>

        <section
          id="projects"
          className={`transition-all duration-700 ease-out transform-gpu delay-700
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Projects items={content.projects} />
        </section>

        <section
          id="awards"
          className={`transition-all duration-700 ease-out transform-gpu delay-800
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Awards items={content.awards} />
        </section>

        <section
          id="contact"
          className={`transition-all duration-700 ease-out transform-gpu delay-900
                      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <Contact {...content.contact} />
        </section>

        <footer
          className={`transition-opacity duration-700 ease-out delay-1000
                      ${showContent ? "opacity-100" : "opacity-0"}`}
        >
          <Footer social={content.meta.social} />
        </footer>
      </main>
    </div>
  );
};

export default Index;
