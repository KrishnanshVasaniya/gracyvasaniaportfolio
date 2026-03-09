import { motion } from "framer-motion";
import { Users, Trophy, Mic, Dumbbell } from "lucide-react";

const activities = [
  { icon: Users, label: "Class Representative – TISS" },
  { icon: Trophy, label: "Sports Secretary – Sardar Patel University" },
  { icon: Users, label: "Head of Student Committee – IITE" },
  { icon: Dumbbell, label: "University Badminton Player" },
  { icon: Mic, label: "Debate Competition Participant" },
];

const LeadershipSection = () => {
  return (
    <section className="section-padding section-grey">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-10 text-center"
        >
          Leadership & Activities
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-3 card-hover"
            >
              <a.icon className="h-5 w-5 text-accent-blue flex-shrink-0" />
              <span className="text-sm font-medium text-foreground font-body">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
