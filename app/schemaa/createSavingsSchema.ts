import { z, ZodType } from "zod";
import { ICreateSavings } from "../utils/models/Model";

const createSavingsSchema: ZodType<ICreateSavings> = z.object({
    title: z.string().min(3, { message: 'Title must be greater than 3 characters' }),
    reason: z.string().min(3, { message: 'Reason must be greater than 3 characters' }),
    targetAmount: z.string().min(4, { message: 'Required' }),
    amountPerSave: z.string().min(1),
    type: z.enum(['0', '1'], {message: "Select one of the options"}),
    startDate: z.string(),
    endDate: z.string(),
    // .refine((endDate, { siblingData }) => {
    //     const startDate = siblingData.startDate;
    //     return new Date(endDate) > new Date(startDate);
    // }, {
    //     message: "endDate must be greater than startDate",
    // }),
    deductionDate: z.string(),
    deductionTime: z.string(),
    paymentSource: z.string(),
    frequency: z.string(),
    // participants: z.array(z.string())
});

export default createSavingsSchema;

export type CreateSavingsSchema = z.infer<typeof createSavingsSchema>;