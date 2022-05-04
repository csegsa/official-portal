import EventPageHeader from 'components/Headers/EventPageHeader'
import MainNavbar from 'components/Navbars/MainNavbar'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'
import DateTimePicker from 'react-datetime-picker'
import { Container, Input, Row, FormGroup, Label, Form, Button, Col } from 'reactstrap'
import csegsaApi from 'api/csegsaApi'
import { auth } from '../userlogin/Firebase'

const ViewAttendees = () => {

  React.useEffect(() => {
    console.log("API call for event by ID")
    csegsaApi
      .get('/events/626f5d3b0db16e203abb91ff')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <MainNavbar />
      <EventPageHeader></EventPageHeader>
      <Container>
        Event Details <br />
        <br />
      </Container>
    </>
  )
}

export default ViewAttendees ;
