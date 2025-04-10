// file: src/ai/flows/suggest-budget.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting a budget for each expense category based on user income and spending habits.
 *
 * - suggestBudget - A function that triggers the budget suggestion flow.
 * - SuggestBudgetInput - The input type for the suggestBudget function.
 * - SuggestBudgetOutput - The return type for the suggestBudget function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuggestBudgetInputSchema = z.object({
  income: z.number().describe('The user\u0027s monthly income.'),
  spendingByCategory: z
    .record(z.number())
    .describe(
      'A map of spending categories to the amount spent in that category (e.g. {Food: 500, Transportation: 200}).'
    ),
});

export type SuggestBudgetInput = z.infer<typeof SuggestBudgetInputSchema>;

const SuggestBudgetOutputSchema = z.record(z.number()).describe('Suggested budget for each category.');
export type SuggestBudgetOutput = z.infer<typeof SuggestBudgetOutputSchema>;

export async function suggestBudget(input: SuggestBudgetInput): Promise<SuggestBudgetOutput> {
  return suggestBudgetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBudgetPrompt',
  input: {
    schema: z.object({
      income: z.number().describe('The user\u0027s monthly income.'),
      spendingByCategory: z
        .record(z.number())
        .describe(
          'A map of spending categories to the amount spent in that category (e.g. {Food: 500, Transportation: 200}).'
        ),
    }),
  },
  output: {
    schema: z.record(z.number()).describe('Suggested budget for each category.'),
  },
  prompt: `Based on my income of {{{income}}} and spending habits:

  {{#each spendingByCategory}}
  - Category: {{@key}}, Amount: {{{this}}}
  {{/each}}

  Suggest a budget for each category. The total budget should not exceed my income.  Please respond with a json map of category to suggested budget amount.
  `,
});

const suggestBudgetFlow = ai.defineFlow<
  typeof SuggestBudgetInputSchema,
  typeof SuggestBudgetOutputSchema
>({
  name: 'suggestBudgetFlow',
  inputSchema: SuggestBudgetInputSchema,
  outputSchema: SuggestBudgetOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
