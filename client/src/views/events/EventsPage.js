import React from "react"

// reactstrap components
import { Container, Row, Col, Card, Button } from "reactstrap"

import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!

// core components
import MainNavbar from "components/Navbars/MainNavbar.js"
import EventPageHeader from "components/Headers/EventPageHeader"
import MainFooter from "components/Footers/MainFooter"
import EventItem from "./EventItem"
import csegsaApi from "api/csegsaApi.js"
import { Link } from "react-router-dom"

function EventsPage() {
  const [events, setEvents] = React.useState([])
  const [isLoaded, setIsloaded] = React.useState(false)
  
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("profile-page")
    return function cleanup() {
      document.body.classList.remove("profile-page")
    }
  })

  React.useEffect(() => {
    csegsaApi.get("/events").then(res => {
      console.log(res.data);
      setEvents(res.data)
      setIsloaded(true)
    });
  }, []);

  const eventsList = events.map(event => <EventItem key={event._id} event={event} />);
  return (
    <>
      <MainNavbar />
      <EventPageHeader />
      <div className='main'>
        <div className='section text-center'>
          <Container>
            <Row>
              <Col md='6'>
                <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />
              </Col>
              <Col md='6'>
              <Row>
              <Link to="/add-event" className="btn btn-danger">Add Event</Link>
              </Row>
              <Row>
                
                  <Row>
                    {isLoaded ? eventsList : "Loading Events"}
                  </Row>
                
              </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <MainFooter />
    </>
  )
}

export default EventsPage
