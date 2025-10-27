import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  profileImage: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
}

export const Hero = ({
  headline,
  subheadline,
  profileImage,
  ctaPrimaryText,
  ctaSecondaryText,
}: HeroProps) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-glow-pulse" />
              <img
                src={profileImage}
                alt="Paul GUAN"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 object-cover animate-float"
                loading="eager"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {subheadline}
          </p>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
