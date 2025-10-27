import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export const Experience = () => {
  const experiences: ExperienceEntry[] = [
    {
      company: "Sostos Inc",
      role: "Data Scientist",
      duration: "Aug 2025 - Present",
      location: "Remote",
      description:
        "Building agentic discovery systems that merge vLLM ensembles with knowledge-mining workflows for pharmacovigilance.",
      technologies: ["vLLM", "Gemini", "Llama", "CrewAI", "LangChain", "AWS"],
      achievements: [
        "Deployed GPT/Gemini/Llama ensemble with 4-prompt strategy to score 92% recall and 99% specificity across 200K case reports covering 700 drugs.",
        "Cut LLM API calls by ~50% through early-exit gating and rule-based pruning in the evidence pipeline.",
        "Eliminated manual tagging by launching an attention-based classifier on ViT embeddings that reaches AUROC 0.88 on 1.2M images.",
      ],
    },
    {
      company: "Binghamton University",
      role: "Machine Learning Research Engineer",
      duration: "Sep 2024 - Aug 2025",
      location: "Binghamton, NY",
      description:
        "Advanced computational pathology research while maintaining end-to-end ML infrastructure for faculty collaborators.",
      technologies: ["PyTorch", "Distributed Training", "Streamlit", "AWS", "PCA", "SVM"],
      achievements: [
        "Fine-tuned a foundation LLM on 500 tissue images improving diagnosis accuracy by 12%.",
        "Ran 16 GPU distributed jobs with utilization-aware scheduling to double throughput.",
        "Reduced false positives 18% (85% accuracy) by compressing 1,024 radiomics features via PCA before SVM tuning.",
        "Identified 15+ treatment-linked biomarkers through t-tests and chi-square with p < 0.05.",
        "Shipped a Streamlit UI with CI/CD on AWS that scales to 100 queries/sec.",
      ],
    },
    {
      company: "LTIMindtree Ltd.",
      role: "Senior Software Engineer",
      duration: "Nov 2021 - Jan 2024",
      location: "Mumbai, India",
      description:
        "Led modernization of analytics and monitoring platforms for financial and enterprise clients.",
      technologies: ["AWS", "EMR", "Airflow", "Spark", "Hugging Face", "Kafka"],
      achievements: [
        "Helped ops teams prioritize critical tickets 50% faster by summarizing customer issues with Hugging Face models.",
        "Automated ML monitoring with serverless EMR + Airflow stacks, shrinking manual reports from 8 hrs to 30 mins.",
        "Optimized Spark transforms (filter/map/reduce) to boost throughput to 500K records per hour on transactional data.",
      ],
    },
    {
      company: "LTIMindtree Ltd.",
      role: "Software Engineer",
      duration: "Jul 2021 - Nov 2021",
      location: "Mumbai, India",
      description:
        "Prototyped ML microservices and unsupervised analytics for telemetry data at scale.",
      technologies: ["Python", "HDBSCAN", "Azure Functions", "AWS", "Kafka"],
      achievements: [
        "Implemented HDBSCAN on product telemetry to uncover four customer usage patterns for marketing teams.",
        "Led PoC for Python ML microservices on Azure Functions, improving performance and cutting deployment costs by 40%.",
        "Enabled realtime analytics by streaming 8M+ events/day from Kafka (MSK) into Amazon Redshift.",
      ],
    },
    {
      company: "Peregrine PR Pvt Ltd.",
      role: "Web Developer",
      duration: "Jun 2019 - Dec 2019",
      location: "Mumbai, India",
      description:
        "Implemented internal applications and conversational interfaces for client-facing web properties.",
      technologies: ["React", "Flask", "SQL", "NLP", "REST APIs"],
      achievements: [
        "Developed a React-Flask-SQL timesheet app with role-based views, saving managers 3 hours per week.",
        "Achieved 90% FAQ relevance by crafting and deploying an NLP chatbot to the corporate site.",
        "Raised daily active users from 800 to 1,100 by integrating third-party engagement APIs.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploying AI, data, and cloud solutions across startups, academia, and global enterprises.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <Card
                key={`${exp.company}-${exp.role}`}
                className="border-border hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" style={{ color: "#bcd4e6" }} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" style={{ color: "#bcd4e6" }} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" style={{ color: "#bcd4e6" }} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-medium text-primary mb-2">Impact Highlights</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="text-[#bcd4e6] mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-primary hover:bg-[#bcd4e6]/10"
                          style={{ borderColor: "#bcd4e6" }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
