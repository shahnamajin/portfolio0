import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_2lm6l7q",
        "template_8eelt9p",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ei1lJjlHydqzLuD8y"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shahnamaji5@gmail.com",
      href: "mailto:shahnamaji5@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 62824 43595",
      href: "tel:+916282443595",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shahnamajin",
      href: "https://linkedin.com/in/shahnamajin",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shahnamajin",
      href: "https://github.com/shahnamajin",
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-pastel mx-auto mb-6 rounded-full" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'd love to connect! Feel free to reach out for collaboration, ideas, or opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-4 animate-fade-in">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-card transition-smooth hover:-translate-y-1 bg-card border-border/50"
                  >
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-pastel flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{method.label}</p>
                        <p className="text-sm">{method.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}

              <div className="mt-8 p-6 bg-card rounded-2xl border border-border/50">
                <p className="text-center text-lg font-medium text-foreground italic">
                  "Code. Create. Collaborate. Continuously Learn."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-card bg-card border-border/50 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-foreground font-medium shadow-soft hover:shadow-card transition-smooth disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
