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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Beyond the Classroom
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Leadership & Activities
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-10" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 glass rounded-xl px-5 py-4 card-hover group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                <a.icon className="h-5 w-5 text-accent-blue" />
              </div>
              <span className="text-sm font-medium text-foreground font-body">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
