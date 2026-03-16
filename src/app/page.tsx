'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  User, FileText, Briefcase, Mail, Github, Linkedin, 
  Download, Send, ChevronRight, Terminal, Database, 
  Server, Phone, MapPin, Award, BookOpen, Cpu, Code,
  GraduationCap, CheckCircle2, Globe, Layers, ShieldCheck,
  Settings, TestTube2, Workflow, Cloud
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { toast } from '@/hooks/use-toast';

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

export default function Home() {
  const [activeTab, setActiveTab] = useState('resume');

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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-800/50 rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
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
                    Results-driven Backend Developer (Node.js) with 4.5+ years of experience designing and building scalable REST APIs, working with SQL/NoSQL databases, deploying cloud workloads on AWS, and delivering real-time production-grade applications. Strong understanding of software architecture, microservices, and system design.
                  </p>
                  <p className="text-zinc-400 leading-relaxed text-sm mt-4">
                    Experienced in AWS infrastructure, database optimization, authentication systems, and automated testing, with hands-on expertise in developing backend solutions for hyperlocal commerce, IoT platforms, and enterprise systems. Currently preparing for AWS Certified Solutions Architect – Associate (SAA-C03).
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
                        'Designed and developed scalable REST APIs using Node.js, Express.js, and PostgreSQL for production applications.',
                        'Built backend modules for hyperlocal commerce platforms, POS systems, and real-time applications.',
                        'Implemented secure role-based authentication using OAuth2, JWT, and access/refresh token strategies.',
                        'Integrated Firebase for push notifications and AWS S3 for file and image storage.',
                        'Developed real-time notification systems using WebSockets and Socket.IO.',
                        'Designed and optimized database schemas and queries for PostgreSQL, MongoDB, and MySQL.',
                        'Managed cloud deployments on AWS infrastructure including EC2, RDS, S3, Lambda, and API Gateway.',
                        'Wrote unit and integration tests using Mocha and Jest to ensure application stability.',
                        'Mentored junior developers and collaborated with QA and UI teams during Agile sprint cycles.'
                      ].map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Coding Skills Visual Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-10">
                    <Code className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-black uppercase tracking-tight">Coding</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center bg-zinc-900/40 p-8 rounded-3xl border border-white/5">
                    <CircularSkill label="JavaScript" percentage={90} />
                    <CircularSkill label="Node.js" percentage={95} />
                    <CircularSkill label="Python" percentage={70} />
                    <CircularSkill label="SQL (Postgres)" percentage={85} />
                  </div>
                </div>

                {/* Technical Skills Categorized */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight">Technical Toolkit</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: 'Cloud / DevOps', skills: ['AWS (EC2, RDS, S3, Lambda)', 'API Gateway', 'AWS IoT', 'CI/CD'], icon: <Cloud className="h-3 w-3" /> },
                      { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'], icon: <Database className="h-3 w-3" /> },
                      { title: 'Architecture', skills: ['REST', 'MVC', 'Microservices', 'Event-Driven Architecture'], icon: <Layers className="h-3 w-3" /> },
                      { title: 'Tools', skills: ['Git', 'Postman', 'Firebase', 'ActiveMQ', 'MQTT.fx'], icon: <Settings className="h-3 w-3" /> },
                      { title: 'Testing', skills: ['Mocha', 'Jest'], icon: <TestTube2 className="h-3 w-3" /> },
                      { title: 'Other', skills: ['OAuth2', 'JWT', 'Sequelize ORM', 'Socket.IO', 'Cron Jobs'], icon: <ShieldCheck className="h-3 w-3" /> },
                    ].map((category, idx) => (
                      <div key={idx} className="p-5 bg-zinc-800/20 rounded-2xl border border-white/5">
                        <h3 className="text-[10px] font-black uppercase mb-4 tracking-widest text-primary flex items-center gap-2">
                          {category.icon} {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {category.skills.map(skill => (
                            <Badge key={skill} variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-400 text-[9px] py-1 px-2">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
                      <h3 className="text-sm font-black text-zinc-200 uppercase">Bachelor of Engineering – Computer Science</h3>
                      <div className="text-xs text-zinc-500 font-bold mb-2">Bansal Institute of Research and Technology, Bhopal</div>
                      <Badge variant="outline" className="text-[9px]">CGPA: 6.63 / 10</Badge>
                    </div>

                    <div className="relative pl-8 border-l-2 border-primary/20">
                      <div className="absolute left-[-11px] top-0 h-5 w-5 rounded-full bg-zinc-800 border-4 border-zinc-900" />
                      <div className="text-[10px] text-zinc-500 font-black mb-1 tracking-[0.2em]">2013 — 2014</div>
                      <h3 className="text-sm font-black text-zinc-200 uppercase">Higher Secondary Education</h3>
                      <div className="text-xs text-zinc-500 font-bold mb-2">Holy Child Convent Hr. Sec. School, Satna</div>
                      <Badge variant="outline" className="text-[9px]">Percentage: 61%</Badge>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight">Certifications</h2>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                  <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl flex items-center gap-4">
                    <div className="p-3 bg-primary/20 text-primary rounded-xl">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-zinc-200 uppercase">AWS Certified Solutions Architect</h4>
                      <p className="text-xs text-primary font-bold">Associate (SAA-C03)</p>
                      <p className="text-[9px] text-zinc-500 mt-1 uppercase tracking-widest font-black">Preparing for completion</p>
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
                  {[
                    { 
                      title: 'QIKLET Marketplace', 
                      tech: 'Node.js, PostgreSQL, Express, Socket.IO', 
                      desc: 'Hyperlocal marketplace ecosystem with order management, real-time vendor dashboards, and complex delivery workflows.',
                      img: PlaceHolderImages.find(i => i.id === 'qiklet-thumbnail')?.imageUrl 
                    },
                    { 
                      title: 'Broan & NuTone IoT', 
                      tech: 'AWS IoT Core, MQTT, Node.js, PostgreSQL', 
                      desc: 'IoT device platform for onboarding, telemetry processing, and remote device control.',
                      img: PlaceHolderImages.find(i => i.id === 'iot-platform-thumbnail')?.imageUrl 
                    },
                    { 
                      title: 'Age Industries BLDC', 
                      tech: 'MQTT, telemetry, Node.js APIs', 
                      desc: 'Remote monitoring and control platform for smart BLDC fans with data processing for analytics.',
                      img: PlaceHolderImages.find(i => i.id === 'age-industries-thumbnail')?.imageUrl 
                    },
                    { 
                      title: 'AWS Cost Optimization', 
                      tech: 'Cloud Engineering, Linux Migration', 
                      desc: 'Migrated EC2 workloads from Windows to Linux, reducing cloud costs by over 60%.',
                      img: PlaceHolderImages.find(i => i.id === 'aws-opt-thumbnail')?.imageUrl 
                    },
                  ].map((project, i) => (
                    <div key={i} className="group overflow-hidden bg-zinc-900 border border-white/5 hover:border-primary/30 transition-all duration-500 rounded-2xl flex flex-col sm:flex-row h-full">
                        <div className="sm:w-1/3 relative aspect-video sm:aspect-auto">
                          <Image src={project.img || ''} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-100" />
                        </div>
                        <div className="flex-1 p-5">
                           <h3 className="font-black text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                           <p className="text-[9px] font-bold text-primary uppercase tracking-widest mt-1 mb-2">{project.tech}</p>
                           <p className="text-xs text-zinc-500 line-clamp-3 leading-relaxed">{project.desc}</p>
                        </div>
                    </div>
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
                    <input className="w-full h-12 px-5 bg-zinc-800/30 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-xs text-white" placeholder="Full Name" />
                    <input className="w-full h-12 px-5 bg-zinc-800/30 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-xs text-white" placeholder="Email Address" />
                  </div>
                  <textarea className="w-full p-5 bg-zinc-800/30 border border-white/5 rounded-xl outline-none focus:border-primary/50 transition-all text-xs min-h-[120px] resize-none text-white" placeholder="How can I help you build your backend?" />
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
