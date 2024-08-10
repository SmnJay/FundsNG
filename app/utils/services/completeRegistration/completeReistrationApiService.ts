import axios from 'axios'
import { ICompleteRegistration } from '../../models/Model'
export const completeRegistrationApiService = async (userData: ICompleteRegistration) => {
    try {
        const response = await axios.post('/api/completeRegistration', userData);
        return response.data;
        
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
