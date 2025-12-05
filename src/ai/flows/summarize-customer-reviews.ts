'use server';

/**
 * @fileOverview A customer review summarization AI agent.
 *
 * - summarizeCustomerReviews - A function that handles the customer review summarization process.
 * - SummarizeCustomerReviewsInput - The input type for the summarizeCustomerReviews function.
 * - SummarizeCustomerReviewsOutput - The return type for the summarizeCustomerReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCustomerReviewsInputSchema = z.object({
  reviews: z
    .string()
    .describe('A list of customer reviews.'),
  writingStyle: z.string().optional().describe('The writing style to use for the summary.'),
});
export type SummarizeCustomerReviewsInput = z.infer<typeof SummarizeCustomerReviewsInputSchema>;

const SummarizeCustomerReviewsOutputSchema = z.object({
  summary: z.string().describe('The summarized customer reviews.'),
  sentiment: z.string().describe('The sentiment of the customer reviews.'),
});
export type SummarizeCustomerReviewsOutput = z.infer<typeof SummarizeCustomerReviewsOutputSchema>;

export async function summarizeCustomerReviews(input: SummarizeCustomerReviewsInput): Promise<SummarizeCustomerReviewsOutput> {
  return summarizeCustomerReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCustomerReviewsPrompt',
  input: {schema: SummarizeCustomerReviewsInputSchema},
  output: {schema: SummarizeCustomerReviewsOutputSchema},
  prompt: `You are a marketing expert specializing in summarizing customer reviews for product landing pages.

You will use this information to create a concise and engaging summary of the customer reviews.
You will also determine the overall sentiment of the reviews and include it in the output.

Reviews: {{{reviews}}}

Writing Style: {{#if writingStyle}}{{{writingStyle}}}{{else}}Concise and Engaging{{/if}}`,
});

const summarizeCustomerReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeCustomerReviewsFlow',
    inputSchema: SummarizeCustomerReviewsInputSchema,
    outputSchema: SummarizeCustomerReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
