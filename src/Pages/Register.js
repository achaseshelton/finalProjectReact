import { Form, Button } from 'react-bootstrap';
import axios from 'axios'

export default function Register(props) {
    
    const handleChange = e => {
        props.setUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
            
        }))
        // console.log(props.customer)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(props.user.name.length > 8 &&
           props.user.email.length > 9 &&
           props.Controluser.password.length > 7) {
            axios.post('', {
                firstName: props.user.name,
                email: props.user.email,
                password: props.user.password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
           }
    }

    return (
        <Form className="border border-dark border-3 border-rounded m-3 p-4">
            <Form.Group className="mb-3">
                <Form.Label className="m-1">Full Name</Form.Label>
                <Form.Control className="m-1" type="name" id="name" placeholder="Full Name" value={props.user.name || ""} onChange={handleChange} required  />
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label className="m-1">Email</Form.Label>
                <Form.Control className="m-1" type="email" id="email" placeholder="Email Address" value={props.user.email || ""} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="m-1">Password</Form.Label>
                <Form.Control className="m-1" type="password" id="password" placeholder="Password" value={props.user.password || ""} onChange={handleChange} required />
            </Form.Group>
            <Button className="m-1" variant="primary" onClick={handleSubmit}>Register</Button>
        </Form>
    )
}
