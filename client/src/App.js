import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import LandingPage from 'views/homepage/LandingPage'
import LoginPage from 'views/userlogin/LoginPage'
import JobPostings from 'views/jobs/JobPostings'
import EventsPage from 'views/events/EventsPage'
import AddEvent from 'views/events/AddEvent'
import JobForm from 'views/jobs/JobForm'

function App() {
    return (
        <>
            <Switch>
                <Route path="/home" render={props => <LandingPage {...props} />} />
                <Route path="/login" render={props => <LoginPage {...props} />} />
                <Route path="/events" render={props => <EventsPage {...props} />} />
                <Route path="/add-event" render={props => <AddEvent {...props} />} />
                <Route path="/jobs" render={props => <JobPostings {...props} />} />
                <Route path="/add-jobs" render={props => <JobForm {...props} />} />
                <Redirect to="/home" />
            </Switch>
        </>
    )
}

export default App
