import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-primary/10 flex items-center justify-center">
              <img src={logo} alt="Mailbox Innovations" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Mailbox Innovations
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Why Us
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            Get Professional
          </Button>
        </div>
      </div>
    </nav>
  );
}
