'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'qiklet',
    title: 'Qiklet – Hyperlocal Marketplace',
    description: 'A robust hyperlocal ecosystem featuring order management, real-time vendor dashboards, and complex POS integrations.',
    tech: ['Node.js', 'PostgreSQL', 'AWS', 'Socket.io'],
    thumbnail: PlaceHolderImages.find(img => img.id === 'qiklet-thumbnail')?.imageUrl,
    features: ['Order Management', 'Real-time Notifications', 'Vendor Dashboard', 'POS Integration'],
    github: '#'
  },
  {
    id: 'iot',
    title: 'IoT Device Platform',
    description: 'Scalable IoT platform built for real-time device telemetry and remote control using MQTT protocols.',
    tech: ['Node.js', 'AWS IoT', 'MQTT'],
    thumbnail: PlaceHolderImages.find(img => img.id === 'iot-platform-thumbnail')?.imageUrl,
    features: ['Device Onboarding', 'Real-time Telemetry', 'Remote Control'],
    github: '#'
  },
  {
    id: 'aws-opt',
    title: 'AWS Infrastructure Optimization',
    description: 'Strategic redesign of cloud architecture resulting in massive performance gains and significant cost reduction.',
    tech: ['AWS EC2', 'Linux', 'Terraform'],
    thumbnail: PlaceHolderImages.find(img => img.id === 'aws-opt-thumbnail')?.imageUrl,
    features: ['Cost Reduction (60%)', 'Auto-scaling', 'High Availability'],
    github: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground">Detailed technical implementations of complex backend architectures and enterprise solutions.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 group">
            Browse All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <div key={project.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1 w-full">
                <div className="relative group overflow-hidden rounded-3xl border border-white/10 glass">
                  <div className="aspect-video relative">
                    <Image 
                      src={project.thumbnail || 'https://picsum.photos/seed/1/800/600'} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="project dashboard"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="flex gap-4">
                      <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90">
                        <Github className="h-4 w-4 mr-2" /> Repo
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full glass border-white/20 text-white">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} className="bg-primary/10 text-primary border-primary/20">{t}</Badge>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}