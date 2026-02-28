import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(160 100% 45% / 0.3) 0%, transparent 70%)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Military-Grade Privacy
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter mb-6 text-glow text-primary"
          style={{ animation: "flicker 8s infinite" }}
        >
          Invisible.<br />
          Untraceable.<br />
          <span className="text-ghost-cyan">GhostNet.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Built for war correspondents, whistleblowers, and high-risk professionals 
          who operate where privacy is not a luxury — it's survival.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="font-mono tracking-wider text-sm uppercase box-glow px-8 py-6"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Enter the Network
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-mono tracking-wider text-sm uppercase border-primary/30 text-primary hover:bg-primary/10 px-8 py-6"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
