import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestaurantCard from '../Components/RestaurantCard'

export default function Results(props) {
    //TO DO
    // Take the restaurant array saved from the search and map over it, for each restaurant in the array create a restaurant card giving the menu info.
    // const displayRestaurants = () => {
    //     props.restaurants.map(restaurant => {
    //         console.log(restaurant)
    //         return <RestaurantCard
    //         data = {restaurant.data}
    //         />
    //     })
    // }

    return (
        <Container className="border border-dark border-3">
            <Row className="text-center display-2 text-bold m-1">
                <Col>{props.restaurants.length} Results</Col>
            </Row>
            <Row className="row-cols-2 justify-content-center">
                {props.restaurants.map((restaurant, index) => <RestaurantCard key={index} data={restaurant} getUser={props.getUser} token={props.token} />)}
            </Row>
        </Container>
    )
}
