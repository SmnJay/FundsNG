import axios from 'axios'
import { ICompleteProfile } from '../../models/Model';

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
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');

    }
}

export const createCampaignApiService = async () => {
    try {
        const response = await axios.post('/api/campaign/create');   
        console.log({response})     
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to create. Please try again.');
    }
}