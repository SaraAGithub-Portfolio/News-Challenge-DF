import axios from 'axios';

export const getData = async () => {
    const apiUrl = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1a3b7ff1-a33f-41ed-a0a3-0f3855c04cbc"
    try {
        const response = await axios.get(apiUrl);
        const headlines = response.data.response.results;
        return headlines;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};



