import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {

    const navigate = useNavigate();

    const getRestaurants = e => {
        axios({
            method: "get",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/restaurants",
    })
    .then(response => props.setRestaurants(response.data))
    navigate("/results")
}

    return (
        <Container>
            <Row>
                <Col className="col-4">Cuisine</Col>
                <Col className="col-4">Price</Col>
                <Col className="col-4 justify-content-center">
                    <Button className="m-1" variant="primary" onClick={getRestaurants}>Search!</Button>
                </Col>
            </Row>
        </Container>
    );
}
