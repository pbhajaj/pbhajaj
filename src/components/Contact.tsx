import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  const connections = [
    {
      label: "Email",
      value: "pbhajaj@binghamton.edu",
      href: "mailto:pbhajaj@binghamton.edu",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "(607) 313-8194",
      href: "tel:+16073138194",
      icon: Phone,
    },
    {
      label: "GitHub",
      value: "github.com/prembhajaj",
      href: "https://github.com/prembhajaj",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/prembhajaj",
      href: "https://www.linkedin.com/in/prembhajaj/",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects or just connect!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {connections.map((connection) => (
              <div key={connection.label} className="flex flex-col items-center">
                <connection.icon className="h-8 w-8 mb-4" style={{ color: '#bcd4e6' }} />
                <p className="font-semibold text-primary mb-1">{connection.label}</p>
                <a
                  href={connection.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {connection.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
