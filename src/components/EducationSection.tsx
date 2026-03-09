import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

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
    <section id="education" className="section-padding section-grey relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Academic Background
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Education
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 card-hover relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-accent-blue" />
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <Calendar className="h-3.5 w-3.5 text-accent-blue" />
                <span className="text-xs font-semibold text-accent-blue uppercase tracking-wide font-body">
                  {edu.period}
                </span>
              </div>
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
