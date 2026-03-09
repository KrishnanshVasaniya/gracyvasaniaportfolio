import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Globe } from "lucide-react";

const philosophyItems = [
  { icon: BookOpen, label: "Inquiry-based learning" },
  { icon: Lightbulb, label: "Critical thinking" },
  { icon: Users, label: "Student-centered pedagogy" },
  { icon: Globe, label: "Real-world understanding" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-grey">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            About Me
          </h2>
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-body max-w-3xl mx-auto mb-12">
            <p>
              I am an education and science graduate with a strong academic background including B.Ed., M.Ed. from
              <span className="text-primary font-semibold"> Tata Institute of Social Sciences (TISS)</span>, and M.Sc. in Physics.
            </p>
            <p>
              With over 3 years of teaching experience, I have worked across IB, Cambridge, and CBSE curricula, teaching science and mathematics to middle school students.
            </p>
            <p>
              I am also interested in education policy, curriculum development, and research in school education systems.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {philosophyItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg p-5 text-center card-hover border border-border"
            >
              <item.icon className="h-8 w-8 mx-auto mb-3 text-accent-blue" />
              <p className="text-sm font-medium text-foreground font-body">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
