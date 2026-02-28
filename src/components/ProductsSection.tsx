import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mail, Shield, HardDrive, Lock } from "lucide-react";

const products = [
  {
    name: "GhostNet Messenger",
    tagline: "End-to-end encrypted communications for hostile environments. Built for the Pro Correspondent.",
    icon: MessageSquare,
    status: "AVAILABLE NOW",
    available: true,
  },
  {
    name: "OnyxMail",
    tagline: "Zero-knowledge email with self-destructing messages and untraceable routing",
    icon: Mail,
    status: "COMING SOON",
    available: false,
  },
  {
    name: "Phalanx Tunnel",
    tagline: "Multi-hop routing through conflict-zone optimized servers with kill-switch failsafes",
    icon: Shield,
    status: "WORK IN PROGRESS",
    available: false,
  },
  {
    name: "Cryptic Vault",
    tagline: "Encrypted cloud storage with dead-man's switch and plausible deniability layers",
    icon: HardDrive,
    status: "COMING SOON",
    available: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground mb-4">
            The <span className="text-primary text-glow">Shadow Layer</span> Ecosystem
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A suite of privacy tools engineered for those who cannot afford to be seen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className={`relative rounded-xl transition-all duration-300 ${
                  product.available
                    ? "glass-card-active box-glow hover:border-primary/40"
                    : "glass-card opacity-60 hover:opacity-75"
                }`}
              >
                {!product.available && (
                  <div className="absolute top-3 right-3">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <Icon
                      className={`w-8 h-8 ${
                        product.available ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <Badge
                    className={`w-fit text-[10px] font-mono tracking-widest ${
                      product.available
                        ? "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30"
                        : "bg-muted text-muted-foreground border-border hover:bg-muted"
                    }`}
                    variant="outline"
                  >
                    {product.status}
                  </Badge>
                  <CardTitle className="text-lg font-mono mt-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.tagline}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
