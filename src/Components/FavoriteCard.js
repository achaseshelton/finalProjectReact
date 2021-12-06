import React from 'react'
import axios from 'axios'
import { Card, Col, Button } from 'react-bootstrap'

export default function FavoriteCard({ data, token, getUser }) {

    
    return (
        <Col>
            <Card className="text-center m-2">
                <Card.Body>
                    {/* make the name be a target link that sends to the restaurant website */}
                    <Card.Title className="m-2">{data.restaurant.name}</Card.Title>
                    <Card.Text className="m-2">{data.restaurant.address}</Card.Text>
                    <Card.Text className="m-2">{data.restaurant.cuisine}</Card.Text>
                    <Card.Text className="m-2">{data.restaurant.price}</Card.Text>
                    <Button className="m-2" variant="primary" onClick={() => removeFavorite(data.id)}>Remove Favorite</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}