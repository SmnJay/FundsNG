import axios from "axios";

export const getBankAccountsApiService = async () => {
    try {
        const response = await axios.get('/api/bankAccount');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch bank accounts. Please try again.');
    }
}