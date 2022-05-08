import React, { useEffect } from 'react'
// reactstrap components
import { Container } from 'reactstrap'
import { Redirect } from 'react-router-dom'
// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import AdminPageHeader from 'components/Headers/AdminPageHeader'
import MainFooter from 'components/Footers/MainFooter'
import AdminCard from './AdminCard'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
// import csegsaApi from 'api/csegsaApi.js'

const AdminPortal = ({location}) => {

  const isAdminFromNavBar = location.state.isAdmin

  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    document.body.classList.add('profile-page')
    return function cleanup() {
      document.body.classList.remove('profile-page')
    }
  })

  // useEffect(() => {
  //   console.log(isAdminFromNavBar)
  // }, [isAdminFromNavBar])

  // useEffect(() => {
  //   console.log(authenticated)
  // }, [authenticated])


  const [isAdmin, setAdmin] = React.useState(isAdminFromNavBar)
  const [authenticated, setAuthenticated] = React.useState(location.state.authenticated)
  const [user] = useAuthState(auth)

  useEffect(() => {
    console.log(user)
  }, [user])

  React.useEffect(() => {
    // console.log("user: ", user)
    if(user) {
      setAuthenticated(true)
      if (isAdminFromNavBar) {
        setAdmin(true)
      }
    } else {
      setAuthenticated(false)
      setAdmin(false)
    }
  }, [user])

  return (
    <>
      <MainNavbar />
      <AdminPageHeader />
      {isAdmin && (
        <div>
          <Container>
            <h3>Admin Portal</h3>
            <br />

            <AdminCard />
          </Container>
        </div>
      )}
      
      {authenticated && !isAdmin && (
        <div
          style={{
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Access denied. You do not have privilege to this.
        </div>
      )}

      {!authenticated && <Redirect to="/login" replace />}
      <MainFooter />
    </>
  )
}

export default AdminPortal
