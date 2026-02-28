import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
      "Community support"],

    cta: "Get Started",
    highlighted: false
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
      "Priority encrypted relay"],

    cta: "Go Ghost",
    highlighted: true
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
      "Dedicated infrastructure"],

    cta: "Contact Us",
    highlighted: false
  }];


const PricingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/sergiocastilloruiz04.ghostnet@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-foreground mb-4">
            Choose Your <span className="text-primary text-glow">Cover</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">GhostNet plans. All tiers include end-to-end encryption by default.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) =>
            <Card
              key={plan.name}
              className={`relative flex flex-col border transition-all duration-300 ${plan.highlighted ?
                "border-primary/50 bg-primary/5 box-glow scale-[1.02]" :
                "border-border/50 bg-card hover:border-border"}`
              }>

              {plan.highlighted &&
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-mono text-[10px] tracking-widest hover:bg-primary">
                    RECOMMENDED
                  </Badge>
                </div>
              }
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
                  {plan.features.map((feature) =>
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                {plan.cta === "Contact Us" ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className={`w-full font-mono tracking-wider text-sm uppercase ${plan.highlighted ?
                          "box-glow" :
                          "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`
                        }
                        variant={plan.highlighted ? "default" : "secondary"}>

                        {plan.cta}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="font-mono text-xl text-primary text-glow">Secure Comms Channel</DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                          Initiate a secure connection for enterprise inquiries. Your message will be handled with strict confidentiality.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        {/* Formsubmit config */}
                        <input type="hidden" name="_subject" value="New Contact Request - GhostNet Enterprise" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="box" />

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Return Address (Email)</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="alias@domain.com"
                            required
                            className="bg-background border-border text-foreground focus-visible:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Encrypted Payload (Message)</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="State your requirements here..."
                            required
                            className="min-h-[120px] bg-background border-border text-foreground focus-visible:ring-primary"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting || isSuccess}
                          className="w-full font-mono mt-4 box-glow bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                          {isSubmitting ? "Encrypting via HTTPS..." : isSuccess ? "Payload Delivered ✓" : "Transmit Message"}
                        </Button>

                        {isSuccess && (
                          <p className="text-xs text-primary text-center mt-2 font-mono">
                            Message safely transmitted to sergiocastilloruiz04.ghostnet@gmail.com
                          </p>
                        )}
                      </form>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    className={`w-full font-mono tracking-wider text-sm uppercase ${plan.highlighted ?
                      "box-glow" :
                      "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`
                    }
                    variant={plan.highlighted ? "default" : "secondary"}>

                    {plan.cta}
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default PricingSection;