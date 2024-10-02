import axios from 'axios'

export const getCampaignApiService = async (page: number) => {
    try {
        const response = await axios.get(`/api/campaign?page=${page}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
};

export const getCampaignCategoriesApiService = async () => {
    try {
        const response = await axios.get('/api/campaign-categories');
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch categories. Please try again.');

    }
}

export const createCampaignApiService = async (data: any) => {
    try {
        const response = await axios.post('/api/campaign/create', data);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to create campaign. Please try again.');
    }
}

export const editCampaignApiService = async (data: any) => {
    try {
        const response = await axios.post('/api/campaign/edit', data);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to edit campaign. Please try again.');
    }
}

export const getSingleCampaign = async (id: string) => {
    try {
        const response = await axios.get(`/api/campaign/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch single campaign details. Please try again.');

    }
}

export const getSingleCampaignDetail = async (id: string) => {
    try {
        const response = await axios.get(`/api/campaign/${id}/details`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to fetch single campaign details. Please try again.');

    }
}

export const stopCampaignApi = async (id: string) => {
    try {
        const response = await axios.put(`/api/campaign/${id}/stop-campaign`);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message) || "Failed to stop campaign. Please, try again."
    }
}

export const linkCampaignToBankApiService = async (data: any) => {
    try {
        const response = await axios.post('/api/campaign/link-account', data);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to link account to campaign. Please try again.');
    }
}

export const updateLinkCampaignToBankApiService = async (data: any) => {
    try {
        const response = await axios.put('/api/campaign/update-account', data);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to update bank account to campaign. Please try again.');
    }
}

export const getOpenCampaignApiService = async (url: string) => {
    try {
        const response = await axios.get(`/api/viewCampaign/${url}`);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message) || "Failed to stop campaign. Please, try again."
    }
}

export const deleteCampaignApiService = async (id: string) => {
    try {
        const response = await axios.delete(`/api/campaign/${id}/delete`);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message) || "Failed to delete campaign. Please, try again."
    }
}

export const campaignWithdrawalModeApiService = async (data: { withdrawalType: number, bankAccountId: string, frequency?: number }) => {
    try {
        const response = await axios.put(`/api/campaign/withdrawal-mode`, data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message) || "Failed to save campaign settings. Please, try again."

    }
}

export const getCampaignSettingsApiService = async () => {
    try {
        const response = await axios.get(`/api/campaign/settings`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message) || "Failed to stop campaign. Please, try again."
    }
}

export const withdrawCampaignApiService = async (data: any) => {
    try {
        const response = await axios.post('/api/campaign/campaignWithdrawal', data);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to process withdrawal. Please try again.');
    }
}

export const initializePaystackforCampaignApiService = async (data: any) => {
    try {
        const response = await axios.post('/api/paystack/initialize', data);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to initialize payment. Please try again.');
    }
}

export const verifyPaystackforCampaignApiService = async ({ reference, amount, trxnref }: { reference: string, amount: string, trxnref: string }) => {
    try {
        const response = await axios.get(`/api/paystack/verify?reference=${reference}&amount=${amount}&trxnref=${trxnref}`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message) || "Failed to verify transaction. Please, try again."
    }
}
