import axios from 'axios';

export const DataService = async () => {
    try {
        const responseData = await axios.get('/mockApiResponse');
        return (responseData.data.response.results)
    } catch (error) {
        return error;
    }
}
