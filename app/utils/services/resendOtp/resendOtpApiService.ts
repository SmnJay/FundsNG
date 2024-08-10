import axios from "axios";

export const resendOtpApiService = async (data: { userId: string }) => {
    try {
        const response = await axios.post('/api/resend-otp', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
}