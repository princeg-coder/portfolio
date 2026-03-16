
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  User, FileText, Briefcase, Mail, Github, Linkedin, 
  Download, Send, ChevronRight, Terminal, Database, 
  Server, Phone, MapPin, Award, BookOpen, Cpu, Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { toast } from '@/hooks/use-toast';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl || '';

  const handleCopyPrompt = () => {
    const context = `
Developer: Prince Gupta
Role: Senior Backend Developer (Node.js)
Experience: 4.5+ years
Core Skills: Node.js, Express.js, AWS (EC2, RDS, S3, Lambda, API Gateway), PostgreSQL, MongoDB, Microservices, Socket.IO, MQTT.
Key Projects: QIKLET (Hyperlocal Marketplace), Broan & NuTone (IoT), Age Industries (IoT).
Education: B.E. in CS (2018).
Certification: Preparing for AWS SAA-C03.
    `.trim();
    
    navigator.clipboard.writeText(context);
    toast({
      title: "AI Context Copied!",
      description: "Professional background ready for your AI assistant.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 selection:bg-primary/30">
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col md:flex-row max-w-6xl w-full h-full md:h-[750px] relative">
        
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
              <div className="profile-img-container mb-8">
                <div className="relative z-10 h-40 w-40 rounded-[2.5rem] overflow-hidden border-4 border-zinc-800 shadow-2xl mx-auto transform rotate-2">
                  <Image 
                    src={profileImg} 
                    alt="Prince Gupta" 
                    fill 
                    className="object-cover -rotate-2 scale-110"
                    data-ai-hint="professional portrait"
                  />
                </div>
              </div>
              
              <h1 className="text-2xl font-black mb-1 tracking-tight">Prince Gupta</h1>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Senior Backend Engineer
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-3 text-zinc-400 text-xs">
                  <Mail className="h-3 w-3 text-primary" />
                  <span>princegupta619@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-400 text-xs">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>+91 9630122786</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-400 text-xs">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span>Remote | India</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 mb-8">
                <a href="#" className="p-2.5 bg-zinc-800/50 rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="p-2.5 bg-zinc-800/50 rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full gap-3 border-t border-white/5 pt-8 mt-auto">
              <Button variant="outline" className="h-12 rounded-xl font-bold uppercase text-[10px] tracking-widest border-zinc-800 hover:bg-zinc-800">
                CV <Download className="ml-2 h-3 w-3" />
              </Button>
              <Button onClick={handleCopyPrompt} className="h-12 rounded-xl font-bold uppercase text-[10px] tracking-widest bg-primary text-black hover:bg-primary/90">
                AI Context
              </Button>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
            <Tabs value={activeTab} className="w-full">
              {/* About Section */}
              <TabsContent value="about" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-black uppercase tracking-tight">Summary</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    Results-driven Backend Developer (Node.js) with 4.5+ years of experience designing and building scalable REST APIs, working with SQL/NoSQL databases, deploying cloud workloads on AWS, and delivering real-time production-grade applications.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { label: 'Experience', value: '4.5+ Years', icon: <Briefcase className="h-4 w-4" /> },
                    { label: 'Cloud Focus', value: 'AWS (SAA-C03)', icon: <Database className="h-4 w-4" /> },
                    { label: 'Core Stack', value: 'Node.js / Express', icon: <Terminal className="h-4 w-4" /> },
                    { label: 'Architecture', value: 'Microservices', icon: <Server className="h-4 w-4" /> },
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-zinc-800/30 rounded-2xl border border-white/5">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">{info.icon}</div>
                      <div>
                        <div className="text-[9px] font-bold uppercase text-zinc-500 tracking-widest">{info.label}</div>
                        <div className="text-xs font-bold text-zinc-200">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative p-6 rounded-2xl bg-primary/5 border border-primary/10 overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Cpu className="h-16 w-16" />
                   </div>
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Philosophy</h3>
                   <blockquote className="text-sm font-medium italic text-zinc-300">
                     "I specialize in building the invisible engines that power high-impact applications. Currently focused on cloud scalability and resilient system design."
                   </blockquote>
                </div>
              </TabsContent>

              {/* Resume Section */}
              <TabsContent value="resume" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tight">Experience</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                
                <div className="space-y-8 mb-12">
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/20 border-4 border-zinc-900" />
                    <div className="text-[10px] text-primary font-black mb-1 tracking-[0.2em]">SEPT 2021 — PRESENT</div>
                    <h3 className="text-lg font-black">Software Developer</h3>
                    <div className="text-xs text-zinc-500 font-bold mb-4 italic">Dream Filler Software Solution Pvt. Ltd.</div>
                    <ul className="text-xs text-zinc-400 space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                        Designed and developed scalable REST APIs using Node.js, Express.js, and PostgreSQL.
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                        Built real-time notification systems using WebSockets, Socket.IO, and MQTT protocols.
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                        Managed AWS cloud infrastructure (EC2, RDS, S3, Lambda, API Gateway).
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  <div className="p-5 bg-zinc-800/20 rounded-2xl border border-white/5">
                    <h3 className="text-[10px] font-black uppercase mb-4 tracking-widest text-primary flex items-center gap-2">
                      <Code className="h-3 w-3" /> Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {['Node.js', 'Express', 'JavaScript', 'Python', 'Sequelize', 'JWT'].map(s => (
                        <Badge key={s} variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 text-[9px] py-1 px-2">{s}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-5 bg-zinc-800/20 rounded-2xl border border-white/5">
                    <h3 className="text-[10px] font-black uppercase mb-4 tracking-widest text-primary flex items-center gap-2">
                      <Award className="h-3 w-3" /> Certifications
                    </h3>
                    <div className="space-y-2">
                      <div className="text-[10px] text-zinc-300 font-bold">AWS Certified Solutions Architect</div>
                      <div className="text-[9px] text-zinc-500">Preparing for Associate (SAA-C03)</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tight">Education</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-zinc-700 border-4 border-zinc-900" />
                    <div className="text-[10px] text-zinc-500 font-black mb-1 tracking-[0.2em]">2014 — 2018</div>
                    <h3 className="text-sm font-black text-zinc-200 uppercase">Bachelor of Engineering – Computer Science</h3>
                    <div className="text-xs text-zinc-500 font-bold mb-2">Bansal Institute of Research and Technology, Bhopal</div>
                    <Badge variant="outline" className="text-[9px]">CGPA: 6.63 / 10</Badge>
                </div>
              </TabsContent>

              {/* Works Section */}
              <TabsContent value="works" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tight">Projects</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <div className="grid gap-6">
                  {[
                    { 
                      title: 'QIKLET Marketplace', 
                      tech: 'Node.js, PostgreSQL, Socket.IO', 
                      desc: 'Hyperlocal marketplace & POS platform with real-time delivery workflows.',
                      img: PlaceHolderImages.find(i => i.id === 'qiklet-thumbnail')?.imageUrl 
                    },
                    { 
                      title: 'Broan & NuTone IoT', 
                      tech: 'AWS IoT Core, MQTT, Node.js', 
                      desc: 'IoT device platform for onboarding, telemetry, and remote control.',
                      img: PlaceHolderImages.find(i => i.id === 'iot-platform-thumbnail')?.imageUrl 
                    },
                    { 
                      title: 'Age Industries BLDC', 
                      tech: 'MQTT, telemetry, Node.js', 
                      desc: 'Remote monitoring platform for smart BLDC fans.',
                      img: PlaceHolderImages.find(i => i.id === 'age-industries-thumbnail')?.imageUrl 
                    },
                    { 
                      title: 'AWS Infrastructure', 
                      tech: 'Cloud Engineering, Cost Opt', 
                      desc: 'Reduced cloud costs by 60% via Linux migration and architecture optimization.',
                      img: PlaceHolderImages.find(i => i.id === 'aws-opt-thumbnail')?.imageUrl 
                    },
                  ].map((project, i) => (
                    <Card key={i} className="group overflow-hidden bg-zinc-900 border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl">
                      <div className="flex flex-col sm:flex-row h-full">
                        <div className="sm:w-1/3 relative aspect-video sm:aspect-auto">
                          <Image src={project.img || ''} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-100" />
                        </div>
                        <div className="flex-1 p-5">
                           <h3 className="font-black text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                           <p className="text-[9px] font-bold text-primary uppercase tracking-widest mt-1 mb-2">{project.tech}</p>
                           <p className="text-xs text-zinc-500 line-clamp-2">{project.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Contact Section */}
              <TabsContent value="contact" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tight">Contact</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-zinc-800/30 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                    <Mail className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Email</h4>
                    <p className="text-xs font-bold text-zinc-200">princegupta619@gmail.com</p>
                  </div>
                  <div className="p-6 bg-zinc-800/30 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                    <Phone className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Phone</h4>
                    <p className="text-xs font-bold text-zinc-200">+91 9630122786</p>
                  </div>
                </div>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input className="w-full h-12 px-5 bg-zinc-800/30 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-xs" placeholder="Full Name" />
                    <input className="w-full h-12 px-5 bg-zinc-800/30 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-xs" placeholder="Email Address" />
                  </div>
                  <textarea className="w-full p-5 bg-zinc-800/30 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-xs min-h-[120px] resize-none" placeholder="How can I help you build your backend?" />
                  <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-xl shadow-xl shadow-primary/10">
                    Send Transmission <Send className="ml-3 h-4 w-4" />
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
