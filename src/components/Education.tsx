import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  school: string;
  program: string;
  from: string;
  to: string;
  details: string[];
  badge: string;
  gpa?: string;
}

interface EducationProps {
  items: EducationItem[];
}

export const Education = ({ items }: EducationProps) => {
  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${year}`;
  };

  // Sort items chronologically (most recent first)
  const sortedItems = [...items].sort((a, b) => {
    return new Date(b.from).getTime() - new Date(a.from).getTime();
  });

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {sortedItems.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="glass rounded-xl p-8 hover-lift">
                    <div className="flex items-start gap-4 mb-4">
                      {item.badge ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                          <img
                            src={item.badge}
                            alt={`${item.school} logo`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ) :
                      (
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <div>
                            <h3 className="text-xl font-bold">{item.school}</h3>
                            <p className="text-lg text-primary font-semibold">
                              {item.program}
                            </p>
                          </div>
                          {item.gpa && (
                            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-lg border border-primary/20">
                              <Award className="w-4 h-4 text-primary" />
                              <span className="text-sm font-semibold text-primary">
                                GPA: {item.gpa}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {formatDate(item.from)} - {formatDate(item.to)}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-primary mb-3">
                            Key Coursework
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.details.map((detail, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs bg-muted rounded border border-border"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
