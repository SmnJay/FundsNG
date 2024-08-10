import axios from 'axios'
export const verifyOtpApiService = async (data: { email: string, otp: string }) => {
    try {
        const response = await axios.post('/api/verify-otp', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
