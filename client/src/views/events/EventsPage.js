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
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [isRsvp, setIsRsvp] = React.useState(false)
  const [displayTime, setDisplayTime] = React.useState(null)

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
        console.log('Added attendee to event')
        setIsRsvp(true)
      })
      .catch(err => {
        console.log(err)
        console.log('Error adding event')
        alert('Error adding event')
      })
  }

  const deleteEvent = async eventId => {
    const token = await auth.currentUser.getIdToken()
    console.log('deleting id:', eventId)
    console.log('token:', token)
    csegsaApi
      .post(
        '/events/remove/' + eventId,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then(res => {
        console.log('deleted events', res)
        getEvents()
        setDisplayEvent(null)
      })
      .catch(err => {
        console.log(err)
        console.log('Error deleting event')
        alert('Error deleting event')
      })
  }

  // setting the visibility for the add event button based on the privileges of the user
  async function updatePrivilegedOptionVisibility() {
    if (user) {
      const isAdmin = await checkAdminRole(user, loading, error, auth)
      setIsAdmin(isAdmin)
    } else {
      setIsAdmin(false)
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
    getEvents()
  }, [isRsvp])

  const getEvents = () => {
    console.log('calling getEvents...')
    csegsaApi
      .get('/events')
      .then(res => {
        console.log(res.data)
        setEvents(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const viewEvent = arg => {
    const filterId = arg.event.id

    const selectedEvent = events.find(event => event._id === filterId)
    if (!selectedEvent) {
      return
    }
    const formatTime = new Date(selectedEvent.start_time)
    console.log(formatTime)
    setDisplayTime(formatTime.toLocaleString())
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

  const confirmDeleteEvent = async id => {
    if (confirm('Are you sure you want to delete this event?')) {
      // console.log("consider event deleted ", id)
      await deleteEvent(id)
    }
  }

  // card content based on the event clicked.
  if (displayEvent != null) {
    cardContent = (
      <Card className="ml-auto mr-auto">
        <div className="card-body">
          <h3 className="card-title">{displayEvent.name}</h3>
          <p className="card-text">{displayEvent.description}</p>
          <p className="card-text">
            <b>Venue: {displayEvent.location}</b>
          </p>
          <p className="card-text">
            <b>Time: {displayTime}</b>
          </p>
          <Button
            className={isRsvp ? 'btn btn-success' : 'btn btn-primary'}
            onClick={() => {
              handleSubmit(displayEvent._id)
            }}
          >
            {isRsvp ? 'Attending' : 'RSVP'}
          </Button>
          {isAdmin && (
            <Button
              color="danger"
              outline
              onClick={async () => confirmDeleteEvent(displayEvent._id)}
            >
              Remove
            </Button>
          )}
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
                  {isAdmin ? (
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
