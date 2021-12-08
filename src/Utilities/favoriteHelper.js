import axios from 'axios'

export const removeFavorite = (id, token, getRestaurants, filterRestaurants, location) => {
    console.log(location)
    axios({
        method: "delete",
        url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/v1/remove",
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
            if (location.pathname === "/results") {
                filterRestaurants()
            } else {
                getRestaurants()
            }
        })
}

export const addToFavorite = (id, token, getRestaurants, filterRestaurants, location) => {
    console.log(location)
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
            if (location.pathname === "/results") {
                filterRestaurants()
            } else {
                getRestaurants()
            }
        })
}
