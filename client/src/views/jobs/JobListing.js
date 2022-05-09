import React, { useEffect, useState } from 'react'

import { Card, Button } from 'reactstrap'
import csegsaApi from 'api/csegsaApi'

const JobListing = () => {
  const [jobs, setJobs] = useState([])
  const [, setIsLoading] = useState(true)

  useEffect(() => {
    getJobs()
  }, [])

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
              <Button color="danger" outline onClick={() => confirmDeleteJob(index)}>
                Remove
              </Button>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default JobListing
