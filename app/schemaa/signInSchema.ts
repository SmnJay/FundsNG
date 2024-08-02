import { ISignInForm } from "@/app/utils/models/Model";
import { z, ZodType } from "zod";

const signInSchema: ZodType<ISignInForm> = z.object({
    email: z
        .string()
        .min(5, 'Email must be at least 5 characters long')
        .max(100, 'Email cannot be longer than 100 characters')
        .email('Invalid email address'),
    password: z
        .string()
        .min(8, 'Email must be at least 8 charcters long')
});

export default signInSchema;

export type SignInSchema = z.infer<typeof signInSchema>;