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
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Load content from JSON
    fetch("/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 300);
  };

  if (!content || isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">  
      <div className="relative z-10">
        <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-fade-in" style={{ animationDelay: '3000ms' }}>
            <Navbar social={content.meta.social} />
          </div>
          
          <main>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Hero {...content.hero} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <About {...content.about} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Experience items={content.experience} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Education items={content.education} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
              <Skills skills={content.skills} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Certifications items={content.certifications} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
              <Projects items={content.projects} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Awards items={content.awards} />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
              <Contact {...content.contact} />
            </div>
          </main>

          <div className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <Footer social={content.meta.social} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;