import axios from 'axios';
import { getHeadlines } from './src/Utils/dataservice'; //file path issue
import mockNewsData from '../../mockNewsData.json';
import { vi } from 'vitest';

vi.mock(`axios`);

describe('DataService Tests', () => {
    test('should make an external call', async () => {
        axios.get.mockResolvedValueOnce({ data: mockNewsData.mockApiResponse });
        await getHeadlines();

        expect(axios.get).toHaveBeenCalledWith(import.meta.env.VITE_APP_LOCAL_API_KEY);
    });
});
