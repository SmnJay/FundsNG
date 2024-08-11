import axios from 'axios'
export const forgotPasswordApiService = async (data: { email: string }) => {
    try {
        const response = await axios.post('/api/forgot-password', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
