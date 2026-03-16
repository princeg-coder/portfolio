
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Cloud, Cpu, Layout, Zap, Workflow } from 'lucide-react';

const specializations = [
  { icon: <Cpu className="h-5 w-5" />, title: 'Node.js', description: 'Highly scalable runtime environments' },
  { icon: <Workflow className="h-5 w-5" />, title: 'Microservices', description: 'Distributed systems architecture' },
  { icon: <Cloud className="h-5 w-5" />, title: 'AWS Cloud', description: 'Infrastructure and serverless' },
  { icon: <Zap className="h-5 w-5" />, title: 'REST APIs', description: 'High-performance API design' },
  { icon: <Server className="h-5 w-5" />, title: 'Scalable Systems', description: 'Architecting for high load' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-headline text-primary uppercase tracking-wider">
              Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Engineering <span className="text-primary">Reliable</span> Backend Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 4.5 years of experience, I've dedicated my career to building the invisible engines that power high-impact applications. I specialize in architecting distributed systems that are as scalable as they are performant.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl glass border-white/5">
                <div className="text-3xl font-bold text-primary">4.5+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl glass border-white/5">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Deployments</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {specializations.map((spec, i) => (
              <Card key={i} className="glass border-white/5 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    {spec.icon}
                  </div>
                  <h3 className="font-headline font-bold mb-1">{spec.title}</h3>
                  <p className="text-xs text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
