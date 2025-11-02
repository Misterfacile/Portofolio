interface SkillsProps {
  skills: {
    languages: string[];
    ml: string[];
    data: string[];
    cloud_devops: string[];
    tools: string[];
  };
}

export const Skills = ({ skills }: SkillsProps) => {
  const categories = [
    { title: "Languages", items: skills.languages, icon: "💻" },
    { title: "AI", items: skills.ml, icon: "🤖" },
    { title: "Data", items: skills.data, icon: "📊" },
    { title: "Cloud & DevOps", items: skills.cloud_devops, icon: "☁️" },
    { title: "Tools & Libraries", items: skills.tools, icon: "🛠️" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
