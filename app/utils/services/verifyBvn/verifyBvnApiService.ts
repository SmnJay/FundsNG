import axios from 'axios'
export const verifyBvnApiService = async (data: { bvn: string, dob: string }) => {
    try {
        const response = await axios.post('/api/verify-bvn', data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
