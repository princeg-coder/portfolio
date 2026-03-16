
import { Badge } from '@/components/ui/badge';

const stacks = [
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Microservices', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, RDS)', 'Lambda', 'API Gateway', 'Docker', 'CI/CD']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    category: 'Tools',
    items: ['Git', 'Postman', 'Firebase', 'ActiveMQ', 'MQTT']
  }
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive <span className="text-gradient">Toolkit</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Modern technologies I use to build, deploy, and scale robust applications.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((stack, i) => (
            <div key={i} className="glass rounded-3xl p-8 border-white/5 hover:bg-white/5 transition-all group">
              <h3 className="text-sm font-headline text-primary uppercase tracking-widest mb-6 font-bold">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, j) => (
                  <Badge key={j} variant="outline" className="bg-white/5 border-white/10 hover:border-primary/50 text-xs py-1.5 px-3 transition-colors">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
