import { Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <a href="#" className="font-display text-2xl font-bold opacity-90">GV</a>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gracy-vasania"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:vasaniagracy@gmail.com"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-sm font-body opacity-60 flex items-center gap-1">
          © {new Date().getFullYear()} Gracy Vasania. Made with <Heart className="h-3 w-3" /> for education.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
