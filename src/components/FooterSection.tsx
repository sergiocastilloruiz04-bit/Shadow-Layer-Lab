import { Separator } from "@/components/ui/separator";
import { Ghost } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 px-6">
      <Separator className="mb-12 bg-border/50" />
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Ghost className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold text-foreground tracking-wider">GHOSTNET</span>
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
            >
              Whitepaper
            </a>
            <a
              href="#"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
            >
              Manifest
            </a>
            <a
              href="#"
              className="text-sm font-mono text-primary hover:text-primary/80 transition-colors tracking-wider uppercase"
            >
              Join the Underground
            </a>
          </nav>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} GhostNet. All communications are encrypted. Your identity is yours.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
