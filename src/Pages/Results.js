import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestaurantCard from '../Components/RestaurantCard'

export default function Results(props) {
    console.log(props)
    return (
        <Container className="border border-dark border-3">
            <Row className="text-center display-2 text-bold m-1">
                {props.restaurants.length > 1 ?
                <Col>{props.restaurants.length} Results</Col>
                :
                <Col>{props.restaurants.length} Result</Col>}
            </Row>
            <Row className="row-cols-2 justify-content-center">
                {/* Need to check if restaurant id is in the user favorites, if not do a restaurant card, if it does appear in the favorites add a favorite card */}
                {/* do i have a restaurant id that is equal to an id in my favorites */}
                {props.restaurants.map((restaurant, index) => {
                    let userSaved = restaurant.favorites.find(f => f.user_id === props.user.id)
                    console.log(userSaved)
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
        </Container>
    )
}
