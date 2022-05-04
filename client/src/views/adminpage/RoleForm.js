import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const RoleForm = ({setInput}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const formFields = [
        {
          'title': 'name',
          'method': setName,
        },
        {
          'title': 'email',
          'method': setEmail,
        },
        {
          'title': 'role',
          'method': setRole,
        }
      ]

    const handleSubmit = () => {
        if (name === '' || role === '' || email === '') {
          return
        }
    
        const admins = [...input]
        admins.push({
          'name': name,
          'role': role,
          'email': email
        })
    
        console.log(admins)
        setInput(admins)
      }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {formFields.map(field => (
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label
                        className="me-sm-2"
                        for="exampleEmail"
                    >
                        {field.title}
                    </Label>
                    <Input
                        id={field.title}
                        name={field.title}
                        placeholder={field.title}
                        type="text"
                        onChange={(e) => {
                        field.method(e.target.value)
                        console.log(e.target.value)
                        }}
                    />
                    </FormGroup>
                ))}
                
                <Button type="submit">
                    Add new role
                </Button>
            </Form>
        </>
    )
}

export default RoleForm