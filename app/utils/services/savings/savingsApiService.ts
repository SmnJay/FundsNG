import axios from "axios";

export const getServiceApiService = async () => {
    try {
        const response = await axios.get('/api/savings');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
};