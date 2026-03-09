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
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-16 text-center"
        >
          Teaching Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

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
                className={`absolute top-2 w-3 h-3 rounded-full bg-accent-blue border-2 border-background left-[18px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
                }`}
              />

              <div className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-accent-blue" />
                  <span className="text-xs font-semibold text-accent-blue uppercase tracking-wide font-body">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{exp.school}</h3>
                <p className="text-sm text-muted-foreground font-body mb-1">{exp.location}</p>
                <p className="text-sm font-semibold text-foreground font-body mb-3">{exp.role}</p>
                <ul className="space-y-1">
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
