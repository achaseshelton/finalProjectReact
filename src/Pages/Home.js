import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {

    const navigate = useNavigate();
    const getRandomRestaurants = () => {
        axios({
            method: "get",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/hungry",
        })
            .then(response => {
                console.log(response.data)
                props.setRestaurants(response.data)
                navigate('/results')
            })
    }

    const handleChange = e => {
        props.setFilter(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <Container>
            <Form>
                <Row>
                    <Col className="col-5">
                        <Form.Label>Price</Form.Label>
                        <Form.Select name="price" value={props.filter.price || ""} onChange={handleChange}>
                            <option value="Choose...">Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Col>
                    <Col className="col-5">
                        <Form.Label>Cuisine</Form.Label>
                        <Form.Select name="cuisine" value={props.filter.cuisine || ""} onChange={handleChange}>
                            <option value="Choose...">Choose...</option>
                            <option value="Thai">Thai</option>
                            <option value="Indian">Indian</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Japanese">Japanese</option>
                            <option value="French">French</option>
                            <option value="African">African</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Cuban">Cuban</option>
                            <option value="Peruvian">Peruvian</option>
                            <option value="American">American</option>
                            <option value="Southern">Southern</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Steakhouse">Steakhouse</option>
                        </Form.Select>
                    </Col>
                    <Col className="col-1 m-1 align-items-bottom">
                        <Button onClick={props.filterRestaurants} size="lg" variant="primary">Search!</Button>
                    </Col>
                </Row>
            </Form>
            <Row className="justify-content-center">
                <Col className="col-4 m-3">
                    <Button variant="primary" size="lg" onClick={getRandomRestaurants}>I'm Feeling Hungry</Button>
                </Col>
            </Row>
        </Container>
    );
}
