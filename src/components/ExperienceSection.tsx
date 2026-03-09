import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    school: "Fountainhead School (IB Board)",
    location: "Surat",
    role: "Science Educator (MYP)",
    period: "2022 – 2024",
    responsibilities: [
      "Teaching MYP Science for Grades 7–9",
      "Curriculum design for inquiry-based learning",
      "ATL (Approaches to Learning) leader",
      "Personal Project supervisor",
    ],
  },
  {
    school: "Seventh Day Adventist School",
    location: "Surat",
    role: "Physics & Mathematics Educator",
    period: "May – July 2024",
    responsibilities: [
      "Teaching Physics and Maths for Grades 6–8",
      "Designing student assessments",
      "Supporting conceptual learning",
    ],
  },
  {
    school: "GMC School (Cambridge Board)",
    location: "Porbandar",
    role: "Science and Mathematics Teacher",
    period: "2020 – 2021",
    responsibilities: [
      "Teaching Grades 6–9",
      "Conducting online teaching during pandemic",
      "Creating digital learning materials",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Career Path
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Teaching Experience
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-16" />
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
            style={{ background: 'linear-gradient(to bottom, hsl(var(--accent-blue)), hsl(var(--primary)))' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative mb-12 pl-16 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-4 h-4 rounded-full bg-accent-blue border-4 border-background left-[15px] md:left-auto glow-accent ${
                  i % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                }`}
              />

              <div className="glass rounded-xl p-6 card-hover">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-accent-blue" />
                  <span className="text-xs font-semibold text-accent-blue uppercase tracking-wide font-body">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{exp.school}</h3>
                <p className="text-sm text-muted-foreground font-body mb-1">{exp.location}</p>
                <p className="text-sm font-semibold text-foreground font-body mb-3">{exp.role}</p>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
