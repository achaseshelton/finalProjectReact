import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestaurantCard from '../Components/RestaurantCard'

export default function Results(props) {
    return (
            <div className="pb-3 mb-5">
                <Row className="text-center display-2 text-bold m-1">
                    {props.restaurants.length > 1 ?
                        <Col>{props.restaurants.length} Results</Col>
                        :
                        <Col>{props.restaurants.length} Result</Col>}
                </Row>
                <Row className="row-cols-xs-1 row-cols-md-3 justify-content-center">
                    {props.restaurants.map((restaurant, index) => {
                        let userSaved = restaurant.favorites.find(f => f.user_id === props.user.id)
                        return <RestaurantCard
                            key={index}
                            data={restaurant}
                            getRestaurants={props.getRestaurants}
                            token={props.token}
                            favorite={userSaved}
                            location={props.location}
                            filterRestaurants={props.filterRestaurants} />
                    })}
                </Row>
                <Row>
                <Col className="col-4>"></Col>
                <Col className="col-4 text-center p-3">
                    <Button as={Link} to="/" variant="primary" size="lg">Search Again</Button>
                </Col>
                <Col className="col-4"></Col>
                </Row>
            </div>
    )
}
