import { render, screen } from '@testing-library/react';
import Headlines from '../src/Components/Headlines/Headlines';
import mockNewsData from '../mockNewsData.json';

describe('Headlines Test', () => {

    test('renders a message when no headlines are provided', () => {
        render(<Headlines headlines={[]} />);
        const message = screen.getByText('Please wait a moment...');
        expect(message).toBeInTheDocument();
    });

    test('renders headlines when provided', () => {
        render(<Headlines headlines={mockNewsData.mockApiResponse.response.results} />);
        const headlineElements = screen.getAllByRole('heading');
        expect(headlineElements).toHaveLength(mockNewsData.mockApiResponse.response.results.length);
    });

});
