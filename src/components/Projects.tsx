import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProjectItem {
  title: string;
  startDate: string;
  endDate: string;
  images: string[];
  description: string;
  tech: string[];
  links: {
    live?: string;
    repo?: string;
    doc?: string;
  };
  tags: string[];
}

interface ProjectsProps {
  items: ProjectItem[];
}

export const Projects = ({ items }: ProjectsProps) => {
  const [filter, setFilter] = useState("All");

  const allTags = [
    "All",
    ...Array.from(new Set(items.flatMap((item) => item.tags))).sort((a, b) =>
      a.localeCompare(b)
    ),
  ];

  const filteredProjects =
    filter === "All"
      ? items
      : items.filter((item) => item.tags.includes(filter));

  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">
            Featured Projects
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tag)}
                className={
                  filter === tag
                    ? "glow-sm"
                    : "border-primary/30 hover:border-primary"
                }
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image carousel */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {project.images.length === 1 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index < 2 ? "high" : "auto"}
                      decoding="async"
                    />
                  ) : (
                    <Carousel
                      plugins={[
                        Autoplay({
                          delay: 3000,
                          stopOnInteraction: false,
                        }),
                      ]}
                      className="w-full h-full"
                    >
                      <CarouselContent>
                        {project.images.map((image, i) => (
                          <CarouselItem key={i}>
                            <img
                              src={image}
                              alt={`${project.title} - Image ${i + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  {/* Date range */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {project.links.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:border-primary"
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.links.repo ? (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:border-primary"
                      >
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="border-primary/30"
                    >
                      <Github className="w-3 h-3 mr-2" />
                      Ask for the repository
                    </Button>
                  )}
                    {project.links.doc && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:border-primary"
                      >
                        <a
                          href={project.links.doc}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-3 h-3 mr-2" />
                          Doc
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
