import React from 'react'
import { Card, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function RestaurantCard(props) {
    return (
        <Col>
            <Card className="text-center">
                <Card.Body>
                    {/* make the name be a target link that sends to the restaurant website */}
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.address}</Card.Text> 
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{props.cuisine}</ListGroupItem>
                        <ListGroupItem>{props.price}</ListGroupItem>
                    </ListGroup>
                    <Button variant="primary">Add to Favorites</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
