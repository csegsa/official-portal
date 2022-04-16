import React from "react"

// reactstrap components
import { Container, Row, Col, Card, Button } from "reactstrap"

import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View

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

  // React.useEffect(() => {
  //   csegsaApi.get("/events").then(res => {
  //     console.log(res.data);
  //     setEvents(res.data)
  //     setIsloaded(true)
  //   });
  // }, []);

  // const eventsList = events.map(event => <EventItem key={event._id} event={event} />);
  return (
    <>
      <MainNavbar />
      <EventPageHeader />
      <div className='main'>
        <div className='section text-center'>
          <Container>
          <Row>
              <Col md="8">
                <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,listWeek'
                  }}
                  events={[
                    { title: 'event 1', date: '2022-04-13' },
                    { title: 'event 2', date: '2022-04-09' },
                    { title: 'event 2', date: '2022-04-09' },
                    { title: 'event 2', date: '2022-04-09' },
                    { title: 'event 2', date: '2022-04-12' },
                    { title: 'event 2', date: '2022-04-13' },
                    { title: 'event 2', date: '2022-04-15' }
                  ]}
                />
              </Col>
              <Col md="4">
                <Card className="ml-auto mr-auto">
                <div className="card-body">
                <h3 className="card-title">Sample Event</h3>
                <h6 className="card-subtitle mb-2 text-muted">Event subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="card-text"><b>Venue:</b></p>
                <p className="card-text"><b>Time:</b></p>
                <a href="#" class="btn btn-success">RSVP</a>
                </div>
                </Card>
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
