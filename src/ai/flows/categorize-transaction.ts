// Use server directive for Next.js.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for categorizing transactions.
 *
 * categorizeTransaction - A function that categorizes a transaction based on its description.
 * CategorizeTransactionInput - The input type for the categorizeTransaction function.
 * CategorizeTransactionOutput - The return type for the categorizeTransaction function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const CategorizeTransactionInputSchema = z.object({
  transactionDescription: z.string().describe('The description of the transaction.'),
});
export type CategorizeTransactionInput = z.infer<typeof CategorizeTransactionInputSchema>;

const CategorizeTransactionOutputSchema = z.object({
  category: z.string().describe('The predicted category of the transaction.'),
  confidence: z.number().describe('The confidence level of the categorization (0-1).'),
});
export type CategorizeTransactionOutput = z.infer<typeof CategorizeTransactionOutputSchema>;

export async function categorizeTransaction(input: CategorizeTransactionInput): Promise<CategorizeTransactionOutput> {
  return categorizeTransactionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeTransactionPrompt',
  input: {
    schema: z.object({
      transactionDescription: z.string().describe('The description of the transaction.'),
    }),
  },
  output: {
    schema: z.object({
      category: z.string().describe('The predicted category of the transaction.'),
      confidence: z.number().describe('The confidence level of the categorization (0-1).'),
    }),
  },
  prompt: `You are a financial advisor specializing in categorizing user transactions.

  Given the following transaction description, determine the most appropriate category.
  You must respond with the category and a confidence level between 0 and 1, representing the certainty of your categorization.

  Transaction Description: {{{transactionDescription}}}

  Available Categories: Food, Transportation, Entertainment, Utilities, Rent, Salary, Shopping, Bills, Travel, Other

  Ensure that the outputted category is chosen from the list of available categories above.
  `,
});

const categorizeTransactionFlow = ai.defineFlow<
  typeof CategorizeTransactionInputSchema,
  typeof CategorizeTransactionOutputSchema
>({
  name: 'categorizeTransactionFlow',
  inputSchema: CategorizeTransactionInputSchema,
  outputSchema: CategorizeTransactionOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
