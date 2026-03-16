'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, FileText, Briefcase, Mail, Github, Linkedin, Instagram, Download, Send, ChevronRight, Terminal, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl || '';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 selection:bg-primary/30">
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col md:flex-row max-w-6xl w-full h-full md:h-[700px] relative">
        
        {/* Sidebar Navigation */}
        <div className="md:w-20 bg-zinc-900/80 backdrop-blur-xl md:rounded-l-3xl border-r border-white/5 flex flex-row md:flex-col items-center justify-between md:justify-start z-10 py-6 shadow-2xl">
          <div className="hidden md:flex flex-col items-center gap-2 mb-12">
             <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-black font-black text-2xl shadow-lg shadow-primary/20">P</div>
          </div>
          
          <div className="flex flex-row md:flex-col w-full px-2 md:px-0">
            {[
              { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
              { id: 'resume', label: 'Resume', icon: <FileText className="h-5 w-5" /> },
              { id: 'works', label: 'Works', icon: <Briefcase className="h-5 w-5" /> },
              { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 md:w-full flex flex-col items-center justify-center py-5 gap-1.5 text-[10px] font-bold uppercase tracking-tighter transition-all hover:text-primary ${activeTab === item.id ? 'text-primary' : 'text-zinc-500'}`}
              >
                <div className={`p-2 rounded-xl transition-colors ${activeTab === item.id ? 'bg-primary/10' : 'bg-transparent'}`}>
                  {item.icon}
                </div>
                <span className="md:block hidden">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col md:flex-row bg-zinc-900/40 backdrop-blur-md md:rounded-r-3xl overflow-hidden border border-white/5 shadow-2xl relative">
          
          {/* Profile Details Section */}
          <div className="md:w-5/12 border-r border-white/5 flex flex-col items-center justify-between p-10 text-center bg-gradient-to-b from-zinc-800/20 to-transparent">
            <div className="w-full">
              <div className="profile-img-container mb-10">
                <div className="relative z-10 h-44 w-44 rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 shadow-2xl mx-auto transform rotate-3">
                  <Image 
                    src={profileImg} 
                    alt="Prince Gupta" 
                    fill 
                    className="object-cover -rotate-3 scale-110"
                    data-ai-hint="professional portrait"
                  />
                </div>
              </div>
              
              <h1 className="text-3xl font-black mb-2 tracking-tight">Prince Gupta</h1>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                Senior Backend Engineer
              </div>
              
              <div className="flex justify-center gap-4 mb-10">
                <a href="#" className="p-3 bg-zinc-800/50 rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-zinc-800/50 rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-zinc-800/50 rounded-2xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full gap-4 border-t border-white/5 pt-8 mt-auto">
              <Button variant="outline" className="h-14 rounded-2xl font-bold uppercase text-xs tracking-widest border-zinc-800 hover:bg-zinc-800">
                CV <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button className="h-14 rounded-2xl font-bold uppercase text-xs tracking-widest bg-primary text-black hover:bg-primary/90">
                Hire Me
              </Button>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="about" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-black uppercase tracking-tight">About <span className="text-primary">Me</span></h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    I architect high-performance, distributed backend systems. With a deep focus on Node.js and AWS, I build the invisible yet powerful engines that drive modern web ecosystems.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { label: 'Specialization', value: 'System Design', icon: <Server className="h-4 w-4" /> },
                    { label: 'Environment', value: 'AWS Cloud', icon: <Database className="h-4 w-4" /> },
                    { label: 'Language', value: 'TypeScript/Node', icon: <Terminal className="h-4 w-4" /> },
                    { label: 'Availability', value: 'Open to Work', icon: <ChevronRight className="h-4 w-4" /> },
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-2xl border border-white/5">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">{info.icon}</div>
                      <div>
                        <div className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">{info.label}</div>
                        <div className="text-sm font-bold text-zinc-200">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative p-8 rounded-3xl bg-primary/5 border border-primary/10 overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Terminal className="h-24 w-24" />
                   </div>
                   <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Philosophy</h3>
                   <blockquote className="text-xl font-medium italic text-zinc-300">
                     "Simplicity is the ultimate sophistication in backend engineering. I build for scale, but I architect for clarity."
                   </blockquote>
                </div>
              </TabsContent>

              <TabsContent value="resume" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-10">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Professional <span className="text-primary">Path</span></h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                
                <div className="space-y-10">
                  <div className="relative pl-10 border-l-2 border-primary/20">
                    <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/20 border-4 border-zinc-900" />
                    <div className="text-xs text-primary font-black mb-2 tracking-[0.2em]">2021 — PRESENT</div>
                    <h3 className="text-xl font-black">Senior Backend Developer</h3>
                    <div className="text-sm text-zinc-500 font-bold mb-6 italic">Dream Filler Software Solution</div>
                    <ul className="text-sm text-zinc-400 space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        Designed and optimized scalable REST APIs for high-traffic mobile applications.
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        Implemented real-time notification systems using WebSockets and MQTT.
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-zinc-800/20 rounded-3xl border border-white/5">
                      <h3 className="text-xs font-black uppercase mb-6 tracking-widest text-primary">Core Backend</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'Microservices', 'REST', 'GraphQL'].map(s => (
                          <Badge key={s} variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-400 py-1.5 px-3">{s}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 bg-zinc-800/20 rounded-3xl border border-white/5">
                      <h3 className="text-xs font-black uppercase mb-6 tracking-widest text-primary">Cloud & Data</h3>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'Lambda', 'PostgreSQL', 'Redis', 'Docker'].map(s => (
                          <Badge key={s} variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-400 py-1.5 px-3">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="works" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-10">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Featured <span className="text-primary">Works</span></h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <div className="grid gap-8">
                  {[
                    { title: 'Qiklet Marketplace', tech: 'Node.js, PostgreSQL, AWS', img: PlaceHolderImages.find(i => i.id === 'qiklet-thumbnail')?.imageUrl },
                    { title: 'IoT Device Platform', tech: 'Node.js, AWS IoT, MQTT', img: PlaceHolderImages.find(i => i.id === 'iot-platform-thumbnail')?.imageUrl },
                  ].map((project, i) => (
                    <Card key={i} className="group overflow-hidden bg-zinc-900 border-white/5 hover:border-primary/30 transition-all duration-500 rounded-3xl">
                      <div className="relative aspect-video">
                        <Image src={project.img || ''} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                           <h3 className="font-black text-2xl group-hover:text-primary transition-colors">{project.title}</h3>
                           <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">{project.tech}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-10">
                  <h2 className="text-2xl font-black uppercase tracking-tight">Get <span className="text-primary">In Touch</span></h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                      <input className="w-full h-14 px-6 bg-zinc-800/30 border border-white/5 rounded-2xl outline-none focus:border-primary/50 transition-all text-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email</label>
                      <input className="w-full h-14 px-6 bg-zinc-800/30 border border-white/5 rounded-2xl outline-none focus:border-primary/50 transition-all text-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                    <textarea className="w-full p-6 bg-zinc-800/30 border border-white/5 rounded-2xl outline-none focus:border-primary/50 transition-all text-sm min-h-[150px] resize-none" placeholder="Let's build something amazing together..." />
                  </div>
                  <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/10">
                    Send Transmission <Send className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>

      </div>
    </div>
  );
}