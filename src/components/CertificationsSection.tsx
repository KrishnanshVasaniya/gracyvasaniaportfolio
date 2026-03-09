import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "Teaching in Higher Secondary – NCERT",
  "Experimental Physics – IIT Kanpur",
  "Pre-Service Training in Mathematics – IITE",
  "Participatory Training Methodology",
  "Project Management Course",
];

const CertificationsSection = () => {
  return (
    <section className="section-padding section-grey">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Professional Development
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-10" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 glass rounded-full px-5 py-3 card-hover group"
            >
              <Award className="h-4 w-4 text-accent-blue group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="text-sm font-medium text-foreground font-body">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
