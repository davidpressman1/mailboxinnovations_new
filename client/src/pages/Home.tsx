import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Simple Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">10k+</div>
              <div className="text-primary-foreground/80 font-medium">Emails Created</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">99.9%</div>
              <div className="text-primary-foreground/80 font-medium">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">24/7</div>
              <div className="text-primary-foreground/80 font-medium">Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">5★</div>
              <div className="text-primary-foreground/80 font-medium">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4">Mailbox Innovations</h3>
            <p className="max-w-xs text-slate-400">
              Transforming businesses one email address at a time. Upgrade from personal to professional today.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center text-slate-500">
          © 2024 Mailbox Innovations. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
