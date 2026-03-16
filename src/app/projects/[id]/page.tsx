
'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Play, Globe, 
  ExternalLink, ShieldCheck, CheckCircle2, 
  Terminal, Server, Database, Cloud, Code 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/lib/projects-data';

const IconMap = {
  Play: <Play className="h-4 w-4" />,
  Globe: <Globe className="h-4 w-4" />,
  ExternalLink: <ExternalLink className="h-4 w-4" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4" />,
};

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-400">
        Project not found. <Link href="/" className="ml-2 text-primary hover:underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-12 selection:bg-primary/30">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <button 
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Back to Portfolio</span>
        </button>

        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary text-[8px] uppercase tracking-widest py-1 px-3">
              {project.type}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-primary font-bold uppercase tracking-widest mb-8">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} className="bg-zinc-900 border-white/5 text-zinc-400 text-[9px] py-1 px-2">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 mb-16 shadow-2xl">
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-black uppercase tracking-tight">Overview</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {project.longDescription}
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-black uppercase tracking-tight">Key Responsibilities</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
              </div>
              <ul className="space-y-4">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-zinc-900/40 rounded-2xl border border-white/5">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <span className="text-xs text-zinc-300 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-black uppercase tracking-tight">Architecture</h2>
              </div>
              <div className="space-y-4">
                {project.architecture.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                    <div className="h-1 w-1 bg-primary rounded-full" />
                    {a}
                  </div>
                ))}
              </div>
            </section>

            {project.link !== '#' && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-black uppercase tracking-tight">Launch</h2>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex w-full items-center justify-center gap-3 h-14 bg-primary text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
                >
                  Visit Project {IconMap[project.iconName]}
                </a>
              </section>
            )}

            <section className="p-6 bg-zinc-900/40 rounded-[2rem] border border-white/5">
               <div className="flex items-center gap-3 mb-4">
                 <Terminal className="h-4 w-4 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Stack Details</span>
               </div>
               <div className="grid grid-cols-2 gap-3">
                 <div className="p-3 bg-zinc-900 rounded-xl flex flex-col gap-1">
                   <Server className="h-3 w-3 text-zinc-600" />
                   <span className="text-[8px] font-bold text-zinc-500 uppercase">Runtime</span>
                   <span className="text-[10px] font-black">Node.js</span>
                 </div>
                 <div className="p-3 bg-zinc-900 rounded-xl flex flex-col gap-1">
                   <Database className="h-3 w-3 text-zinc-600" />
                   <span className="text-[8px] font-bold text-zinc-500 uppercase">Engine</span>
                   <span className="text-[10px] font-black">Postgres</span>
                 </div>
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
