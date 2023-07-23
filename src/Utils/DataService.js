import axios from 'axios';

export const DataService = async () => {
    try {
        const responseData = await axios.get('http://localhost:3000/webTitle');
        return responseData.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
