
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';

export function GitHubActivity() {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="glass p-8 md:p-12 rounded-[40px] border-white/5 overflow-hidden relative">
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Github className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Open Source <span className="text-gradient">Activity</span></h2>
              </div>
              <p className="text-muted-foreground max-w-md">
                Continuous contribution to the developer community through scalable libraries and architectural tools.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="flex flex-wrap justify-center gap-1">
                {/* Mock Contribution Graph */}
                {Array.from({ length: 280 }).map((_, i) => {
                  const intensity = Math.random();
                  const color = intensity > 0.8 ? 'bg-primary' : intensity > 0.5 ? 'bg-primary/60' : intensity > 0.2 ? 'bg-primary/30' : 'bg-white/5';
                  return (
                    <div key={i} className={`w-2 h-2 rounded-sm ${color}`} />
                  );
                })}
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-muted-foreground uppercase tracking-widest">
                Less <div className="w-2 h-2 rounded-sm bg-white/5" />
                <div className="w-2 h-2 rounded-sm bg-primary/30" />
                <div className="w-2 h-2 rounded-sm bg-primary/60" />
                <div className="w-2 h-2 rounded-sm bg-primary" /> More
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
