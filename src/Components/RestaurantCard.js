import React from 'react'
import axios from 'axios'
import { Card, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function RestaurantCard({ data, token, getUser }) {

    const addToFavorite = id => {
        axios({
            method: "post",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/v1/favorite",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Credentials": true,
                "Authorization": `Bearer ${token}`
            },
            data: { restaurant_id: id }
        })
            .then(response => {
                getUser();
            })
    }
    return (
        <Col>
            <Card className="text-center m-1">
                <Card.Body>
                    {/* make the name be a target link that sends to the restaurant website */}
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.address}</Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{data.cuisine}</ListGroupItem>
                        <ListGroupItem>{data.price}</ListGroupItem>
                    </ListGroup>
                    <Button variant="primary" onClick={() => addToFavorite(data.id)}>Add to Favorites</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
