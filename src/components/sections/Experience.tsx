
import { Badge } from '@/components/ui/badge';
import { Calendar, Building2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Dream Filler Software Solution',
    period: '2021 – Present',
    highlights: [
      'Designed and optimized scalable REST APIs for high-traffic mobile applications.',
      'Implemented real-time notification systems using WebSockets and MQTT.',
      'Managed AWS cloud infrastructure (EC2, RDS, S3) and CI/CD pipelines.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A timeline of my career growth and technical impact.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10 md:pl-0">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent" />
              
              <div className="relative mb-12 flex flex-col md:flex-row items-center">
                {/* Timeline Dot */}
                <div className="absolute left-[-2.3rem] md:left-1/2 md:ml-[-0.6rem] h-5 w-5 rounded-full bg-primary border-4 border-background z-10" />
                
                <div className="md:w-1/2 md:pr-12 md:text-right w-full mb-4 md:mb-0">
                  <div className="text-primary font-headline font-bold flex items-center md:justify-end gap-2">
                    <Calendar className="h-4 w-4" /> {exp.period}
                  </div>
                </div>

                <div className="md:w-1/2 md:pl-12 w-full">
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" /> {exp.company}
                    </div>
                    <h3 className="text-2xl font-bold mb-6">{exp.role}</h3>
                    <ul className="space-y-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                          <span className="text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
