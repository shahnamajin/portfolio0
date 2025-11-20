import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-soft relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Picture */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-pastel rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profileImage}
                alt="Shahna Maji N"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-card border-4 border-card"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Shahna Maji N
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
              MCA Student | Aspiring Developer
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Exploring technology to create smarter, simpler solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-foreground font-medium shadow-soft hover:shadow-card transition-smooth hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-foreground font-medium transition-smooth hover:scale-105"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
