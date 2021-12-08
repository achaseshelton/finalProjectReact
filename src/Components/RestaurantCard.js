import React from 'react'
import { Card, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { removeFavorite, addToFavorite } from "../Utilities/favoriteHelper"

export default function RestaurantCard({ favorite, data, token, getRestaurants, filterRestaurants, location }) {   
    console.log(location) 
    return (
        <Col xs={12} sm={6} md={4}>
            <Card className="text-center m-2">
                <Card.Body>
                    {/* make the name be a target link that sends to the restaurant website */}
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.address}</Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{data.cuisine}</ListGroupItem>
                        <ListGroupItem>{data.price}</ListGroupItem>
                    </ListGroup>
                    {favorite ?
                        <Button variant="primary" onClick={() => removeFavorite(data.id, token, getRestaurants, filterRestaurants, location)}>Remove From Favorites</Button>
                        :
                        <Button variant="primary" onClick={() => addToFavorite(data.id, token, getRestaurants, filterRestaurants, location)}>Add to Favorites</Button>}
                </Card.Body>
            </Card>
        </Col>
    )
}
