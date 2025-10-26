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

interface ContentData {
  meta: {
    siteTitle: string;
    siteDescription: string;
    author: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  hero: {
    headline: string;
    subheadline: string;
    profileImage: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
  };
  about: {
    bio: string;
    highlights: string[];
    cvUrl: string;
  };
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

  useEffect(() => {
    // Load content from JSON
    fetch("/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-glow-pulse">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar social={content.meta.social} />
      
      <main>
        <Hero {...content.hero} />
        <About {...content.about} />
        <Experience items={content.experience} />
        <Education items={content.education} />
        <Skills skills={content.skills} />
        <Certifications items={content.certifications} />
        <Projects items={content.projects} />
        <Awards items={content.awards} />
        <Contact {...content.contact} />
      </main>

      <Footer social={content.meta.social} />
    </div>
  );
};

export default Index;
