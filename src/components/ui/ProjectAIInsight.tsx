
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { projectTechnicalInsight } from '@/ai/flows/project-technical-insight-flow';

interface ProjectAIInsightProps {
  projectName: string;
  projectDescription: string;
}

export function ProjectAIInsight({ projectName, projectDescription }: ProjectAIInsightProps) {
  const [question, setQuestion] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    try {
      const response = await projectTechnicalInsight({
        projectName,
        projectDescription,
        question,
      });
      setInsight(response.insight);
    } catch (error) {
      console.error('Failed to get insight:', error);
      setInsight('Sorry, I couldn\'t process that question right now.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass mt-8 border-primary/20 overflow-hidden">
      <CardHeader className="bg-primary/5 pb-4">
        <CardTitle className="text-sm font-headline flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          Technical Project Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-xs text-muted-foreground mb-4">
          Ask specific technical questions about how this project was built or optimized.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <Input
            placeholder="e.g. How was the AWS infrastructure optimized?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-background/50 border-white/10 text-sm h-9"
          />
          <Button size="sm" type="submit" disabled={isLoading || !question.trim()}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>

        {insight && (
          <div className="bg-background/40 rounded-md p-3 border border-white/5 animate-in fade-in slide-in-from-top-2">
            <p className="text-xs font-code leading-relaxed text-muted-foreground">
              {insight}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
