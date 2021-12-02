import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {

    const navigate = useNavigate();
    const handleChange = e => {
        props.setUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,

        }))
        // console.log(props.customer)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (props.user.register_name.length > 8 &&
            props.user.register_email.length > 9 &&
            props.user.register_password.length > 7) {
            axios({
                method: 'post',
                url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/register",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Access-Control-Allow-Credentials": true,
                },
                data: {
                    name: props.user.register_name,
                    email: props.user.register_email,
                    password: props.user.register_password
                }
            })
            .then(r => {
                props.saveToken(r.data.access_token.token)
                navigate("/dashboard")
                props.getUser()
            })
        }
    }

    return (
        <Form className="border border-dark border-3 border-rounded m-3 p-2">
            <Form.Group className="mb-3">
                <Form.Label className="m-1">Full Name</Form.Label>
                <Form.Control className="m-1" type="name" id="register_name" placeholder="Full Name" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="m-1">Email</Form.Label>
                <Form.Control className="m-1" type="email" id="register_email" placeholder="Email Address" onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="m-1">Password</Form.Label>
                <Form.Control className="m-1" type="password" id="register_password" placeholder="Password" onChange={handleChange} required />
            </Form.Group>
            <Button className="m-1" variant="primary" onClick={handleSubmit}>Register</Button>
        </Form>
    )
}
