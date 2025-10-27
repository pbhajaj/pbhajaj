import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpeg";

const highlightStats = [
  {
    title: "LLM Evidence Mining",
    lines: ["92% recall", "99% specificity"],
  },
  {
    title: "Foundation Model Training",
    lines: ["16 GPU clusters", "2x throughput"],
  },
  {
    title: "Financial Pipelines",
    lines: ["8M+ events/day", "Streaming analytics"],
  },
];

const quickLinks = [
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/prembhajaj",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/prembhajaj/",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:pbhajaj@binghamton.edu",
  },
];

export const Home = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      style={{ backgroundColor: "#bcd4e6" }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-glow">
              <img
                src={profilePicture}
                alt="Prem Bhajaj portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8 text-primary">
            <div className="text-center lg:text-left space-y-4">
              <p className="text-lg md:text-xl leading-relaxed opacity-80">
                Hi there! I'm
              </p>

              <h1 className="text-4xl md:text-5xl font-bold">Prem Bhajaj</h1>

              <h3 className="text-2xl md:text-3xl font-medium opacity-80">
                Data Scientist &amp; Machine Learning Research Engineer
              </h3>

              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I design agentic AI systems, distributed ML workflows, and
                production-grade analytics that ship to cloud environments. My recent work spans
                vLLM ensembles for drug discovery, foundation model fine-tuning for cancer diagnostics,
                and event pipelines that deliver real-time insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() =>
                  window.open("https://drive.google.com/file/d/10JXQRdUsBPxH6-0L_ryQOxS2eR07kZk-/view?usp=drive_link", "_blank")
                }
              >
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-primary hover:bg-white/20"
                onClick={() => (window.location.href = "mailto:pbhajaj@binghamton.edu")}
              >
                Get in Touch
              </Button>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlightStats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-2xl bg-white/70 p-4 shadow-glow text-center"
                >
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {stat.title}
                  </p>
                  <p className="text-lg font-bold text-primary mt-2 leading-tight">
                    {stat.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div> */}

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              {quickLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => window.open(item.href, "_blank")}
                  className="flex items-center gap-2 rounded-full border border-white/60 bg-white/30 px-4 py-2 text-sm font-medium text-primary backdrop-blur hover:bg-white/60 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
