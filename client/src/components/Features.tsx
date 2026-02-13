import { Shield, TrendingUp, Users, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Build Trust Instantly",
    description: "Customers are 9x more likely to choose a business with a professional email address over a generic Gmail account."
  },
  {
    icon: TrendingUp,
    title: "Look Established",
    description: "Even if you're a team of one, a custom domain email makes you look like an enterprise-ready organization."
  },
  {
    icon: Users,
    title: "Separate Work & Life",
    description: "Keep your personal inbox for friends and family. Use your business email strictly for professional communication."
  },
  {
    icon: Mail,
    title: "Better Deliverability",
    description: "Professional email domains have better reputation scores, meaning you land in the Inbox, not Spam."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why Upgrade?</h2>
          <p className="text-lg text-muted-foreground">
            Your email address is often the first impression you make. Make it count with a professional identity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-secondary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-gray-100">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
