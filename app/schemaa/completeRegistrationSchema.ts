import { ICompleteRegistration } from "@/app/utils/models/Model";
import { z, ZodType } from "zod";

const completeRegistrationSchema: ZodType<ICompleteRegistration> = z.object({
    // userId: z.string(),
    firstName: z.string().min(3, 'First Name is required'),
    lastName: z.string().min(3, 'Last Name is required'),
    bvn: z.string().length(11, 'BVN can only be 11 digits').regex(/^\d{11}$/, 'BVN must contain only digits'),
    gender: z.enum(['male', 'female', 'others'], { errorMap: () => ({ message: 'Gender must be either male, female, or others' }) }),
    mobile: z.string().length(11, 'Phone number must be 11 characters long').regex(/^\d{11}$/, 'Phone number must contain only digits'),
    dob: z.string().length(10, 'Date must be in the format mm/dd/yyyy'),
});

export default completeRegistrationSchema;

export type CompleteRegistrationSchema = z.infer<typeof completeRegistrationSchema>;