import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Ghost Free",
    price: "$0",
    period: "forever",
    description: "Essential protection for individual use",
    features: [
      "Basic E2E encryption",
      "Secure messaging",
      "Standard metadata protection",
      "Single device",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro Journalist",
    price: "$29",
    period: "/month",
    description: "For high-risk individuals in the field",
    features: [
      "Advanced metadata obfuscation",
      "Stealth UI (Hidden App Icon)",
      "Kill Switch",
      "0-Knowledge identity",
      "Multi-device sync",
      "Priority encrypted relay",
    ],
    cta: "Go Ghost",
    highlighted: true,
  },
  {
    name: "Agency / Enterprise",
    price: "Custom",
    period: "",
    description: "For news agencies and organizations",
    features: [
      "Fleet management",
      "Secure Corporate Archives",
      "24/7 Priority Support",
      "Asset Protection protocols",
      "Custom deployment",
      "Dedicated infrastructure",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-foreground mb-4">
            Choose Your <span className="text-primary text-glow">Cover</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            GhostNet Messaging plans. All tiers include end-to-end encryption by default.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/50 bg-primary/5 box-glow scale-[1.02]"
                  : "border-border/50 bg-card hover:border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-mono text-[10px] tracking-widest hover:bg-primary">
                    RECOMMENDED
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="font-mono text-lg">{plan.name}</CardTitle>
                <div className="mt-3">
                  <span className="text-4xl font-bold font-mono text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full font-mono tracking-wider text-sm uppercase ${
                    plan.highlighted
                      ? "box-glow"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  variant={plan.highlighted ? "default" : "secondary"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
