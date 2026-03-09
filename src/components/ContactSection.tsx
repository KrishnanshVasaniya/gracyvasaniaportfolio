import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding section-grey relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase text-center mb-2 font-body">
            Let's Connect
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-accent-blue mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 9974922140" },
              { icon: Mail, label: "Email", value: "vasaniagracy@gmail.com" },
              { icon: MapPin, label: "Location", value: "Mumbai, India" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                  <item.icon className="h-5 w-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                  <p className="text-sm font-medium text-foreground font-body">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 glass rounded-xl p-6"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="font-body rounded-lg"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="font-body rounded-lg"
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="font-body rounded-lg"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-navy-light font-body w-full rounded-lg">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
