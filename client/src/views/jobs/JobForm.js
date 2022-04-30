import React from 'react'

import MainNavbar from 'components/Navbars/MainNavbar.js'
import JobPostingHeader from 'components/Headers/JobPostingHeader'
import MainFooter from 'components/Footers/MainFooter'

import JobsForm from './AddJobs.js'

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
      <JobsForm />
      <MainFooter />
    </>
  )
}

export default JobPostings
