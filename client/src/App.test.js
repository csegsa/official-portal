// eslint-disable-next-line no-unused-vars
import React from 'react'
import LandingPage from 'views/homepage/LandingPage'
import LoginPage from 'views/userlogin/LoginPage'
import JobPostings from 'views/jobs/JobPostings'
import EventsPage from 'views/events/EventsPage'
import AddEvent from 'views/events/AddEvent'
import JobForm from 'views/jobs/JobForm'
import '@testing-library/jest-dom/extend-expect'
import testRoutes from 'utils/TestRoute'
jest.mock('views/homepage/LandingPage')
jest.mock('views/userlogin/LoginPage')
jest.mock('views/jobs/JobPostings')
jest.mock('views/events/EventsPage')
jest.mock('views/events/AddEvent')
jest.mock('views/jobs/JobForm')

describe('Tests for App Router', () => {
  testRoutes(LandingPage, 'LandingPageMock', '/')
  testRoutes(LoginPage, 'LoginPageMock', '/login')
  testRoutes(EventsPage, 'EventsPageMock', '/events')
  testRoutes(AddEvent, 'AddEventMock', '/add-event')
  testRoutes(JobPostings, 'JobPostingsMock', '/jobs')
  testRoutes(JobForm, 'JobFormMock', '/add-jobs')
})
