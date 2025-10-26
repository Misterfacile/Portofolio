import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  from: string;
  to: string;
  logo: string;
  bullets: string[];
  tech: string[];
  images?: string[];
}

interface ExperienceProps {
  items: ExperienceItem[];
}

export const Experience = ({ items }: ExperienceProps) => {
  const formatDate = (date: string) => {
    if (date === "present") return "Present";
    const [year, month] = date.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-1/2">
                    <div className="w-full h-full rounded-full bg-primary glow-sm" />
                  </div>

                  <div className="glass rounded-xl p-6 md:p-8 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3 mb-1">
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`${item.company} logo`}
                            className="w-8 h-8 object-contain rounded"
                          />
                        )}

                        <h3 className="text-2xl font-bold">{item.role}</h3>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-primary font-semibold">{item.company}</p>      
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(item.from)} - {formatDate(item.to)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary mt-1.5">▹</span>
                          <span className="text-muted-foreground leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {item.images && item.images.length > 0 && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {item.images.map((src, i) => (
                          <div
                            key={i}
                            className="overflow-hidden rounded-lg border border-border transition-transform hover:scale-[1.02]"
                          >
                            <img
                              src={src}
                              alt={`${item.company} work ${i + 1}`}
                              className="w-full h-40 sm:h-44 object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
