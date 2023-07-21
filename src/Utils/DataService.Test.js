import axios from 'axios';
import { DataService } from './Util/DataService.js';
import mockNewsData from '../../../mockNewsData.json';
import { vi } from 'vitest';

vi.mock(`axios`);

describe('get news tests', () => {
    it('should make an external call', () => {
        axios.get.mockResolvedValueOnce({ data: mockNewsData });
        DataService();

        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/webTitle');
    });
    test('should return correct data', async () => {
        axios.get.mockResolvedValueOnce(mockNewsData);

        const result = await DataService();
        expect(result).toEqual(mockNewsData.data.response.results);
    });
});
