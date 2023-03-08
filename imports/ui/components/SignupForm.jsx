import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import {Accounts} from 'meteor/accounts-base'

export function SignupForm() {
    const [fullname, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password2, setPassword2] = useState('')
    const [validationError, setValidationError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const createAccount = (e) => {
        e.preventDefault()
        if(password != password2) {
            setValidationError('Passwords don\'t match')
            return
        }
        Accounts.createUser({
            username,
            password,
            email,
            profile: {
                fullname
            }
        }, (err) => {
            if(err) {
                setValidationError(err.message);
            } else {
                setSuccessMessage('Account created successfully')
            }
        })
    }

    return (<>
        <Form className='py-4' onSubmit={createAccount}>
            <h2 className=''>Register for an account</h2>
            {validationError && <Alert variant='danger'>
                <span>{validationError}</span>
            </Alert>
            }
            {successMessage && <Alert variant='success'>
                <span>{successMessage}</span>
            </Alert>
            }
            <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text' required placeholder='i.e John Doe' onChange={(e) => setFullName(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' required placeholder='i.e johndoe' onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' required placeholder='i.e johndoe@example.com' onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' required placeholder='xxxxxxxxx' onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <br />
            <Form.Group>
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type='password' required placeholder='xxxxxxxxx' onChange={(e) => setPassword2(e.target.value)} />
            </Form.Group>
            <br />
            <br />
            <Form.Control type='submit' value='create account' />
        </Form>
    </>
    )
}
