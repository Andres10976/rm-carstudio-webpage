import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// types/index.ts - TypeScript type definitions
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
}

export interface QuoteFormData {
  service: string;
  vehicleType: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
