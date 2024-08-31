import axios from 'axios'

export const getCampaignApiService = async () => {
    try {
        const response = await axios.get('/api/campaign');
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
        throw new Error(error.respomnse?.data?.message) || "Failed to stop campaign. Please, try again."
    }
}