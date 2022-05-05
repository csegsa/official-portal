import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import LandingPage from 'views/homepage/LandingPage'
import LoginPage from 'views/userlogin/LoginPage'
import JobPostings from 'views/jobs/JobPostings'
import EventsPage from 'views/events/EventsPage'
import AddEvent from 'views/events/AddEvent'
import JobForm from 'views/jobs/JobForm'
import AdminPortal from 'views/adminpage/AdminPortal'
import ProtectedRoute from 'views/userlogin/ProtectedRoute'

import { useAuthState } from 'react-firebase-hooks/auth'
import { checkAdminRole } from './utils/CheckAdminRole'
import { auth } from './views/userlogin/Firebase'

function App() {
    // const [user, , loading, error] = useAuthState(auth)
    // const [isAdmin, setAdmin] = React.useState(false)

    // async function checkAdminStatus() {
    //     if (user) {
    //         const isAdminCheck = await checkAdminRole(user, loading, error, auth)
    //         if (isAdminCheck) {
    //             setAdmin(true)
    //             console.log("[Protected]:: isAdmin")
    //         } else {
    //             setAdmin(false)
    //         }
    //     }
    // }

    // React.useEffect(async () => {
    //     console.log("opening protected route component")
    //     if (user) {
    //         await checkAdminStatus()
    //         console.log("awaiting done for check admin status")
    //     } 
    // }, [user])

    return (
        <>
            <Switch>
                <Route path="/home" render={props => <LandingPage {...props} />} />
                <Route path="/login" render={props => <LoginPage {...props} />} />
                <Route path="/events" render={props => <EventsPage {...props} />} />
                <Route path="/add-event" render={props => <AddEvent {...props} />} />
                <Route path="/jobs" render={props => <JobPostings {...props} />} />
                <Route path="/add-jobs" render={props => <JobForm {...props} />} />
                {/* <Route path="/admin" render={props => <AdminPortal {...props} />} /> */}
                {/* <Route path="/admin" element={
                    <ProtectedRoute>
                        <AdminPortal />
                    </ProtectedRoute>
                }/> */}
                {/* <Route path="/admin" render={props => 
                    <ProtectedRoute isAdmin={isAdmin}>
                        <AdminPortal/>
                    </ProtectedRoute>
                }/> */}
                <Route path="/admin" render={props => 
                    <ProtectedRoute>
                        <AdminPortal/>
                    </ProtectedRoute>
                }/>
                <Redirect to="/home" />
            </Switch>
        </>
    )
}

export default App
