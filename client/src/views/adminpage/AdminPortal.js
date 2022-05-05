import React from 'react'
// reactstrap components
import { Container } from 'reactstrap'
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

  const [isAdmin, setAdmin] = React.useState(false)
  const [user] = useAuthState(auth)

  React.useEffect(() => {
    console.log("user: ", user)
    if(user && isAdminFromNavBar) {
      setAdmin(true)
    } else {
      setAdmin(false)
    }
  }, [user, isAdminFromNavBar])

  return (
    <>
      <MainNavbar />
      <AdminPageHeader />
      {isAdmin ? (
        <div>
          <Container>
            <h3>Admin Portal</h3>
            <br />

            <AdminCard />
          </Container>
        </div>
      ) : (
        <div
          style={{
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Access denied. You do not have privilege to this.
        </div>
      )}
      <MainFooter />
    </>
  )
}

export default AdminPortal
