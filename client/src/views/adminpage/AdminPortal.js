import React from 'react'
// reactstrap components
import { Container } from 'reactstrap';
// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import AdminPageHeader from 'components/Headers/AdminPageHeader'
import MainFooter from 'components/Footers/MainFooter'
import AdminCard from './AdminCard';
import { auth } from '../../views/userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import csegsaApi from 'api/csegsaApi.js'

const AdminPortal = () => {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
      document.body.classList.add('profile-page')
      return function cleanup() {
        document.body.classList.remove('profile-page')
      }
    })

    const [isAdmin, setAdmin] = React.useState(false)
    const [user] = useAuthState(auth)

    async function getAdmin() {
        console.log("making api call to check admin in Protected Route")
        const token = await auth.currentUser.getIdToken()
        csegsaApi.get('/roles' + '?email=' + user.email, { headers: { authorization: 'Bearer ' + token } })
        .then(res => {
            console.log(res.data)
            if (res.data.role === 'admin') {
                console.log("person is admin")
                setAdmin(true)
            }
        })
    }

    React.useEffect(() => {
        if (user) {
            getAdmin()
        } else {
            if (isAdmin) {
                setAdmin(false)
            }
        }
    }, [user])
  
    return (
      <>
        <MainNavbar />
        <AdminPageHeader />
        {isAdmin ? 
            <div>
                <Container>
                    <h3>Admin Portal</h3>
                    <br />

                    <AdminCard />
                </Container>
            </div>
            :
            <div style={{
                'fontWeight': 'bold',
                'textAlign': 'center'
            }}>
                Access denied. You do not have privilege to this.
            </div>
        }
        <MainFooter />
      </>
    )
  }
  
  export default AdminPortal