import { motion } from "framer-motion";
import { Sparkles, HelpCircle, Users, Link, Brain } from "lucide-react";

const pillars = [
  { icon: Sparkles, title: "Inquiry-based Science Education", desc: "Fostering curiosity through hands-on exploration and guided discovery." },
  { icon: HelpCircle, title: "Encouraging Curiosity", desc: "Creating safe spaces where every question is valued and explored." },
  { icon: Users, title: "Student-centered Classrooms", desc: "Designing learning experiences around student needs and interests." },
  { icon: Link, title: "Theory Meets Practice", desc: "Linking academic concepts with real-world problems and applications." },
  { icon: Brain, title: "Critical Thinking & Collaboration", desc: "Building skills for analysis, reasoning, and teamwork." },
];

const PhilosophySection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
        >
          My Teaching Philosophy
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              <p.icon className="h-7 w-7 text-accent-blue mb-3" />
              <h3 className="font-display text-base font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
