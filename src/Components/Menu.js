import axios from 'axios';
import React from 'react';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

export default function Menu(props) {
    const navigate = useNavigate();

    const login = e => {
        axios({
            method: "post",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/oauth/token",
            data: {
                "grant_type": "password",
                "client_id": 2,
                "client_secret": "S6wgXyPP75kXBRg27PFedabreqqA8U6VqVcUS050",
                "username": props.user.email,
                "password": props.user.password,
                "scope": "",
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Credentials": true,
                //"Authorization": `Bearer ${token}`,
            },
        })
            .then(r => {
                props.saveToken(r.data.access_token)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const logout = e => {
        axios({
            method: "get",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/v1/logout",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Credentials": true,
                "Authorization": `Bearer ${props.token}`,
            }

        })
            .then(r => {
                console.log("token deleted")
                props.setToken("")
                props.setUser({})
                localStorage.setItem("authToken", "")
                navigate("/")
            })
    }

    const handleChange = e => {
        props.setUser(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    if (props.token.length === 0) {
        return (
            <Navbar className="m-5">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bolder h4">Let's Eat</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to='/register' className="fw-bold text-dark">
                            <>Register</>
                        </Link>
                        <Form.Control
                            className="m-1"
                            type="text"
                            placeholder="Email"
                            id="email"
                            onChange={handleChange} required />
                        <Form.Control
                            className="m-1"
                            placeholder="Password"
                            id="password"
                            type='password'
                            onChange={handleChange} required />
                        <Button className="m-1" variant="primary" onClick={login}>Sign In</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
    return (
        <Navbar className="m-5">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bolder display-3">Let's Eat</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                    <Nav.Link as={Link} to='/dashboard' className="m-3 fw-bold text-dark">
                        <>Dashboard</>
                    </Nav.Link>
                    </Nav>
                    <Navbar.Text className="fw-bold text-dark">
                        Hello {props.user?.name}!
                    </Navbar.Text>
                    <Button className="m-3" variant="primary" onClick={logout}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
