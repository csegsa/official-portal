import React from 'react'
// reactstrap components
import { Container } from 'reactstrap';
// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import AdminPageHeader from 'components/Headers/AdminPageHeader'
import MainFooter from 'components/Footers/MainFooter'
import { Link } from 'react-router-dom'
import AdminCard from './AdminCard';

function AdminPortal() {
    document.documentElement.classList.remove('nav-open')
    React.useEffect(() => {
      document.body.classList.add('profile-page')
      return function cleanup() {
        document.body.classList.remove('profile-page')
      }
    })
  
    return (
      <>
        <MainNavbar />
        <AdminPageHeader />
        <div>
            <Container>
                <h3>Admin Portal</h3>
                <br />

            this is the admin portal
            <AdminCard />
            </Container>
        </div>
        <MainFooter />
      </>
    )
  }
  
  export default AdminPortal