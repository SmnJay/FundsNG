import { ResetPasswordSchema } from '@/app/schemaa/resetPasswordSchema';
import axios from 'axios'
export const resetPasswordApiService = async (data: ResetPasswordSchema) => {
    try {
        const response = await axios.post('/api/reset-password', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
