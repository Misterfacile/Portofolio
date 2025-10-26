import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface AboutProps {
  bio: string;
  highlights: string[];
  cvUrl: string;
}

export const About = ({ bio, highlights, cvUrl }: AboutProps) => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            About Me
          </h2>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8 hover-lift">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {bio}
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Areas of Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary glow-sm" />
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
