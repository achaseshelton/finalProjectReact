import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home(props) {

    // const navigate = useNavigate();


    return (
        <Container>
            <Row>
                <Col className="col-4">Cuisine</Col>
                <Col className="col-4">Price</Col>
                <Col className="col-4 justify-content-center">
                    <Button as={Link} to="/results" className="m-1" variant="primary">Search!</Button>
                </Col>
            </Row>
        </Container>
    );
}
