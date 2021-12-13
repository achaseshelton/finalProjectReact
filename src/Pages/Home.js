import React from 'react'
import axios from 'axios'
import { Row, Col, Button, Form, Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {

    const navigate = useNavigate();
    const getRandomRestaurants = () => {
        axios({
            method: "get",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/hungry",
        })
            .then(response => {
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
        <>
            <Row>
                <Col className="col-4"></Col>
                <Col className="col-4">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/wings2.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption className="text-center fw-bold">
                                <h3>When you need to find a place to eat,</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/tacos2.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption className="text-center fw-bold">
                                <h3>We're here to help!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./img/sushi2.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption className="text-center fw-bolder">
                                <h1>LetsEat</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="col-4"></Col>
            </Row>
            <Form>
                <Row className="m-2">
                    <Col className="col-5 ml-2">
                        <Form.Label className="fw-bold h3">Price</Form.Label>
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
                        <Form.Label className="fw-bold h3">Cuisine</Form.Label>
                        <Form.Select name="cuisine" value={props.filter.cuisine || ""} onChange={handleChange}>
                            <option value="Choose...">Choose...</option>
                            <option value="Thai">Thai</option>
                            <option value="Indian">Indian</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Japanese">Japanese</option>
                            <option value="French">French</option>
                            <option value="Brunch">Brunch</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Cuban">Cuban</option>
                            <option value="BBQ">BBQ</option>
                            <option value="American">American</option>
                            <option value="Southern">Southern</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Steakhouse">Steakhouse</option>
                            <option value="Vietnamese">Vietnamese</option>
                            <option value="Korean">Korean</option>
                            <option value="Mediterranean">Mediterranean</option>
                        </Form.Select>
                    </Col>
                    <Col className="col-1 m-1 pt-4">
                        <Button className="m-2" onClick={props.filterRestaurants} size="lg" variant="primary">Search!</Button>
                    </Col>
                </Row>
            </Form>
            <Row className="justify-content-center">
                <Col className="col-4>"></Col>
                <Col className="col-4 text-center p-3">
                    <Button variant="primary" size="lg" onClick={getRandomRestaurants}>I'm Feeling Hungry</Button>
                </Col>
                <Col className="col-4"></Col>
            </Row>
        </>
    );
}
