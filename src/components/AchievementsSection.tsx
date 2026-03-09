import { motion } from "framer-motion";
import { Trophy, Medal, Star, CheckCircle } from "lucide-react";

const achievements = [
  { icon: CheckCircle, label: "CTET Qualified (2020)" },
  { icon: CheckCircle, label: "Gujarat TET-2 Qualified (2021)" },
  { icon: CheckCircle, label: "Gujarat TAT Secondary Qualified (2023)" },
  { icon: CheckCircle, label: "Gujarat TAT Higher Secondary Qualified (2023)" },
  { icon: Medal, label: "Gold Medalist – Physics" },
  { icon: Star, label: "International Teacher Olympiad Participant" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-10 text-center"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-5 text-center card-hover"
            >
              <a.icon className="h-7 w-7 mx-auto mb-3 text-accent-blue" />
              <p className="text-sm font-medium text-foreground font-body">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
