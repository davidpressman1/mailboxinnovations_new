import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    // Reset after animation completes to allow re-play
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Upgrade Your Professional Image
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Don't Send Business emails from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gmail.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We create custom professional email addresses that make your company look established and trustworthy. Stop using personal emails for business today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
              Start Your Transition
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-2 bg-background/50 backdrop-blur-sm">
              View Pricing
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6 text-sm text-muted-foreground pt-4"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Domain Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Interactive Envelope */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-2xl" />
          
          <div className="relative w-full max-w-md aspect-square flex flex-col items-center justify-center p-8">
             {/* The Interactive Area */}
             <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000">
                <AnimatePresence mode="wait">
                  {!isSent ? (
                    <motion.div
                      key="envelope"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                      onClick={handleSend}
                    >
                      {/* Envelope Graphic using pure CSS/SVG-like divs for better animation control */}
                      <div className="relative w-full h-48 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 transform transition-transform group-hover:scale-105 duration-300">
                         {/* Envelope Flap Open */}
                         <div className="absolute top-0 left-0 w-full h-0 border-l-[160px] border-r-[160px] border-t-[100px] border-l-transparent border-r-transparent border-t-gray-100 z-10 origin-top transform group-hover:rotate-x-180 transition-all duration-500 ease-in-out"></div>
                         
                         {/* Letter peeking out */}
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-primary/5 rounded-t-sm shadow-inner flex items-center justify-center p-4 transform translate-y-8 group-hover:translate-y-2 transition-transform duration-500">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
                                <Send className="w-6 h-6" />
                              </div>
                              <p className="text-xs font-semibold text-foreground">professional@business.com</p>
                              <Button size="sm" className="mt-4 w-full" onClick={(e) => { e.stopPropagation(); handleSend(); }}>
                                Send Now
                              </Button>
                            </div>
                         </div>

                         {/* Envelope Body (Bottom triangles) */}
                         <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] border-b-[100px] border-r-[160px] border-l-transparent border-r-transparent border-b-white z-20 drop-shadow-sm"></div>
                         <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] border-b-[100px] border-r-[160px] border-l-gray-50 border-r-gray-50 border-b-transparent z-20 opacity-50 mix-blend-multiply pointer-events-none"></div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plane"
                      initial={{ opacity: 0, scale: 0.5, x: 0, y: 0, rotate: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 0.8, 0.2],
                        x: [0, 0, 200, 800],
                        y: [0, 0, -100, -400],
                        rotate: [0, 0, 15, 45]
                      }}
                      transition={{ 
                        duration: 1.5,
                        times: [0, 0.2, 0.5, 1],
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Paper Plane Graphic */}
                      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary drop-shadow-2xl">
                        <path d="M2 12L22 2L15 22L11 13L2 12Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      
                      {/* Swoosh lines */}
                      <motion.div 
                        className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "200%" }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
             
             <p className="mt-8 text-center text-sm font-medium text-muted-foreground animate-pulse">
               {isSent ? "Message Sent!" : "Click the envelope to send"}
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
