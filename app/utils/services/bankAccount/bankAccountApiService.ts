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

export const makeAccountPrimaryApiService = async (data: { accountId: string }) => {
    try {
        const response = await axios.put('/api/bankAccount/markAsPrimary', data);
        return response.data;
    } catch (error: any) {
        console.log(error)
        throw new Error(error?.message || 'Failed to make this bank as primary account. Please try again.');
    }
}

export const addBankAccountApiService = async (data: { bankName: string, accountName: string, bankCode: string, accountNumber: string, makePrimary?: boolean }) => {
    try {
        const response = await axios.put('/api/bankAccount/addBankAccount', data);
        return response.data;
    } catch (error: any) {
        console.log(error)
        throw new Error(error?.message || 'Failed to add this bank account. Please try again.');
    }
}