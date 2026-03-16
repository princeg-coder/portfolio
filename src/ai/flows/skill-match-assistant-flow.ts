'use server';
/**
 * @fileOverview This flow analyzes a job description to highlight the most relevant
 * projects, skills, and experience sections from the developer's portfolio.
 *
 * - skillMatchAssistant - A function that takes a job description and returns relevant portfolio insights.
 * - SkillMatchAssistantInput - The input type for the skillMatchAssistant function.
 * - SkillMatchAssistantOutput - The return type for the skillMatchAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillMatchAssistantInputSchema = z.object({
  jobDescription: z.string().describe('The job description to analyze.'),
});
export type SkillMatchAssistantInput = z.infer<
  typeof SkillMatchAssistantInputSchema
>;

const SkillMatchAssistantOutputSchema = z.object({
  relevantProjects: z
    .array(z.string())
    .describe(
      'A list of project titles from the portfolio most relevant to the job description.'
    ),
  relevantSkills: z
    .array(z.string())
    .describe(
      'A list of specific skills from the portfolio most relevant to the job description.'
    ),
  relevantExperience: z
    .array(z.string())
    .describe(
      'A list of key experience highlights from the portfolio most relevant to the job description.'
    ),
});
export type SkillMatchAssistantOutput = z.infer<
  typeof SkillMatchAssistantOutputSchema
>;

export async function skillMatchAssistant(
  input: SkillMatchAssistantInput
): Promise<SkillMatchAssistantOutput> {
  return skillMatchAssistantFlow(input);
}

const PORTFOLIO_DATA = `
Developer's Profile:
Name: Prince Gupta
Role: Senior Backend Developer
Experience: 4.5+ years specializing in Node.js, AWS, and scalable backend systems.

Skills:
- Backend: Node.js, Express.js, Microservices, REST APIs, GraphQL
- Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, API Gateway), Docker, CI/CD
- Databases: PostgreSQL, MongoDB, MySQL, Redis
- Tools: Git, Postman, Firebase, ActiveMQ, MQTT

Projects:
- Qiklet – Hyperlocal Marketplace: Developed with Node.js, PostgreSQL, AWS, Socket.io. Features include order management, real-time notifications, vendor dashboard, and POS integration.
- IoT Device Platform: Built using Node.js, AWS IoT, MQTT. Features include device onboarding, real-time telemetry, and remote device control.
- AWS Infrastructure Optimization: Focused on AWS EC2, Linux. Achieved a 60% reduction in infrastructure cost.

Experience:
- Software Developer at Dream Filler Software Solution (2021 – Present): Key highlights include designing scalable REST APIs, building real-time systems, and AWS cloud infrastructure management.
`;

const prompt = ai.definePrompt({
  name: 'skillMatchAssistantPrompt',
  input: {schema: SkillMatchAssistantInputSchema},
  output: {schema: SkillMatchAssistantOutputSchema},
  prompt: `You are an AI assistant tasked with analyzing a job description and identifying the most relevant aspects from a developer's portfolio. Below is the developer's comprehensive portfolio information. Carefully compare the provided job description against this portfolio data.

Portfolio Information:
${PORTFOLIO_DATA}

Job Description: {{{jobDescription}}}

Based on the job description, identify and list:
1. The project titles that are most relevant.
2. The specific skills that are most relevant.
3. The key experience highlights that are most relevant.

Your output MUST be a JSON object matching the SkillMatchAssistantOutputSchema.`,
});

const skillMatchAssistantFlow = ai.defineFlow(
  {
    name: 'skillMatchAssistantFlow',
    inputSchema: SkillMatchAssistantInputSchema,
    outputSchema: SkillMatchAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate skill match analysis.');
    }
    return output;
  }
);
