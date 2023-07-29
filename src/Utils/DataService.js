import axios from 'axios';

export const getHeadlines = async () => {
    try {
        const apiUrl = import.meta.env.VITE_APP_LOCAL_API_KEY;
        console.log(`Fetching data from: ${apiUrl}`);
        const response = await axios.get(import.meta.env.VITE_APP_LOCAL_API_KEY);
        const headlines = response.data.response.results;
        return headlines;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export const getArticleById = async (id) => {
    try {
        const apiUrl = `${import.meta.env.VITE_APP_BASE_API_URL}${id}?show-fields=all&api-key=${import.meta.env.VITE_APP_LOCAL_API_KEY}`;
        const response = await axios.get(apiUrl);
        return response.data.response.results;
    } catch (error) {
        console.log(`Error fetching article with id${id}:`, error)
        return null;
    }
}


