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
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            My Approach
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Teaching Philosophy
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                <p.icon className="h-6 w-6 text-accent-blue" />
              </div>
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
