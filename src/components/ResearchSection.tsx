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
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Academic Contributions
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Research & Academic Engagement
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {research.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover flex gap-5 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                <item.icon className="h-7 w-7 text-accent-blue" />
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
