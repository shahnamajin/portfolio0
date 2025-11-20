import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const Skills = () => {
  const skills = [
    { name: "Python", level: 75, icon: "🐍" },
    { name: "HTML", level: 85, icon: "🌐" },
    { name: "CSS", level: 80, icon: "🎨" },
    { name: "Flutter", level: 70, icon: "📱" },
    { name: "C", level: 65, icon: "💻" },
    { name: "Java", level: 70, icon: "☕" },
  ];

  return (
    <section id="skills" className="py-20 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-pastel mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-card transition-smooth hover:-translate-y-1 bg-card border-border/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg text-foreground">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  Intermediate level
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
