import React, { useState } from 'react'
import { 
  Button, Form, FormGroup, Label, Input, 
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import { auth } from '../userlogin/Firebase'
import csegsaApi from 'api/csegsaApi.js'

// eslint-disable-next-line react/prop-types
const RoleForm = ({ setReload, toggle }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [dropdown, setDropdown] = useState(false)

  const formFields = [
    {
      title: 'name',
      method: setName
    },
    {
      title: 'email',
      method: setEmail
    }
  ]

  const toggleDropdown = () => {
    setDropdown(!dropdown)
    // console.log("item click?")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('submitting')
    if (name === '' || role === '' || email === '') {
      toggle()
      return
    }
    console.log('inserting new role')
    await addRole()
    toggle()
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
        setReload(true)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {formFields.map(field => (
          <FormGroup className="mb-2 me-sm-2 mb-sm-0" key={field.title}>
            <Label
              className="me-sm-2"
              for="exampleEmail"
              key={field.title}
            >
                {field.title}
            </Label>
            <Input
              key={field.title}
              id={field.title}
              name={field.title}
              placeholder={field.title}
              type="text"
              onChange={(e) => {field.method(e.target.value)}}
            />
          </FormGroup>
        ))}

        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
                className="me-sm-2"
                for="exampleEmail"
            >
                Role:
            </Label>
            <Dropdown isOpen={dropdown} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    {role === '' ? "Availabel roles" : role}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem key="admin" onClick={() => setRole("Admin")} dropDownValue="Admin">Admin</DropdownItem>
                    <DropdownItem key="coordinator" onClick={() => setRole("Coordinator")} dropDownValue="Coordinator">Coordinator</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </FormGroup>

        <Button type="submit" style={{'float':'right'}}>Add new role</Button>
      </Form>
    </>
  )
}

export default RoleForm
