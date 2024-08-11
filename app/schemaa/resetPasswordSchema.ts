import { z } from 'zod';

const resetPasswordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(255, 'Password must be at most 255 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[@$!%*?&#()|/\ =+-_{}~<>:;`;]/, 'Password must contain at least one special character')

const schema = z
    .object({
        password: resetPasswordSchema,
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

export default schema;

export type ResetPasswordSchema = z.infer<typeof schema>;
