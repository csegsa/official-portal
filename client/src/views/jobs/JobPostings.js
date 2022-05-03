import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import JobPostingHeader from 'components/Headers/JobPostingHeader'
import MainFooter from 'components/Footers/MainFooter'

import JobListing from './JobListing.js'
import { Link } from 'react-router-dom'
import csegsaApi from 'api/csegsaApi.js'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function JobPostings() {
  const [user, loading, error] = useAuthState(auth)
  const [showAddJob, setShowAddJob] = React.useState(false)
  document.documentElement.classList.remove('nav-open')

  function updatePrivilegedOptionVisibility() {
    if (user) {
      console.log('Checking if job can be added')
      console.log(user, loading, error)
      csegsaApi.get('/roles' + '?user=' + user.email).then(res => {
        console.log(res.data)
        if (res.data.role === 'admin') {
          setShowAddJob(true)
          console.log('showAddJob: ' + showAddJob)
        }
      })
    } else if (loading) {
      console.log('auth state Loading')
      setShowAddJob(false)
    } else if (error) {
      console.log('Error')
      setShowAddJob(false)
    } else {
      console.log('No user')
      setShowAddJob(false)
    }
  }

  React.useEffect(() => {
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
        {showAddJob && 
        <Link to="/add-jobs" className="btn btn-danger">
          Add Jobs
        </Link>}
      </Container>
      <MainFooter />
    </>
  )
}

export default JobPostings
