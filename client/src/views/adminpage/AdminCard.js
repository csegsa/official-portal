import React, { useState } from 'react'
import { useEffect } from 'react';
import { CardGroup, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FormModal from './FormModal'
import csegsaApi from 'api/csegsaApi.js'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const admins = [
  {
    'src' : "https://picsum.photos/318/180",
    'description': "Card image cap",
    'name': "Farabi",
    'role': "client",
    'email': "farabi1@tamu.edu"
  },
  {
    'src' : "https://picsum.photos/318/180",
    'description': "Card image cap",
    'name': "Farabi",
    'role': "client",
    'email': "farabi2@tamu.edu"
  },
  {
    'src' : "https://picsum.photos/318/180",
    'description': "Card image cap",
    'name': "Farabi",
    'role': "client",
    'email': "farabi3@tamu.edu"
  }
]

function AdminCard() {
  const [input, setInput] = useState([]);
  const [user, loading, error] = useAuthState(auth)

  // useEffect(() => {
  //   if (input.length === 0) {
  //     console.log("reseting input")
  //     setInput(admins)
  //   }
  // }, []) 

  React.useEffect(() => {
    csegsaApi
      .get('/events')
      .then(res => {
        console.log(res.data)
        setInput(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const removeAdmin = (email) => {
    console.log("Removing " + email)
    // const updated = [...input];
    setInput(input.filter(item => item.email !== email));
  }

  return (
    <>
      <CardGroup>
        {input.map(admin => (
            <Card key={admin.email}>
              <CardImg
                alt={admin.description}
                src={admin.src}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {admin.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {admin.role}
                </CardSubtitle>
                <CardText>
                  {admin.email}
                </CardText>
                <Button color="danger" outline onClick={() => removeAdmin(admin.email)}>
                  Remove
                </Button>
              </CardBody>
            </Card>
          )
        )}
      </CardGroup>

      <FormModal setInput={setInput}/>
    </>
  )
}

export default AdminCard