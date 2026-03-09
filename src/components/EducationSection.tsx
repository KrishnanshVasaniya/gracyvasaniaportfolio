import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Tata Institute of Social Sciences (TISS)",
    degree: "Master of Education (M.Ed.)",
    specialization: "Economics and Financing of Education",
    period: "2024 – 2026",
  },
  {
    institution: "Sardar Patel University",
    degree: "M.Sc Physics",
    specialization: "Electronics and Communication",
    period: "2020 – 2022",
  },
  {
    institution: "IITE Gandhinagar",
    degree: "Integrated B.Sc B.Ed",
    specialization: "Major: Physics · Pedagogy: Science and Mathematics",
    period: "2016 – 2020",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding section-grey">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg border border-border p-6 card-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
              <GraduationCap className="h-8 w-8 text-accent-blue mb-4" />
              <p className="text-xs font-semibold text-accent-blue uppercase tracking-wide font-body mb-2">
                {edu.period}
              </p>
              <h3 className="font-display text-lg font-bold text-primary mb-1">{edu.degree}</h3>
              <p className="text-sm text-foreground font-body font-medium mb-1">{edu.institution}</p>
              <p className="text-sm text-muted-foreground font-body">{edu.specialization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
