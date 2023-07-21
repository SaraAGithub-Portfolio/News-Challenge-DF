import HeadlineCard from '../src/Components/HeadlineCard';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import mockNewsData from "../../mockNewsData.json";
import { render, screen } from '@testing-library/react'

describe('Headline Card Test', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route
                    path="/headline/:id"
                    element={<HeadlineCard headline={mockNewsData.data.response.results} />}
                />
            </Routes>
        </MemoryRouter>
    );
    test('that it renders the headline text', async () => {
        const cardText = await screen.findByText(mockNewsData.data.response.results[1].fields.cardText)
        expect(cardText).toBeInTheDocument();
    })
});