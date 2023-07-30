import axios from 'axios';
import { getData } from './src/Utils/dataservice';
import mockNewsData from '../../mockNewsData.json';
import { vi } from 'vitest';

vi.mock('axios');

const apiUrl = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1a3b7ff1-a33f-41ed-a0a3-0f3855c04cbc";

describe('DataService Tests', () => {
    test('should make an external call', async () => {
        axios.get.mockResolvedValueOnce({ data: mockNewsData.mockApiResponse });
        await getData();

        expect(axios.get).toHaveBeenCalledWith(apiUrl);
    });

    test('should return expected data', async () => {
        axios.get.mockResolvedValue({ data: mockNewsData.mockApiResponse });
        const result = await getData();
        expect(result).toEqual(mockNewsData.mockApiResponse.response.results);
    });



    test('should return an error if not expected data', async () => {
        const dataError = new Error('Error fetching news');
        axios.get.mockRejectedValueOnce(dataError);
        const result = await getData();
        expect(result).toEqual([]);
    });

});
