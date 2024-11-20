import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(150, "Name is too long"),
  email: z.string().email("Enter a valid email").max(255, "Email is too long"),
  phone: z.string().min(10, "Phone is required").max(10, "Phone is too long"),
  requirements: z
    .string({ required_error: "Requirements is required" })
    .min(1, "Requirements is required"),
  service_id: z.string().min(1, "Select a Service"),
  comment: z.string().optional(),
});

export const contactUsSchema = z.object({
  name: z.string().min(1, "Name is required").max(150, "Name is too long"),
  email: z.string().email("Enter a valid email").max(255, "Email is too long"),
  phone: z.string().min(10, "Phone is required").max(10, "Phone is too long"),
  requirements: z
    .string({ required_error: "Requirements is required" })
    .min(1, "Requirements is required"),
  service_id: z.string().min(1, "Select a Service"),
  comment: z.string().optional(),
  country: z.string(),
});
