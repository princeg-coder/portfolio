
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Have a complex backend challenge or interested in a potential collaboration? I'm always open to discussing new opportunities and system designs.
            </p>

            <div className="space-y-6">
              <a href="mailto:prince@example.com" className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 hover:border-primary/50 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Email</div>
                  <div className="font-bold">contact@princegupta.dev</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5 hover:border-primary/50 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">LinkedIn</div>
                  <div className="font-bold">linkedin.com/in/prince-gupta</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 glass rounded-2xl border-white/5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Location</div>
                  <div className="font-bold">Remote | India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[40px] border-white/5 relative">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-headline uppercase tracking-widest text-muted-foreground">Your Name</label>
                  <Input placeholder="John Doe" className="bg-background/50 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline uppercase tracking-widest text-muted-foreground">Your Email</label>
                  <Input placeholder="john@example.com" className="bg-background/50 border-white/10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-headline uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-background/50 border-white/10 min-h-[150px] resize-none" />
              </div>
              <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold group">
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
