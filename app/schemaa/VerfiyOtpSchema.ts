import { z } from "zod";

const verifyOtpSchema = z.object({
    otp: z.number().max(6).min(6)
})

export default verifyOtpSchema;

export type VerifyOtpSchema = z.infer<typeof verifyOtpSchema>;
