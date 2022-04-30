import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import JobPostingHeader from 'components/Headers/JobPostingHeader'
import MainFooter from 'components/Footers/MainFooter'

import JobListing from './JobListing.js'
import { Link } from 'react-router-dom'

function JobPostings() {
  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    document.body.classList.add('profile-page')
    return function cleanup() {
      document.body.classList.remove('profile-page')
    }
  })

  return (
    <>
      <MainNavbar />
      <JobPostingHeader />
      <Container>
        <h3>Job Openings</h3>
        <br />
        <JobListing />
        <Link to="/add-jobs" className="btn btn-danger">
          Add Jobs
        </Link>
      </Container>
      <MainFooter />
    </>
  )
}

export default JobPostings
