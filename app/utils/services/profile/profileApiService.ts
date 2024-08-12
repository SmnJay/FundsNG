import axios from 'axios'
import { ICompleteProfile } from '../../models/Model';

export const getProfileApiService = async () => {
    try {
        const response = await axios.get('/api/profile');
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
}

export const updateProfileApiService = async (data: ICompleteProfile) => {
    try {
        const response = await axios.put('/api/profile/edit', data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }
}