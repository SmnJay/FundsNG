import axios from 'axios'
import { IProfileSettings } from '../../models/Model';

export const getProfileApiService = async () => {
    try {
        const response = await axios.get('/api/profile');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
}

export const updateProfileApiService = async (data: IProfileSettings) => {
    try {
        const response = await axios.post('/api/profile', data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
}