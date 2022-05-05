import React from 'react'
import { Container, Row, Col, Card } from 'reactstrap'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed
import listPlugin from '@fullcalendar/list' // For List View
import MainNavbar from 'components/Navbars/MainNavbar.js'
import EventPageHeader from 'components/Headers/EventPageHeader'
import MainFooter from 'components/Footers/MainFooter'
import csegsaApi from 'api/csegsaApi.js'
import { Link } from 'react-router-dom'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { checkAdminRole } from 'utils/CheckAdminRole'

const EventsPage = () => {
  const [events, setEvents] = React.useState([])
  const [displayEvent, setDisplayEvent] = React.useState(null)
  const [user, loading, error] = useAuthState(auth)
  const [showAddEvent, setShowAddEvent] = React.useState(false)
  document.documentElement.classList.remove('nav-open')

  async function updatePrivilegedOptionVisibility() {
    if (user) {
      const isAdmin = await checkAdminRole(user, loading, error, auth)
      if (isAdmin) {
        setShowAddEvent(true)
      } else {
        setShowAddEvent(false)
      }
      console.log('showAddEvent: ' + showAddEvent)
    }
  }

  React.useEffect(async () => {
    updatePrivilegedOptionVisibility()
  }, [user, loading, error])

  React.useEffect(() => {
    document.body.classList.add('profile-page')
    return function cleanup() {
      document.body.classList.remove('profile-page')
    }
  })

  React.useEffect(() => {
    csegsaApi
      .get('/events')
      .then(res => {
        console.log(res.data)
        setEvents(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const viewEvent = arg => {
    const filterId = arg.event.id

    const selectedEvent = events.filter(event => event._id === filterId)
    setDisplayEvent(selectedEvent)
  }

  const eventsList = events.map(event => {
    return {
      id: event._id,
      title: event.name,
      date: event.start_time
    }
  })

  let cardContent = (
    <Card className="ml-auto mr-auto">
      <div className="card-body">
        <h3 className="card-title">No Event Selected</h3>
      </div>
    </Card>
  )

  if (displayEvent != null) {
    cardContent = (
      <Card className="ml-auto mr-auto">
        <div className="card-body">
          <h3 className="card-title">{displayEvent[0].name}</h3>
          <h6 className="card-subtitle mb-2 text-muted">Event subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the
            card&apos;s content.
          </p>
          <p className="card-text">
            <b>Venue: {displayEvent[0].location}</b>
          </p>
          <p className="card-text">
            <b>Time: {displayEvent[0].start_time}</b>
          </p>
          <a href="#" className="btn btn-success">
            RSVP
          </a>
        </div>
      </Card>
    )
  }

  return (
    <>
      <MainNavbar />
      <EventPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="8">
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,listWeek'
                  }}
                  events={eventsList}
                  eventClick={val => {
                    viewEvent(val)
                  }}
                />
              </Col>
              <Col md="4">
                <Row>
                  {showAddEvent ? (
                    <Link to="/add-event" className="btn btn-danger">
                      Add Event
                    </Link>
                  ) : (
                    <></>
                  )}
                </Row>
                {cardContent}
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
