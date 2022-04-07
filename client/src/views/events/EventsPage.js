import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!

// core components
import MainNavbar from "components/Navbars/MainNavbar.js"
import EventPageHeader from "components/Headers/EventPageHeader"
import MainFooter from "components/Footers/MainFooter"

function EventsPage() {
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("profile-page")
    return function cleanup() {
      document.body.classList.remove("profile-page")
    }
  })
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
            </Row>
          </Container>
        </div>
      </div>
      <MainFooter />
    </>
  )
}

export default EventsPage
