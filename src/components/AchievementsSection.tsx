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
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Milestones
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Achievements
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-6 text-center card-hover group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                <a.icon className="h-6 w-6 text-accent-blue" />
              </div>
              <p className="text-sm font-medium text-foreground font-body">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
