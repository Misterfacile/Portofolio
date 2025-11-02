import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  verifyUrl: string;
  logo: string;
}

interface CertificationsProps {
  items: CertificationItem[];
}

export const Certifications = ({ items }: CertificationsProps) => {
  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="mb-4 flex items-center justify-center h-20">
                    <img
                      src={item.logo}
                      alt={`${item.issuer} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">
                      {item.issuer}
                    </p>
                    
                    {item.date && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    )}

                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full border-primary/30 hover:border-primary"
                  >
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Verify
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
