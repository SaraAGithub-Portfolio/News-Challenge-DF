import axios from 'axios';
import { getThreeHeadlines } from './src/Utils/dataservice'; //file path issue
import mockNewsData from '../../mockNewsData.json';
import { vi } from 'vitest';

vi.mock(`axios`);

describe('DataService Tests', () => {
    test('should make an external call', async () => {
        axios.get.mockResolvedValueOnce(mockNewsData);
        await getThreeHeadlines();

        expect(axios.get).toHaveBeenCalledWith(import.meta.env.VITE_APP_LOCAL_API_KEY);
    });
    test('should return correct data', async () => {
        axios.get.mockResolvedValueOnce(mockNewsData);

        const result = await getThreeHeadlines();
        expect(result).toEqual(mockNewsData.data.response.results.slice(0, 3));
    });
});
