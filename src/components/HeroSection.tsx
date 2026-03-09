import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`absolute opacity-10 text-primary ${className}`}>{children}</div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating education icons */}
      <FloatingIcon className="top-20 left-[10%] animate-float text-5xl">⚛️</FloatingIcon>
      <FloatingIcon className="top-32 right-[15%] animate-float-slow text-4xl">📚</FloatingIcon>
      <FloatingIcon className="bottom-32 left-[20%] animate-float-slow text-5xl">🔬</FloatingIcon>
      <FloatingIcon className="bottom-20 right-[10%] animate-float text-4xl">💡</FloatingIcon>
      <FloatingIcon className="top-1/2 left-[5%] animate-float text-3xl">📐</FloatingIcon>
      <FloatingIcon className="top-[25%] right-[25%] animate-float-slow text-3xl">🧪</FloatingIcon>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary opacity-60" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent-blue font-body text-sm font-semibold tracking-widest uppercase mb-4">
            Science Educator · Physics Specialist · Education Researcher
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Gracy Vasania
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            "Passionate educator with experience across IB, Cambridge, and CBSE curricula, dedicated to inquiry-based learning, critical thinking, and transformative education."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-navy-light font-body"
          >
            <a href="#experience">
              View Experience <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
          >
            <a href="/resume/Gracy_Vasania_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-accent-foreground font-body"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
