import { ICompleteProfile, ICompleteRegistration } from "@/app/utils/models/Model";
import { z, ZodType } from "zod";

const updateProfileSchema: ZodType<ICompleteProfile> = z.object({
    firstName: z.string().min(3, 'First Name is required'),
    lastName: z.string().min(3, 'Last Name is required'),
    gender: z.enum(['male', 'female', 'others'], { errorMap: () => ({ message: 'Gender must be either male, female, or others' }) }),
    mobile: z.string().length(11, 'Phone number must be 11 characters long').regex(/^\d{11}$/, 'Phone number must contain only digits'),
});

export default updateProfileSchema;

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;