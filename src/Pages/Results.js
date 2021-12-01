import React from 'react'
import { Container, Row } from 'react-bootstrap'
import RestaurantCard from '../Components/RestaurantCard'

export default function Results(props) {
    //TO DO
    // Take the restaurant array saved from the search and map over it, for each restaurant in the array create a restaurant card giving the menu info.
    const displayRestaurants = () => {
        props.restaurants.map(restaurant => {
            console.log(restaurant)
            return <RestaurantCard
            name={restaurant.data.name}
            address={restaurant.data.address}
            cuisine={restaurant.data.cuisine}
            price={restaurant.data.price}
            />
        })
    }

    return (
        <Container className="border border-dark border-2">
            <Row className="text-center display-2 text-bold">{props.restaurants.length} Results</Row>
            <Row className="row-cols-2">{displayRestaurants}</Row>            
        </Container>
    )
}
