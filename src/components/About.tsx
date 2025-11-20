import { GraduationCap, Heart, Lightbulb, Sparkles, Code, Users } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "MCA (First Year)",
      color: "from-primary to-primary/60",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Technology, creativity, continuous learning",
      color: "from-secondary to-secondary/60",
    },
    {
      icon: Lightbulb,
      title: "Approach",
      description: "Learning by doing and exploring innovation",
      color: "from-accent to-accent/60",
    },
  ];

  const stats = [
    { icon: Code, value: "6+", label: "Technologies" },
    { icon: Sparkles, value: "Always", label: "Learning" },
    { icon: Users, value: "Open", label: "To Collaborate" },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-pastel mx-auto mb-6 rounded-full" />
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Getting to know who I am
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Text Content with Quote Style */}
            <div className="space-y-8 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <p className="text-lg leading-relaxed text-foreground pl-8 relative">
                  I'm an <span className="font-semibold text-primary">MCA first-year student</span> who loves exploring how technology can make life easier and more creative. I enjoy learning, experimenting with new coding tools, and collaborating on innovative ideas.
                </p>
              </div>
              
              <div className="bg-gradient-pastel p-6 rounded-2xl shadow-card">
                <p className="text-base leading-relaxed text-foreground">
                  I'm motivated by <span className="font-semibold">curiosity</span> and the desire to keep improving both personally and professionally. Every project is an opportunity to learn something new and push the boundaries of what's possible.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl bg-card border border-border/50 hover:shadow-soft transition-smooth"
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-6 animate-slide-up">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="group p-6 hover:shadow-card transition-smooth hover:-translate-y-1 bg-card border-border/50 relative overflow-hidden"
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-smooth`} />
                    
                    <div className="relative flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 transition-smooth`}>
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-smooth">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-pastel shadow-card">
              <p className="text-lg font-medium text-foreground">
                ✨ Every line of code is a step toward innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
