import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Globe } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const philosophyItems = [
  { icon: BookOpen, label: "Inquiry-based learning", color: "from-blue-500/10 to-cyan-500/10" },
  { icon: Lightbulb, label: "Critical thinking", color: "from-amber-500/10 to-orange-500/10" },
  { icon: Users, label: "Student-centered pedagogy", color: "from-emerald-500/10 to-green-500/10" },
  { icon: Globe, label: "Real-world understanding", color: "from-violet-500/10 to-purple-500/10" },
];

const StatCard = ({ number, label, delay }: { number: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <p className="text-3xl md:text-4xl font-bold gradient-text font-display">{number}</p>
      <p className="text-xs text-muted-foreground font-body mt-1">{label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-grey relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Who I Am
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-10" />

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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-md mx-auto">
          <StatCard number="3+" label="Years Teaching" delay={0} />
          <StatCard number="3" label="Curricula" delay={0.1} />
          <StatCard number="5+" label="Certifications" delay={0.2} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {philosophyItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-xl p-5 text-center card-hover`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <item.icon className="h-6 w-6 text-accent-blue" />
              </div>
              <p className="text-sm font-medium text-foreground font-body">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
