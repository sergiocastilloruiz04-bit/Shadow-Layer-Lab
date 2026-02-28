import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Globe } from "./Globe";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden px-6 lg:px-20 pt-20 lg:pt-0">
      {/* Globe Container (Right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw] flex items-center justify-center opacity-[0.85] pointer-events-none mix-blend-screen translate-x-[20%] lg:translate-x-[10%]">
        <Globe />
      </div>



      {/* Text Content (Left) */}
      <div className="relative z-10 text-left max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Military-Grade Privacy
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter mb-6 text-glow text-primary"
          style={{ animation: "flicker 8s infinite" }}>
          Invisible.<br />
          Untraceable.<br />
          <span className="bg-[#ec1313]/0 text-primary-foreground whitespace-nowrap">Shadow Layer Lab</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Built for war correspondents, whistleblowers, and high-risk professionals who operate where privacy is not a luxury — it's survival.
        </p>

        <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
          <Button
            size="lg"
            className="font-mono tracking-wider text-sm uppercase box-glow px-8 py-6 w-full sm:w-auto"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
            Enter the Network
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-mono tracking-wider text-sm uppercase border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 w-full sm:w-auto"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
            View Plans
          </Button>
        </div>
      </div>
    </section>);

};

export default HeroSection;