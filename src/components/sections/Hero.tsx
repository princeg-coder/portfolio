
'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Available for new opportunities</span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="text-foreground">Backend</span> <span className="text-gradient">Engineer</span>
          <br />
          <span className="text-2xl md:text-5xl lg:text-6xl text-muted-foreground/80 mt-2 block">Node.js | AWS | Scalable Systems</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
          I design scalable backend systems, high-performance APIs, and robust cloud infrastructure for modern digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <Button size="lg" className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-white font-medium group">
            View Projects
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 glass border-white/10 hover:bg-white/5 font-medium">
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground/60 animate-in fade-in zoom-in duration-1000 delay-500">
          <a href="#" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
