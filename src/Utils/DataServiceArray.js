import mockNewsData from '../../mockNewsData.json';

export const getThreeHeadlines = () => {
    const headlines = mockNewsData.mockApiResponse.response.results;
    const threeHeadlines = headlines.slice(0, 3);
    return threeHeadlines;
}