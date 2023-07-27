import axios from 'axios';

export const getThreeHeadlines = async () => {
    try {
        const apiUrl = import.meta.env.VITE_APP_LOCAL_API_KEY;
        console.log(`Fetching data from: ${apiUrl}`);
        const response = await axios.get(import.meta.env.VITE_APP_LOCAL_API_KEY);
        const headlines = response.data.response.results;
        const threeHeadlines = headlines.slice(0, 3);
        return threeHeadlines;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
