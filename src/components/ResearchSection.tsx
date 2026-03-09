import { motion } from "framer-motion";
import { FlaskConical, FileText, Search } from "lucide-react";

const research = [
  {
    icon: Search,
    title: "Future LEARNS Project – TISS",
    role: "Research Intern",
    description:
      'Worked on the project "Estimating Requirements for Schooling in the 21st Century", focused on improving India\'s school education system and aligning it with global education standards.',
  },
  {
    icon: FlaskConical,
    title: "HBCSE – Homi Bhabha Centre for Science Education",
    role: "Field Attachment",
    description:
      "Analyzing science learning units, reviewing NCERT Physics textbooks, mapping physics concepts with GeoGebra tools, and observing teacher training workshops.",
  },
  {
    icon: FileText,
    title: "Master's Dissertation",
    role: "",
    description:
      "Between Flexibility and Precarity: State Policy Discretion and the Politics of Contract Teachers in Gujarat.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
        >
          Research & Academic Engagement
        </motion.h2>

        <div className="space-y-6">
          {research.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 card-hover flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <item.icon className="h-6 w-6 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary">{item.title}</h3>
                {item.role && (
                  <p className="text-sm font-semibold text-accent-blue font-body mb-2">{item.role}</p>
                )}
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
