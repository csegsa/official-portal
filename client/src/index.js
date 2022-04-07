import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

// styles
import "bootstrap/scss/bootstrap.scss"
import "assets/scss/paper-kit.scss?v=1.3.0"
import "assets/demo/demo.css?v=1.3.0"
// pages
import Index from "views/Index.js"
import NucleoIcons from "views/NucleoIcons.js"
import LandingPage from "views/homepage/LandingPage"
import LoginPage from "views/userlogin/LoginPage"
import JobPostings from "views/jobs/JobPostings"
import EventsPage from "views/events/EventsPage"

// Examples modules - To be removed later.
import ProfilePage from "views/examples/ProfilePage.js"
import RegisterPage from "views/examples/RegisterPage.js"
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/home' render={props => <LandingPage {...props} />} />
      <Route path='/login' render={props => <LoginPage {...props} />} />
      <Route path='/events' render={props => <EventsPage {...props} />} />
      <Route path='/jobs' render={props => <JobPostings {...props} />} />

      {/* Example routes - To be removed later */}
      <Route path='/index' render={props => <Index {...props} />} />
      <Route path='/nucleo-icons' render={props => <NucleoIcons {...props} />} />
      <Route path='/profile-page' render={props => <ProfilePage {...props} />} />
      <Route path='/register-page' render={props => <RegisterPage {...props} />} />
      <Redirect to='/home' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
)
