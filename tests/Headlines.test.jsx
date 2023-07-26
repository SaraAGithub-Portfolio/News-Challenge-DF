import { render, screen } from '@testing-library/react';
import Headlines from '../src/Components/Headlines';

describe('Headlines Test', () => {
    const mockHeadlines = [
        {
            id: '1',
            fields: {
                headline: 'mock headline 1',
                thumbnail: 'mock thumbnail url 1'
            },
        },
        {
            id: '2',
            fields: {
                headline: 'mock headline 2',
                thumbnail: 'mock thumbnail url 2'
            },
        }
    ];

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
