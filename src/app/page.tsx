'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, FileText, Briefcase, Mail, Github, Linkedin, Instagram, Download, Send, ChevronRight, MapPin, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl || '';

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row max-w-6xl w-full h-full md:h-[650px] relative">
        
        {/* Sidebar */}
        <div className="md:w-20 bg-white md:rounded-l-2xl border-r border-border flex flex-row md:flex-col items-center justify-between md:justify-start z-10 py-4 shadow-xl">
          <div className="hidden md:flex flex-col items-center gap-2 mb-8">
             <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xl">P</div>
          </div>
          
          <div className="flex flex-row md:flex-col w-full">
            {[
              { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
              { id: 'resume', label: 'Resume', icon: <FileText className="h-5 w-5" /> },
              { id: 'works', label: 'Works', icon: <Briefcase className="h-5 w-5" /> },
              { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 md:w-full flex flex-col items-center justify-center py-4 gap-1 text-[10px] font-bold uppercase transition-all hover:text-primary ${activeTab === item.id ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="flex-1 flex flex-col md:flex-row bg-white rounded-r-2xl overflow-hidden shadow-2xl relative">
          
          {/* Profile Section */}
          <div className="md:w-5/12 border-r border-border flex flex-col items-center justify-between p-8 text-center bg-gradient-to-b from-white to-muted/20">
            <div className="w-full">
              <div className="profile-img-container mb-8">
                <div className="relative z-10 h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                  <Image 
                    src={profileImg} 
                    alt="Prince Gupta" 
                    fill 
                    className="object-cover"
                    data-ai-hint="professional portrait"
                  />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-1">Prince Gupta</h1>
              <p className="text-primary font-medium text-sm mb-6">Senior Backend Developer</p>
              
              <div className="flex justify-center gap-4 mb-8">
                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full gap-2 border-t border-border pt-6 mt-auto">
              <Button variant="ghost" className="h-12 font-bold uppercase text-xs tracking-wider">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="h-12 font-bold uppercase text-xs tracking-wider border-l border-border rounded-none">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="about" className="m-0 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-primary">About</span> Me
                    <div className="h-[2px] w-20 bg-primary/20 rounded-full" />
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in architecting scalable, high-performance backend systems using Node.js and AWS. With over 4.5 years of experience, I focus on building robust APIs and microservices that power seamless digital experiences.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-y-4 mb-10 text-sm">
                  <div className="flex justify-between border-b border-border pb-2 pr-4">
                    <span className="font-bold bg-primary/10 text-primary px-2 rounded">Email</span>
                    <span className="text-muted-foreground">contact@prince.dev</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2 pr-4">
                    <span className="font-bold bg-primary/10 text-primary px-2 rounded">Residence</span>
                    <span className="text-muted-foreground">India</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2 pr-4">
                    <span className="font-bold bg-primary/10 text-primary px-2 rounded">Status</span>
                    <span className="text-muted-foreground">Available</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2 pr-4">
                    <span className="font-bold bg-primary/10 text-primary px-2 rounded">Remote</span>
                    <span className="text-muted-foreground">Yes</span>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Quote</h3>
                   <blockquote className="text-lg font-medium italic text-muted-foreground/80">
                     "The invisible engines I build define the power of the user experience. Engineering is about controling complexity, not adding to it."
                   </blockquote>
                </div>
              </TabsContent>

              <TabsContent value="resume" className="m-0 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="text-primary">My</span> Resume
                  <div className="h-[2px] w-20 bg-primary/20 rounded-full" />
                </h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white" />
                    <div className="text-xs text-primary font-bold mb-1">2021 — PRESENT</div>
                    <h3 className="text-lg font-bold">Senior Backend Developer</h3>
                    <div className="text-sm text-muted-foreground mb-4">Dream Filler Software Solution</div>
                    <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                      <li>Designed and optimized scalable REST APIs for high-traffic mobile applications.</li>
                      <li>Implemented real-time notification systems using WebSockets and MQTT.</li>
                      <li>Managed AWS cloud infrastructure (EC2, RDS, S3) and CI/CD pipelines.</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-bold uppercase mb-4 text-primary">Backend Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'Microservices', 'REST', 'GraphQL'].map(s => <Badge key={s} variant="outline" className="border-primary/20">{s}</Badge>)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase mb-4 text-primary">Cloud & DB</h3>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'Lambda', 'RDS', 'PostgreSQL', 'Redis'].map(s => <Badge key={s} variant="outline" className="border-primary/20">{s}</Badge>)}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="works" className="m-0 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="text-primary">Featured</span> Works
                  <div className="h-[2px] w-20 bg-primary/20 rounded-full" />
                </h2>
                <div className="grid gap-6">
                  {[
                    { title: 'Qiklet – Hyperlocal Marketplace', tech: 'Node.js, PostgreSQL, AWS', img: PlaceHolderImages.find(i => i.id === 'qiklet-thumbnail')?.imageUrl },
                    { title: 'IoT Device Platform', tech: 'Node.js, AWS IoT, MQTT', img: PlaceHolderImages.find(i => i.id === 'iot-platform-thumbnail')?.imageUrl },
                  ].map((project, i) => (
                    <Card key={i} className="group overflow-hidden border-border hover:border-primary/50 transition-all cursor-pointer">
                      <div className="relative aspect-video">
                        <Image src={project.img || ''} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <Button className="bg-white text-black hover:bg-white/90">View Project</Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-xs text-muted-foreground">{project.tech}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="m-0 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="text-primary">Get In</span> Touch
                  <div className="h-[2px] w-20 bg-primary/20 rounded-full" />
                </h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input className="w-full h-12 px-4 bg-muted/30 border border-border rounded-lg outline-none focus:border-primary" placeholder="Full Name" />
                    <input className="w-full h-12 px-4 bg-muted/30 border border-border rounded-lg outline-none focus:border-primary" placeholder="Email Address" />
                  </div>
                  <textarea className="w-full p-4 bg-muted/30 border border-border rounded-lg outline-none focus:border-primary min-h-[150px]" placeholder="Your Message" />
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 font-bold uppercase tracking-widest">
                    Send Message <Send className="ml-2 h-4 w-4" />
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