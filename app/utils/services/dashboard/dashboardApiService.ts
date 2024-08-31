import axios from "axios";

export const dashboardApiService = async () => {
    try {
        const response = await axios.get('/api/dashboard');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch stats. Please try again.');
    }
}