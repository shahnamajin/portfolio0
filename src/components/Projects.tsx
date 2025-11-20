import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-pastel mx-auto mb-12 rounded-full" />

          <Card className="overflow-hidden shadow-card hover:shadow-xl transition-smooth bg-card border-border/50 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 md:h-auto bg-gradient-pastel flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold text-foreground">MedLens</h3>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  MedLens
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  MedLens is an advanced medical application designed to enhance healthcare efficiency and patient care, especially for long-term diseases. It analyzes lab reports, categorizes patients, provides dietary suggestions, and enables AI-based diagnosis and predictions.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Healthcare", "AI", "Flutter", "ML"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-foreground"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Placeholder for more projects */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card
                key={i}
                className="p-8 text-center border-2 border-dashed border-border hover:border-primary transition-smooth bg-card/50"
              >
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">
                  More Projects Coming Soon
                </h4>
                <p className="text-sm text-muted-foreground">
                  Currently working on exciting new ideas
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
