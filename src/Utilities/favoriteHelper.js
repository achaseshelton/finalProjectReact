import axios from 'axios'

export const removeFavorite =( id, token, getUser) => {
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
            getUser();
        })
}
