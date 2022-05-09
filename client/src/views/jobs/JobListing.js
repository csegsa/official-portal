import React, { useEffect, useState } from 'react'

import { Card, Button } from 'reactstrap'
import csegsaApi from 'api/csegsaApi'
import checkAdminRole from '../../utils/CheckAdminRole'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../userlogin/Firebase'

const JobListing = () => {
  const [jobs, setJobs] = useState([])
  const [, setIsLoading] = useState(true)
  const [isAuthorizedToRemove, setIsAuthorizedToRemove] = useState(false)
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    getJobs()
  }, [])

  useEffect(async () => {
    try {
      const isAuthorized = await checkAdminRole(user, loading, error, auth)
      setIsAuthorizedToRemove(isAuthorized)
      console.log('Is Authorized: ', isAuthorized)
    } catch (error) {
      console.log(error)
    }
  }, [user, loading, error, auth])

  const getJobs = () => {
    csegsaApi.get('/jobs').then(res => {
      console.log(res.data)
      setJobs(res.data)
      setIsLoading(false)
    })
  }

  const confirmDeleteJob = index => {
    if (confirm('Are you sure you want to delete this job?')) {
      console.log('consider job deleted ', index)
      getJobs()
      // fetch job listing again
    }
  }

  return (
    <>
      {jobs.map((item, index) => {
        return (
          <Card key={index} className="ml-auto mr-auto">
            <div className="card-body">
              <h3 className="card-title ">{item.company_name}</h3>
              <h6 className="card-subtitle mb-2 text-muted">{item.job_title}</h6>
              <p className="card-text">
                <b>Location: {item.location}</b>
              </p>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <b>Deadline: {new Date(item.deadline).toLocaleString()}</b>
              </p>
              <a href={'https://' + item.url} className="btn btn-primary">
                Website
              </a>
              {isAuthorizedToRemove && (
                <Button color="danger" outline onClick={() => confirmDeleteJob(index)}>
                  Remove
                </Button>
              )}
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default JobListing
