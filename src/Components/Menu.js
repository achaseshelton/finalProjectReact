import axios from 'axios';
import React from 'react';
import { Navbar, Container, Form, Button } from 'react-bootstrap'
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
                "client_secret": "gIevDb6REGmvTLROmiprdePkOfPkn2tCK4YHcACr",
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
            <Navbar className="border border-dark border-3 border-rounded m-3">
                <Container>
                    <Navbar.Brand href="/">Title</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Link to='/register'>
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
        <Navbar className="border border-dark border-3 border-rounded m-5">
            <Container>
                <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to='/dashboard' className="m-3">
                        <>Dashboard</>
                    </Link>
                    <Navbar.Text>
                        Hello {props.user.data?.user_data?.name}!
                    </Navbar.Text>
                    <Button className="m-3" variant="primary" onClick={logout}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
