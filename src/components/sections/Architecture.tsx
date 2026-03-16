
'use client';

import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const diagrams = [
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    description: 'Decomposed application into small, independent services communicating over synchronous or asynchronous protocols.',
    image: PlaceHolderImages.find(img => img.id === 'microservices-arch')?.imageUrl
  },
  {
    id: 'api-gateway',
    title: 'API Gateway Architecture',
    description: 'Centralized entry point for clients, handling routing, composition, and security policies.',
    image: PlaceHolderImages.find(img => img.id === 'api-gateway-arch')?.imageUrl
  },
  {
    id: 'event-driven',
    title: 'Event-Driven System',
    description: 'Loose coupling between components using message queues like ActiveMQ and MQTT for high scalability.',
    image: PlaceHolderImages.find(img => img.id === 'event-driven-arch')?.imageUrl
  }
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">System <span className="text-gradient">Architecture</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Visualizing the complex backend patterns I implement for enterprise-scale reliability.</p>
        </div>

        <Tabs defaultValue="microservices" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="glass border-white/5 p-1 h-auto rounded-full overflow-hidden">
              {diagrams.map(d => (
                <TabsTrigger 
                  key={d.id} 
                  value={d.id} 
                  className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {d.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {diagrams.map(d => (
            <TabsContent key={d.id} value={d.id} className="animate-in fade-in zoom-in-95 duration-500">
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2 relative aspect-[3/2] rounded-3xl overflow-hidden border border-white/10 glass">
                  <Image 
                    src={d.image || 'https://picsum.photos/seed/1/1200/800'} 
                    alt={d.title} 
                    fill 
                    className="object-cover"
                    data-ai-hint="system diagram"
                  />
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{d.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {d.description}
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 glass rounded-2xl border-white/5">
                      <h4 className="text-xs font-headline uppercase tracking-widest text-primary mb-1">Key Benefit</h4>
                      <p className="text-sm font-medium">Enhanced Scalability & Independent Deployment</p>
                    </div>
                    <div className="p-4 glass rounded-2xl border-white/5">
                      <h4 className="text-xs font-headline uppercase tracking-widest text-secondary mb-1">Tech Used</h4>
                      <p className="text-sm font-medium">Node.js, AWS Lambda, Redis, RabbitMQ</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
