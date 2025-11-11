import { Github, Linkedin, Heart } from "lucide-react";

interface FooterProps {
  social: {
    github: string;
    linkedin: string;
  };
}

export const Footer = ({ social }: FooterProps) => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            V2.0.0 - 11 / 11 / 2025
          </p>

          <div className="flex items-center gap-4">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Paul GUAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
