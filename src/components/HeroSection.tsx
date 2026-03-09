import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HeroSection = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-blue/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-20 -right-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-blue-light/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <label
            htmlFor="profile-upload"
            className="relative group cursor-pointer"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-accent-blue/30 glow-accent transition-all duration-300 group-hover:border-accent-blue/60">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Gracy Vasania"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary flex flex-col items-center justify-center gap-2">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground font-body">Add Photo</span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
              {profileImage && (
                <Camera className="h-6 w-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-accent-blue mx-auto mb-6 rounded-full"
          />
          <p className="text-accent-blue font-body text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Science Educator · Physics Specialist · Education Researcher
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6 leading-tight">
            Gracy Vasania
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body italic">
            "Passionate educator with experience across IB, Cambridge, and CBSE curricula, dedicated to inquiry-based learning, critical thinking, and transformative education."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-navy-light font-body rounded-full px-8"
          >
            <a href="#experience">
              View Experience <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body rounded-full px-8"
          >
            <a href="/resume/Gracy_Vasania_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-accent-foreground font-body rounded-full px-8"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
