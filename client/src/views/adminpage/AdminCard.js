import React, { useState } from 'react'
import { useEffect } from 'react';
import { CardGroup, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FormModal from './FormModal'
import csegsaApi from 'api/csegsaApi.js'
import { auth } from '../userlogin/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {getRoles} from './helper'

const AdminCard = () => {
  const [input, setInput] = useState([]);
  const [user, loading, error] = useAuthState(auth)
  const [reload, setReload] = useState(false);

  async function deleteRole(id) {
    console.log('making api call to check admin')
    const token = await auth.currentUser.getIdToken()
    csegsaApi
      .delete('/roles/' + id, { headers: { authorization: 'Bearer ' + token } })
      .then(res => {
        console.log(res.data)
        setInput(input.filter(item => item._id !== id))
      })
  }

  React.useEffect(async () => {
    if (user) {
      await getRoles(auth, csegsaApi, setInput)
    }
  }, [user])

  React.useEffect(async () => {
    if (reload) {
      console.log("supposed to reload now...")
      await getRoles(auth, csegsaApi, setInput)
      setReload(false)
    }
  }, [reload])

  const removeRole = async id => {
    console.log('Removing ' + id)
    await deleteRole(id)
  }

  return (
    <>
      <CardGroup>
        {input.map(role => (
          <div style={{
            'width': '33%',
            'marginRight': '2px'
          }}>
            <Card key={role.email}>
              <CardImg alt={role.description} src={role.src} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">{role.email}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {role.role}
                </CardSubtitle>
                {/* <CardText>
                    {admin.email}
                  </CardText> */}
                <Button color="danger" outline onClick={() => removeRole(role._id)}>
                  Remove
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </CardGroup>

      <FormModal 
        setReload={setReload}
      />
    </>
  )
}

export default AdminCard