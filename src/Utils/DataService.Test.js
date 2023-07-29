import axios from 'axios';
import { getData } from './src/Utils/dataservice'; //file path issue
import mockNewsData from '../../mockNewsData.json';
import { vi } from 'vitest';

vi.mock(`axios`);

describe('DataService Tests', () => {
    test('should make an external call', async () => {
        axios.get.mockResolvedValueOnce({ data: mockNewsData.mockApiResponse });
        await getData();

        expect(axios.get).toHaveBeenCalledWith("https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=1a3b7ff1-a33f-41ed-a0a3-0f3855c04cbc");
    });
});
