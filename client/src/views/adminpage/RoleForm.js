import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { auth } from '../userlogin/Firebase'
import csegsaApi from 'api/csegsaApi.js'
import { getRoles } from './helper'

// eslint-disable-next-line react/prop-types
const RoleForm = ({ setInput }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const formFields = [
    {
      title: 'name',
      method: setName
    },
    {
      title: 'email',
      method: setEmail
    },
    {
      title: 'role',
      method: setRole
    }
  ]

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('submitting')
    if (name === '' || role === '' || email === '') {
      return
    }
    console.log('inserting new role')
    await addRole()
    await getRoles(auth, csegsaApi, setInput)
  }

  async function addRole() {
    console.log('making api call to add admin')
    const token = await auth.currentUser.getIdToken()
    csegsaApi
      .post(
        '/roles',
        {
          email: email,
          description: name,
          role: role
        },
        { headers: { authorization: 'Bearer ' + token } }
      )
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <FormGroup key={index} className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="exampleEmail">
              {field.title}
            </Label>
            <Input
              id={field.title}
              name={field.title}
              placeholder={field.title}
              type="text"
              onChange={e => {
                field.method(e.target.value)
                console.log(e.target.value)
              }}
            />
          </FormGroup>
        ))}

        <Button type="submit">Add new role</Button>
      </Form>
    </>
  )
}

export default RoleForm