import axios from 'axios';

export const getData = async () => {
    try {
        const response = await axios.get("https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1a3b7ff1-a33f-41ed-a0a3-0f3855c04cbc");
        const headlines = response.data.response.results;
        return headlines;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};



