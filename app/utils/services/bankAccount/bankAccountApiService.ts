import axios from "axios";

export const getBankAccountsApiService = async () => {
    try {
        const response = await axios.get('/api/bankAccount');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch bank accounts. Please try again.');
    }
}

export const getBankAccountsResolveApiService = async (data: { accountNumber: string, bankCode: string }) => {
    try {
        const { accountNumber, bankCode } = data;

        const response = await axios.get('/api/bankAccount/resolveBankAccount', {
            params: {
                accountNumber,
                bankCode
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to resolve bank account details. Please try again.');
    }
}

export const getActiveBankAccountsApiService = async () => {
    try {
        const response = await axios.get('/api/bankAccount/activeBankAccounts');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch active bank accounts. Please try again.');
    }
}