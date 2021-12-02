import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function FavoriteCard({ data }) {
    return (
        <Col>
            <Card className="text-center m-1">
                <Card.Body>
                    {/* make the name be a target link that sends to the restaurant website */}
                    <Card.Title className="m-2">{data.name}</Card.Title>
                    <Card.Text className="m-2">{data.address}</Card.Text>
                    <Card.Text className="m-2">{data.cuisine}</Card.Text>
                    <Card.Text className="m-2">{data.price}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}