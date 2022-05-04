import React from 'react';
import App from './App';
import LandingPage from 'views/homepage/LandingPage'
import LoginPage from 'views/userlogin/LoginPage'
import JobPostings from 'views/jobs/JobPostings'
import EventsPage from 'views/events/EventsPage'
import AddEvent from 'views/events/AddEvent'
import JobForm from 'views/jobs/JobForm'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('views/homepage/LandingPage');
jest.mock('views/userlogin/LoginPage');
jest.mock('views/jobs/JobPostings');
jest.mock('views/events/EventsPage');
jest.mock('views/events/AddEvent');
jest.mock('views/jobs/JobForm');

describe("Tests for App Router", () => {
    test("Should render LandingPage on default route", () => {
        // Arrange
        (LandingPage).mockImplementation(() => <div>LandingPageMock</div>);

        // Act
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    });

    test("Should render LoginPage for login route", () => {
        // Arrange
        (LoginPage).mockImplementation(() => <div>LoginPageMock</div>);

        // Act
        render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("LoginPageMock")).toBeInTheDocument();
    });

    test("Should render EventsPage for events route", () => {
        // Arrange
        (EventsPage).mockImplementation(() => <div>EventsPageMock</div>);

        // Act
        render(
            <MemoryRouter initialEntries={['/events']}>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("EventsPageMock")).toBeInTheDocument();
    });

    test("Should render AddEvent for add-event route", () => {
        // Arrange
        (AddEvent).mockImplementation(() => <div>AddEventMock</div>);

        // Act
        render(
            <MemoryRouter initialEntries={['/add-event']}>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("AddEventMock")).toBeInTheDocument();
    });
    test("Should render JobPostings for jobs route", () => {
        // Arrange
        (JobPostings).mockImplementation(() => <div>JobPostingsMock</div>);

        // Act
        render(
            <MemoryRouter initialEntries={['/jobs']}>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("JobPostingsMock")).toBeInTheDocument();
    });
    test("Should render JobForm for add-jobs route", () => {
        // Arrange
        (JobForm).mockImplementation(() => <div>JobFormMock</div>);

        // Act
        render(
            <MemoryRouter initialEntries={['/add-jobs']}>
                <App />
            </MemoryRouter>
        );

        // Assert
        expect(screen.getByText("JobFormMock")).toBeInTheDocument();
    });
});