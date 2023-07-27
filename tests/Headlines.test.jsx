import { render, screen } from '@testing-library/react';
import Headlines from '../src/Components/Headlines/Headlines';
import mockNewsData from '../mockNewsData.json';

describe('Headlines Test', () => {

    const mockHeadlines = mockNewsData.mockApiResponse;

    test('renders a message when no headlines are provided', () => {
        render(<Headlines headlines={[]} />);
        const message = screen.getByText('Please wait a moment...');
        expect(message).toBeInTheDocument();
    });

    test('renders headlines when provided', () => {
        render(<Headlines headlines={mockHeadlines} />);
        const headline1 = screen.getByText('mock headline 1');
        const headline2 = screen.getByText('mock headline 2');
        expect(headline1).toBeInTheDocument();
        expect(headline2).toBeInTheDocument();
    });
});
