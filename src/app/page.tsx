
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  User, FileText, Briefcase, Mail, Github, Linkedin, 
  Download, ChevronRight, Terminal, Database, 
  Server, Phone, MapPin, Code, Play, Globe, 
  ExternalLink, ShieldCheck, Cloud, CheckCircle2, Send, Award, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { toast } from '@/hooks/use-toast';
import { PROJECTS } from '@/lib/projects-data';

const CircularSkill = ({ label, percentage }: { label: string; percentage: number }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-zinc-800"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-primary transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-zinc-200">
          {percentage}%
        </div>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 text-center">{label}</span>
    </div>
  );
};

const IconMap = {
  Play: <Play className="h-4 w-4" />,
  Globe: <Globe className="h-4 w-4" />,
  ExternalLink: <ExternalLink className="h-4 w-4" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4" />,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('resume');

  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-photo')?.imageUrl || '';

  const handleCopyPrompt = () => {
    const context = `
Developer: Prince Gupta
Role: Senior Backend Developer (Node.js)
Experience: 4.5+ years
Core Skills: Node.js, Express.js, AWS (EC2, RDS, S3, Lambda, API Gateway), PostgreSQL, MongoDB, Microservices, Socket.IO, MQTT.
Key Projects: QIKLET (Hyperlocal Marketplace), Broan & NuTone (IoT), Age Industries (IoT), School Management, Exam Portal, Core Desk.
Education: B.E. in CS (2018).
Certification: Preparing for AWS SAA-C03.
    `.trim();
    
    navigator.clipboard.writeText(context);
    toast({
      title: "AI Context Copied!",
      description: "Professional background ready for your AI assistant.",
    });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 selection:bg-primary/30">
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col md:flex-row max-w-6xl w-full h-full md:h-[850px] relative">
        
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
                <div className="profile-portrait-shell">
                  <div className="profile-portrait-accent" />
                  <div className="profile-portrait-photo">
                  {profileImg ? (
                    <Image 
                      src={profileImg} 
                      alt="Prince Gupta" 
                      fill 
                      className="object-cover profile-portrait-image"
                      data-ai-hint="professional portrait"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                      <User className="h-16 w-16" />
                    </div>
                  )}
                  </div>
                </div>
              </div>
              
              <h1 className="text-2xl font-black mb-1 tracking-tight">Prince Gupta</h1>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-1">
                Senior Backend Engineer
              </div>
              <div className="flex items-center justify-center gap-2 mb-6 mt-2">
                <span className="px-3 py-1 bg-zinc-700/60 border border-zinc-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">⚡ Node.js</span>
                <span className="text-zinc-500 font-black text-xs">&</span>
                <span className="px-3 py-1 bg-zinc-700/60 border border-zinc-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">☁ AWS Developer</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-3 text-zinc-400 text-xs text-left">
                  <Mail className="h-3 w-3 text-primary shrink-0" />
                  <span className="truncate">princegupta619@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-400 text-xs">
                  <Phone className="h-3 w-3 text-primary shrink-0" />
                  <span>+91 9630122786</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-400 text-xs">
                  <MapPin className="h-3 w-3 text-primary shrink-0" />
                  <span>Remote | India</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 mb-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-800/50 rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/prince-gupta-3b6987152/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-800/50 rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full gap-3 border-t border-white/5 pt-8 mt-auto">
              <Button asChild variant="outline" className="h-12 rounded-xl font-bold uppercase text-[10px] tracking-widest border-zinc-800 hover:bg-zinc-800">
                <a href="/CVNode.pdf" download="Prince-Gupta-CV.pdf">
                  CV <Download className="ml-2 h-3 w-3" />
                </a>
              </Button>
              <Button onClick={handleCopyPrompt} className="h-12 rounded-xl font-bold uppercase text-[10px] tracking-widest bg-primary text-black hover:bg-primary/90">
                AI Context
              </Button>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
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
                  <p className="text-zinc-400 leading-relaxed text-sm mt-4">
                    Experienced in AWS infrastructure, database optimization, authentication systems, and automated testing, with hands-on expertise in developing backend solutions for hyperlocal commerce, IoT platforms, and enterprise systems.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { label: 'Experience', value: '4.5+ Years', icon: <Briefcase className="h-4 w-4" /> },
                    { label: 'Cloud Focus', value: 'AWS (SAA-C03)', icon: <Cloud className="h-4 w-4" /> },
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

                {/* Availability Banner */}
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl mb-8">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                  <p className="text-xs font-bold text-green-400 uppercase tracking-widest">Available for new opportunities</p>
                </div>

                {/* What I Do */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-black uppercase tracking-tight">What I Do</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Server className="h-5 w-5" />, title: 'Backend Architecture', desc: 'Scalable REST API design using Node.js, Express & microservices.' },
                      { icon: <Cloud className="h-5 w-5" />, title: 'Cloud Infrastructure', desc: 'AWS EC2, RDS, S3, Lambda deployment & cost optimization.' },
                      { icon: <Zap className="h-5 w-5" />, title: 'Real-time Systems', desc: 'Socket.IO, MQTT & WebSocket event-driven communication.' },
                      { icon: <Database className="h-5 w-5" />, title: 'Database Engineering', desc: 'PostgreSQL, MongoDB & MySQL schema design & optimization.' },
                    ].map((svc, i) => (
                      <div key={i} className="p-5 bg-zinc-800/30 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors group">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                          {svc.icon}
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-1 text-zinc-200">{svc.title}</h3>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">{svc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Resume Section */}
              <TabsContent value="resume" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                {/* Experience */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight">Experience</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-primary shadow-lg shadow-primary/20 border-4 border-zinc-900" />
                    <div className="text-[10px] text-primary font-black mb-1 tracking-[0.2em]">SEPT 2021 — PRESENT</div>
                    <h3 className="text-lg font-black">Software Developer</h3>
                    <div className="text-xs text-zinc-500 font-bold mb-4 italic">Dream Filler Software Solution Pvt. Ltd.</div>
                    <ul className="text-xs text-zinc-400 space-y-2.5">
                      {[
                        'Designed and developed scalable REST APIs using Node.js, Express.js, and PostgreSQL.',
                        'Built backend modules for hyperlocal commerce platforms and real-time POS systems.',
                        'Implemented secure role-based authentication using OAuth2 and JWT strategies.',
                        'Managed cloud deployments on AWS (EC2, RDS, S3, Lambda, API Gateway).',
                        'Integrated real-time notifications via WebSockets and Socket.IO.',
                        'Optimized database schemas for PostgreSQL, MongoDB, and MySQL.'
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Coding Skills Visual */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-10">
                    <Code className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-black uppercase tracking-tight">Coding</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center bg-zinc-900/40 p-8 rounded-3xl border border-white/5">
                    <CircularSkill label="JavaScript" percentage={95} />
                    <CircularSkill label="Node.js" percentage={95} />
                    <CircularSkill label="Python" percentage={75} />
                    <CircularSkill label="SQL" percentage={90} />
                  </div>
                </div>

                {/* Toolkit Categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: 'Cloud / DevOps', skills: ['AWS (EC2, S3, RDS)', 'Lambda', 'API Gateway', 'AWS IoT', 'CI/CD'] },
                    { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
                    { title: 'Frameworks', skills: ['Node.js', 'Express.js', 'Next.js', 'Sequelize'] },
                    { title: 'Other', skills: ['OAuth2', 'JWT', 'Socket.IO', 'MQTT', 'Mocha', 'Jest'] },
                  ].map((category, idx) => (
                    <div key={idx} className="p-5 bg-zinc-800/20 rounded-2xl border border-white/5">
                      <h3 className="text-[10px] font-black uppercase mb-4 tracking-widest text-primary">{category.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 text-[9px] py-1 px-2">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight">Education</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-primary/20">
                      <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-zinc-700 border-4 border-zinc-900" />
                      <div className="text-[10px] text-zinc-500 font-black mb-1 tracking-[0.2em]">2014 — 2018</div>
                      <h3 className="text-sm font-black text-zinc-200 uppercase">B.E. Computer Science</h3>
                      <div className="text-xs text-zinc-500 font-bold">Bansal Institute, Bhopal (CGPA: 6.63)</div>
                    </div>
                    <div className="relative pl-8 border-l-2 border-primary/20">
                      <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-zinc-800 border-4 border-zinc-900" />
                      <div className="text-[10px] text-zinc-500 font-black mb-1 tracking-[0.2em]">2013 — 2014</div>
                      <h3 className="text-sm font-black text-zinc-200 uppercase">Higher Secondary</h3>
                      <div className="text-xs text-zinc-500 font-bold">Holy Child Convent, Satna (61%)</div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight">Certifications</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-5 bg-zinc-800/30 rounded-2xl border border-yellow-500/20">
                      <div className="p-3 bg-yellow-500/10 rounded-xl shrink-0">
                        <Award className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3 className="text-sm font-black text-zinc-200">AWS Solutions Architect – Associate</h3>
                          <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-[9px] font-black uppercase tracking-widest">In Progress</span>
                        </div>
                        <p className="text-xs text-zinc-500 font-bold">Amazon Web Services · SAA-C03 · 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-zinc-800/30 rounded-2xl border border-white/5">
                      <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-zinc-200">Node.js Backend Development</h3>
                        <p className="text-xs text-zinc-500 font-bold">4.5+ Years Production Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Works Section */}
              <TabsContent value="works" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-xl font-black uppercase tracking-tight">Projects</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <div className="grid gap-6">
                  {PROJECTS.map((project, i) => (
                    <Link key={i} href={`/projects/${project.id}`}>
                      <div className="group overflow-hidden bg-zinc-900 border border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl flex flex-col sm:flex-row h-full cursor-pointer">
                          <div className="sm:w-1/3 relative aspect-video sm:aspect-auto">
                            <Image 
                              src={project.img} 
                              alt={project.title} 
                              fill 
                              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60" 
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="p-3 bg-zinc-900/80 rounded-full text-primary scale-0 group-hover:scale-100 transition-transform duration-500 border border-primary/30">
                                {IconMap[project.iconName]}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 p-5 flex flex-col justify-between">
                             <div>
                               <div className="flex items-center justify-between mb-1">
                                 <h3 className="font-black text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                                 <Badge variant="outline" className="text-[8px] font-bold border-zinc-700 text-zinc-500 uppercase tracking-widest">{project.type}</Badge>
                               </div>
                               <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-2">{project.tech.slice(0, 3).join(', ')}</p>
                               <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-4">{project.shortDesc}</p>
                             </div>
                             <div className="inline-flex items-center gap-2 text-[10px] font-bold text-zinc-300 group-hover:text-primary transition-colors uppercase tracking-[0.15em]">
                               Learn More <ChevronRight className="h-3 w-3" />
                             </div>
                          </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              {/* Contact Section */}
              <TabsContent value="contact" className="m-0 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-xl font-black uppercase tracking-tight">Get In Touch</h2>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Open to backend engineering roles and freelance projects. Let's build something great together.</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <a href="mailto:princegupta619@gmail.com" className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors shrink-0"><Mail className="h-4 w-4" /></div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Email</div>
                      <div className="text-[10px] font-bold text-zinc-200 truncate">princegupta619@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+919630122786" className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors shrink-0"><Phone className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Phone</div>
                      <div className="text-[10px] font-bold text-zinc-200">+91 9630122786</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-2xl border border-white/5">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0"><MapPin className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Location</div>
                      <div className="text-[10px] font-bold text-zinc-200">Remote | India</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a href="https://github.com/princeg-coder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors shrink-0"><Github className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">GitHub</div>
                      <div className="text-[10px] font-bold text-zinc-200">princeg-coder</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/prince-gupta-3b6987152/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-zinc-800/30 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors shrink-0"><Linkedin className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">LinkedIn</div>
                      <div className="text-[10px] font-bold text-zinc-200">prince-gupta</div>
                    </div>
                  </a>
                </div>

                <div className="p-6 bg-zinc-800/20 rounded-2xl border border-white/5">
                  <h3 className="text-sm font-black uppercase tracking-widest mb-5 text-zinc-300">Send a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="name" type="text" placeholder="Your Name" required className="w-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 text-xs rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors placeholder:text-zinc-600" />
                      <input name="email" type="email" placeholder="Your Email" required className="w-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 text-xs rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors placeholder:text-zinc-600" />
                    </div>
                    <input name="subject" type="text" placeholder="Subject" className="w-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 text-xs rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors placeholder:text-zinc-600" />
                    <textarea name="message" placeholder="Your message..." rows={4} required className="w-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 text-xs rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors placeholder:text-zinc-600 resize-none" />
                    <button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-black font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-colors">
                      Send Message <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

      </div>
    </div>
  );
}
