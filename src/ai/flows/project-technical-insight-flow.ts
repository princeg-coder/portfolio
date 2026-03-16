'use server';
/**
 * @fileOverview This file implements a Genkit flow that provides AI-generated insights or summaries
 *               about a specific project based on a user's technical question.
 *
 * - projectTechnicalInsight - A function that handles generating technical insights for a project.
 * - ProjectTechnicalInsightInput - The input type for the projectTechnicalInsight function.
 * - ProjectTechnicalInsightOutput - The return type for the projectTechnicalInsight function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ProjectTechnicalInsightInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project, including its tech stack, features, and achievements.'),
  question: z.string().describe('The specific technical question about the project.'),
});
export type ProjectTechnicalInsightInput = z.infer<typeof ProjectTechnicalInsightInputSchema>;

const ProjectTechnicalInsightOutputSchema = z.object({
  insight: z.string().describe('The AI-generated answer or technical insight regarding the project and question.'),
});
export type ProjectTechnicalInsightOutput = z.infer<typeof ProjectTechnicalInsightOutputSchema>;

export async function projectTechnicalInsight(input: ProjectTechnicalInsightInput): Promise<ProjectTechnicalInsightOutput> {
  return projectTechnicalInsightFlow(input);
}

const projectInsightPrompt = ai.definePrompt({
  name: 'projectInsightPrompt',
  input: { schema: ProjectTechnicalInsightInputSchema },
  output: { schema: ProjectTechnicalInsightOutputSchema },
  prompt: `You are an expert technical interviewer and project analyst. Your task is to provide clear, concise, and technically accurate insights or summaries based on the provided project description and a specific question.

---
Project Name: {{{projectName}}}
Project Description:
{{{projectDescription}}}
---

User's Question:
{{{question}}}

Based on the project description, answer the user's question in a professional and informative manner. Focus on technical details, challenges, and solutions relevant to the question.`,
});

const projectTechnicalInsightFlow = ai.defineFlow(
  {
    name: 'projectTechnicalInsightFlow',
    inputSchema: ProjectTechnicalInsightInputSchema,
    outputSchema: ProjectTechnicalInsightOutputSchema,
  },
  async (input) => {
    const { output } = await projectInsightPrompt(input);
    if (!output) {
      throw new Error('Failed to generate project insight.');
    }
    return output;
  }
);
