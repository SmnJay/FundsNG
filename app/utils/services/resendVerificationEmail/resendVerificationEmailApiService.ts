import axios from "axios";

export const resendVerificationEmailApiService = async (data: { email: string }) => {
    try {
        const response = await axios.post('/api/resendConfirmationEmail', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
}