import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import App from '../App'

export default function testRoutes (page, keyword, route) {
    return test("Should render " + keyword + " on " + route + " route", () => {
        // Arrange
        (page).mockImplementation(() => <div>{keyword}</div>);

        // Act
        render(
            <MemoryRouter initialEntries={[route]}>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText(keyword)).toBeInTheDocument();
    });
}