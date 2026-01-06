// Isolated Marketing Layer – No Core Access
// Zod validation schemas for forms

import { z } from 'zod';

// Registration form schema
export const registrationSchema = z.object({
  hotelName: z
    .string()
    .min(2, 'Hotel name must be at least 2 characters')
    .max(100, 'Hotel name must be less than 100 characters'),
  location: z
    .string()
    .min(2, 'Location must be at least 2 characters')
    .max(200, 'Location must be less than 200 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(5, 'Phone number must be at least 5 characters')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[+\d\s()-]+$/, 'Please enter a valid phone number'),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

// Contact form schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
