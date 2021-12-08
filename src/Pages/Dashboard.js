import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import RestaurantCard from '../Components/RestaurantCard'

export default function Dashboard(props) {
    console.log(props)
    // Should I make a new call and get favorite restaurants and them take response and set state, then map over creating cards?
    // Or should I just make a call and then map over that response to show favorites?
    return (
        <>
            <Row className="text-center display-2 text-bolder m-2">
                <Col>Welcome {props.user?.name}</Col>
            </Row>
            <Container className="border border-dark border-3">
                <Row className="text-center display-5 text-bolder m-2">
                    <Col>Favorite Restaurants</Col>
                </Row>
                <Row className="row-cols-2 justify-content-center">
                    {props.restaurants.map((restaurant, index) => {
                        let userSaved = restaurant.favorites.find(f => f.user_id === props.user.id)
                        console.log(userSaved)
                        if (userSaved) {
                            return <RestaurantCard
                            key={index}
                            data={restaurant}
                            getRestaurants={props.getRestaurants}
                            filterRestaurants={props.filterRestaurants}
                            token={props.token}
                            location={props.location}
                            favorite={userSaved} />
                        }
                    })}
                </Row>
            </Container>
        </>
    )
}
