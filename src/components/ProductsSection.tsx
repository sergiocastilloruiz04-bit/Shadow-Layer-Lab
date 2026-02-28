import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mail, Shield, HardDrive, Lock } from "lucide-react";

const products = [
  {
    name: "GhostNet",
    tagline: "End-to-end encrypted communications for hostile environments",
    icon: MessageSquare,
    status: "AVAILABLE NOW",
    available: true
  },
  {
    name: "ShadowMail",
    tagline: "Zero-knowledge email with self-destructing messages",
    icon: Mail,
    status: "COMING SOON",
    available: false
  },
  {
    name: "ShadowVPN",
    tagline: "Multi-hop routing through conflict-zone optimized servers",
    icon: Shield,
    status: "WORK IN PROGRESS",
    available: false
  },
  {
    name: "ShadowDrive",
    tagline: "Encrypted cloud storage with dead-man's switch",
    icon: HardDrive,
    status: "COMING SOON",
    available: false
  }];


const ProductsSection = () => {
  return (
    <section id="products" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono tracking-tight text-foreground mb-4">Shadow Layer Ecosystem
            <span className="text-primary text-glow"></span> Ecosystem
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
                className={`relative border transition-all duration-300 ${product.available ?
                    "border-primary/40 bg-primary/5 box-glow hover:border-primary/60" :
                    "border-border/50 bg-card/50 opacity-60 hover:opacity-75"}`
                }>

                {!product.available &&
                  <div className="absolute top-3 right-3">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  </div>
                }
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <Icon
                      className={`w-8 h-8 ${product.available ? "text-primary" : "text-muted-foreground"}`
                      } />

                  </div>
                  <Badge
                    className={`w-fit text-[10px] font-mono tracking-widest ${product.available ?
                        "bg-primary/20 text-primary border-primary/30 hover:bg-primary/30" :
                        "bg-muted text-muted-foreground border-border hover:bg-muted"}`
                    }
                    variant="outline">

                    {product.status}
                  </Badge>
                  <CardTitle className="text-lg font-mono mt-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.tagline}
                  </p>
                </CardContent>
              </Card>);

          })}
        </div>
      </div>
    </section>);

};

export default ProductsSection;