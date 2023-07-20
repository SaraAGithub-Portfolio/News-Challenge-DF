import { render } from '@testing-library/react';
import Headlines from '../src/Components/Headlines';

describe('Headlines test', () => {
    test('should render news articles', () => {
        const props = {
            mockHeadlines: [
                {
                    id: 1,
                    fields: {
                        thumbnail: "https://media.guim.co.uk/526802e87e837142de4c0c854e8a95a7740dd197/0_65_6078_3647/500.jpg",
                        headline: 'mock headline 1',
                    },
                },
                {
                    id: 2,
                    fields: {
                        thumbnail: "https://media.guim.co.uk/27c027752091e28dcb8133b0d5e6cb9af7fd4e8e/60_0_1800_1080/500.jpg",
                        headline: 'mock headline 2',
                    },
                },
            ],
        };
        const { getByAltText, getByText } = render(<Headlines headlines={props.mockHeadlines} />);
        expect(getByAltText('Thumbnail 1')).toBeInTheDocument();
        expect(getByAltText('Thumbnail 2')).toBeInTheDocument();
        expect(getByText('mock headline 1')).toBeInTheDocument();
        expect(getByText('mock headline 2')).toBeInTheDocument();
    });
    test('should render a message when loading the page', () => {
        const { getByText } = render(<Headlines headlines={[]} />);
        expect(getByText('Please wait a moment...')).toBeInTheDocument();
    });
});