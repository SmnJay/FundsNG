import { z } from "zod";

const signUpSchema = z.object({
    email: z
        .string()
        .min(5, 'Email must be at least 5 characters long')
        .max(255, 'Email must be at most 255 characters long')
        .email('Invalid email address'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .max(255, 'Password must be at most 255 characters long')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/\d/, 'Password must contain at least one number')
        .regex(/[@$!%*?&]/, 'Password must contain at least one special character')
})

export default signUpSchema;

export type SignUpSchema = z.infer<typeof signUpSchema>;
