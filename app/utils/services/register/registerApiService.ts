import axios from 'axios'
import { ISignInForm } from '../../models/Model'
export const registerApiService = async (userData: ISignInForm) => {
    try {
        const response = await axios.post('/api/register', userData);
        return response.data;
        
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to register. Please try again.');
    }

}
