import React, { useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import RestaurantCard from '../Components/RestaurantCard'

export default function Dashboard(props) {

    const findFavorites = () => {
        axios({
            method: "get",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/restaurants",
        })
            .then(response => {
                props.setRestaurants(response.data)
            })
    }

    useEffect(findFavorites, [])

    return (
        <>
            <Row className="text-center display-5 text-bolder m-2">
                    <Col>Your Favorite Restaurants</Col>
                </Row>                
                <Row className="justify-content-center m-3">
                    {props.restaurants.map((restaurant, index) => {
                        let userSaved = restaurant.favorites.find(f => f.user_id === props.user.id)
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
        </>
    )
}
