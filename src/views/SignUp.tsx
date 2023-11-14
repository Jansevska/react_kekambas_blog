import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserType from '../types/auth'

type Props = {}

export default function SignUp({ }: Props) {

    const [userFormData, setUserFormData] = useState<Partial<UserType>>(
        {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    )

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        console.log(e.target.name, e.target.value);
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }

    return (
        <>
            <h1 className="text-center">Sign Up</h1>
            <Card className='mt-3'>
                <Card.Body>
                    <Form>
                        <Form.Label htmlFor='firstName'>First Name</Form.Label>
                        <Form.Control value={userFormData.firstName} name='firstName' onChange={handleInputChange} />

                        <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                        <Form.Control value={userFormData.lastName} name='lastName' onChange={handleInputChange}  />

                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control value={userFormData.email} name='email' type='email' onChange={handleInputChange}  />

                        <Form.Label htmlFor='username'>Username</Form.Label>
                        <Form.Control value={userFormData.username} name='username' onChange={handleInputChange} />

                        <Form.Label htmlFor='password'>Password</Form.Label>
                        <Form.Control value={userFormData.password} name='password' type='password' onChange={handleInputChange} />

                        <Form.Label htmlFor='confirmPass'>Confirm Password</Form.Label>
                        <Form.Control value={userFormData.confirmPassword} name='confirmPass' type='password' onChange={handleInputChange} />

                        <Button type="submit" variant='outline-dark' className="w-100 mt-3">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}