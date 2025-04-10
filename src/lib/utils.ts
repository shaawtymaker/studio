import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(number: number): string {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);

  if (number < 0) {
    return `<span class="text-red-500">-$${formattedNumber.substring(1)}</span>`;
  }

  return `$${formattedNumber}`;
}

