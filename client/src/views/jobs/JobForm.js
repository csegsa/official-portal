import React, {useEffect, useState} from "react" ;

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Row, Col } from "reactstrap"

// core components
import MainNavbar from "components/Navbars/MainNavbar.js"
import JobPostingHeader from "components/Headers/JobPostingHeader"
import MainFooter from "components/Footers/MainFooter" ;

import JobsForm from "./AddJobs.js" ;
import JobListing from './JobListing.js'
import csegsaApi from "api/csegsaApi.js" ;
import { Link } from "react-router-dom" ;

function JobPostings() {

  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("profile-page")
    return function cleanup() {
      document.body.classList.remove("profile-page")
    }
  }) ;

  return (
    <>
      <MainNavbar />
      <JobPostingHeader />
      <JobsForm />
      <MainFooter />
    </>
  )
}

export default JobPostings ;
