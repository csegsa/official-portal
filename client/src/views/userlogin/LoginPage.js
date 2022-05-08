import React, { useEffect } from 'react'

import { useHistory, Redirect } from 'react-router-dom'
// reactstrap components
import { Button, Card, Container, Row, Col } from 'reactstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from '../../views/userlogin/Firebase'
import { auth, signInWithGoogle } from './Firebase'

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import backgroundImage from 'assets/img/csegsa/Academic.JPG'

const RegisterPage = () => {
  const [user, ,] = useAuthState(auth)
  const history = useHistory()

  useEffect(() => {
    console.log('user: ', user)
  }, [user])

  const login = () => {
    signInWithGoogle()
    history.goBack()
  }

  // const goBack = () => history.goBack()

  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    document.body.classList.add('register-page')
    return function cleanup() {
      document.body.classList.remove('register-page')
    }
  })

  return (
    <>
      {user != null && user.emailVerified ? (
        <Redirect to="/home" replace />
      ) : (
        <>
          <MainNavbar />
          <div
            className="page-header"
            style={{
              backgroundImage: 'url(' + backgroundImage + ')'
            }}
          >
            <div className="filter" />
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" lg="4">
                  <Card className="card-register ml-auto mr-auto" style={{ background: '#500000' }}>
                    <h3 className="title mx-auto">Welcome</h3>
                    <p className="title mx-auto">(only @tamu.edu domain)</p>
                    <div className="social-line text-center">
                      <Button
                        id={'google-login-button'}
                        className="btn-neutral btn-just-icon mr-1"
                        color="google"
                        // href="#pablo"
                        onClick={login}
                      >
                        <i className="fa fa-google-plus" />
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="footer register-footer text-center">
              <h6>© {new Date().getFullYear()}, CSEGSA, all rights reserved.</h6>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default RegisterPage
