import React from 'react'

import { useHistory } from 'react-router-dom'
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from 'reactstrap'

// core components
import MainNavbar from 'components/Navbars/MainNavbar.js'
import backgroundImage from 'assets/img/csegsa/Academic.JPG'

import { auth, signInWithGoogle } from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function RegisterPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')
  // const [user, setUser] = React.useState("");

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  const history = useHistory()

  const handleLoginWithEmailAndPassword = () => {
    clearErrors()
    signInWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   // Signed in
      //   const user = userCredential.user;
      //   setUser(user);
      //   // ...
      // })
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
            setEmailError(err.message)
            break
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break
          case 'auth/wrong-password':
            setPasswordError(err.message)
            break
        }
      })

    history.goBack()
  }

  const login = () => {
    signInWithGoogle()
    // Redirect("/home");
    // history.replace("/home");
    history.goBack()
  }

  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    document.body.classList.add('register-page')
    return function cleanup() {
      document.body.classList.remove('register-page')
    }
  })
  return (
    <>
      <MainNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: 'url(' + backgroundImage + ')'
        }}
      >
        <div className="filter" />
        <Container >
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto" style={{'background': '#500000'}}>
                <h3 className="title mx-auto">Welcome</h3>
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
  )
}

export default RegisterPage
