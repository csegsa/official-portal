import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import JobPostingHeader from 'components/Headers/JobPostingHeader'
import MainFooter from 'components/Footers/MainFooter'

import JobListing from './JobListing.js'
import { Link } from 'react-router-dom'
import { checkAdminRole } from 'utils/CheckAdminRole'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function JobPostings() {
  const [user, loading, error] = useAuthState(auth)
  const [showAddJob, setShowAddJob] = React.useState(false)
  document.documentElement.classList.remove('nav-open')

  async function updatePrivilegedOptionVisibility() {
    if (user) {
      const isAdmin = await checkAdminRole(user, loading, error, auth)
      if (isAdmin) {
        setShowAddJob(true)
      } else {
        setShowAddJob(false)
      }
      console.log('showAddJob: ' + showAddJob)
    }
  }

  React.useEffect(async () => {
    updatePrivilegedOptionVisibility()
  }, [user, loading, error])

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
        {showAddJob && (
          <Link to="/add-jobs" className="btn btn-danger">
            Add Jobs
          </Link>
        )}
      </Container>
      <MainFooter />
    </>
  )
}

export default JobPostings
