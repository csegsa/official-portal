import React, { useState } from 'react'
import { useEffect } from 'react';
import { CardGroup, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FormModal from './FormModal'
import csegsaApi from 'api/csegsaApi.js'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {getRoles} from './helper'

function AdminCard() {
  const [input, setInput] = useState([]);
  const [user, loading, error] = useAuthState(auth)

  async function deleteRole(email) {
    console.log("making api call to check admin")
      const token = await auth.currentUser.getIdToken()
      csegsaApi.delete('/roles', {
        email: email
      }, { headers: { authorization: 'Bearer ' + token } })
      .then(res => {
        console.log(res.data)
        setInput(input.filter(item => item.email !== email));
      })
  }

  React.useEffect(async () => {
    if (user) {
      await getRoles(auth, csegsaApi, setInput)
    }
  }, [user])

  const removeAdmin = async (email) => {
    console.log("Removing " + email)
    // const updated = [...input];
    // setInput(input.filter(item => item.email !== email));
    await deleteRole(email)
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
                  {admin.email}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {admin.role}
                </CardSubtitle>
                {/* <CardText>
                  {admin.email}
                </CardText> */}
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