import React from 'react'
import { Container, Row, Col, Card, Button } from 'reactstrap'
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
import checkAdminRole from 'utils/CheckAdminRole'

const EventsPage = () => {
  const [events, setEvents] = React.useState([])
  const [displayEvent, setDisplayEvent] = React.useState(null)
  const [user, loading, error] = useAuthState(auth)
  const [showAddEvent, setShowAddEvent] = React.useState(false)
  const [isRsvp, setIsRsvp] = React.useState(false)

  document.documentElement.classList.remove('nav-open')

  // this function gets triggered when the rsvp button is pressed. Adds the user email to the list of users for that event
  const handleSubmit = async eventId => {
    if (!user) {
      alert('Please login to RSVP')
    }
    const token = await auth.currentUser.getIdToken()
    csegsaApi
      .post(
        '/events/addAttendee',
        {
          event_id: eventId
        },
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then(res => {
        console.log(res)
        console.log('Added attendee to event')
        setIsRsvp(true)
      })
      .catch(err => {
        console.log(err)
        console.log('Error adding event')
        alert('Error adding event')
      })
  }
  // setting the visibility for the add event button based on the privileges of the user
  async function updatePrivilegedOptionVisibility() {
    if (user) {
      const isAdmin = await checkAdminRole(user, loading, error, auth)
      setShowAddEvent(isAdmin)
    } else {
      setShowAddEvent(false)
    }
  }

  React.useEffect(async () => {
    await updatePrivilegedOptionVisibility()
  }, [user, loading, error])

  React.useEffect(() => {
    document.body.classList.add('profile-page')
    return function cleanup() {
      document.body.classList.remove('profile-page')
    }
  })

  // this function fetches the data for the events and stores them in the event variable defined on top.
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
  }, [isRsvp])

  const viewEvent = arg => {
    const filterId = arg.event.id

    const selectedEvent = events.find(event => event._id === filterId)
    if (!selectedEvent) {
      return
    }

    setIsRsvp(user && selectedEvent.users.indexOf(user.email) !== -1)

    setDisplayEvent(selectedEvent)
  }

  const eventsList = events.map(event => {
    return {
      id: event._id,
      title: event.name,
      date: event.start_time
    }
  })

  // card content when no event is selected.
  let cardContent = (
    <Card className="ml-auto mr-auto">
      <div className="card-body">
        <h3 className="card-title">No Event Selected</h3>
      </div>
    </Card>
  )
  // card content based on the event clicked.
  if (displayEvent != null) {
    cardContent = (
      <Card className="ml-auto mr-auto">
        <div className="card-body">
          <h3 className="card-title">{displayEvent.name}</h3>
          <h6 className="card-subtitle mb-2 text-muted">Event subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the
            card&apos;s content.
          </p>
          <p className="card-text">
            <b>Venue: {displayEvent.location}</b>
          </p>
          <p className="card-text">
            <b>Time: {displayEvent.start_time}</b>
          </p>
          <Button
            className={isRsvp ? 'btn btn-success' : 'btn btn-primary'}
            onClick={() => {
              handleSubmit(displayEvent._id)
            }}
          >
            {isRsvp ? 'Attending' : 'RSVP'}
          </Button>
          <br />
          <br />
          <Link to={`/view-attendees/${displayEvent._id}`}>View Attendees</Link>
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
                {/* The documentation for full calendar can be found at https://fullcalendar.io/docs#toc  */}
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
