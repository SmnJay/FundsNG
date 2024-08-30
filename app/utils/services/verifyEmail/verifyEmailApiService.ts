import axios from 'axios'
export const verifyEmailApiService = async (data: { email: string, token: string }) => {
    try {
        const response = await axios.post('/api/verify-email', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
