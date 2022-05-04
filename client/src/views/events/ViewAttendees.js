import EventPageHeader from 'components/Headers/EventPageHeader'
import MainNavbar from 'components/Navbars/MainNavbar'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import { Container, Input, Row, FormGroup, Label, Form, Button, Col, Card } from 'reactstrap'
import csegsaApi from 'api/csegsaApi'
import { auth } from '../userlogin/Firebase'

const ViewAttendees = (props) => {

  const [eventDetails, setEventDetails] = React.useState({}) ;
  const [isLoading, setIsLoading] = React.useState(true) ;

  const location = useLocation() ;
  const event_id = location.pathname.split("/")[2] ;
  console.log(event_id) ;

  console.log(props) ;
  React.useEffect(() => {
    console.log("API call for event by ID")
    csegsaApi
      .get(`/events/${event_id}`)
      .then(res => {
        console.log(res.data)
        setEventDetails(res.data) ;
        setIsLoading(false) ;
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.log(eventDetails.users) ;

  if(isLoading)
  return(
    <Container>
      <h1>Loading</h1>
    </Container>
  )

  if(eventDetails.users.length === 0) {
    return (
      <>
      <MainNavbar />
      <EventPageHeader></EventPageHeader>
      <Container>
        <h2>No Attendees</h2>
      </Container>
      </>
    )
  }

  return (
    <>
      <MainNavbar />
      <EventPageHeader></EventPageHeader>
      <Container>
        <h2>Attendees</h2> <br />
          {
             eventDetails["users"].map((item, index) => {
              return (
                <Card key={index} className="ml-auto mr-auto">
                  <div className="card-body">
                    <h4 className="card-title ">{item}</h4>
                  </div>
                </Card>
              )
            })
          }
      </Container>
    </>
  )
}

export default ViewAttendees ;
