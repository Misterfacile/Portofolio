import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AwardItem {
  title: string;
  eventUrl: string;
  proofUrl: string;
  date: string;
  summary: string;
  logo?: string;
}

interface AwardsProps {
  items: AwardItem[];
}

export const Awards = ({ items }: AwardsProps) => {
  const formatDate = (date: string) => {
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
    <section id="awards" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
            Awards & Recognition
          </h2>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 md:p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.title} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <Trophy className="w-8 h-8 text-primary" /> // fallback if no logo provided
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {formatDate(item.date)}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:border-primary"
                      >
                        <a
                          href={item.eventUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Event Page
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary/30 hover:border-primary"
                      >
                        <a
                          href={item.proofUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn Post
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </a>
                      </Button>
                    </div>
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
