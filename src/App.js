import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Register from './Pages/Register';
import Menu from './Components/Menu';
import Home from './Pages/Home';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Results from './Pages/Results';


function App() {

    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);
    const [filter, setFilter] = useState({});
    const location = useLocation();

    const saveToken = (newToken) => {
        localStorage.setItem("authToken", newToken);
        setToken(newToken)
        navigate("/dashboard")
    }

    const userChange = () => {
        let authToken = localStorage.getItem("authToken")
        if (authToken) {
            setToken(authToken)
        }
        // do something if we dont have a token
    }

    const getUser = () => {
        if (token.length > 0) {
            axios({
                method: "get",
                url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/v1/user",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Access-Control-Allow-Credentials": true,
                    "Authorization": `Bearer ${token}`,
                }
            })
                .then(response => {
                    setUser(response.data.data[0])
                })
        }
    }

    const getRestaurants = () => {
        axios({
            method: "get",
            url: "https://laravel-library-austenshelton638243.codeanyapp.com/api/restaurants",
        })
            .then(response => {
                setRestaurants(response.data)
            })
    }

    const urlHelper = () => {
        let str = "https://laravel-library-austenshelton638243.codeanyapp.com/api/filter?";

        if ((filter.hasOwnProperty("cuisine") && filter.cuisine !== "Choose...") && (filter.hasOwnProperty("price") && filter.price  !== "Choose...")){
            return str + "cuisine=" + filter.cuisine + "&price=" + filter.price
        }
        if (filter.hasOwnProperty("cuisine") && filter.cuisine !== "Choose...") {
            return str + "cuisine=" + filter.cuisine
        }
        if (filter.hasOwnProperty("price") && filter.price !== "Choose...") {
            return str + "price=" + filter.price
        }
        else {
            return "https://laravel-library-austenshelton638243.codeanyapp.com/api/restaurants"
        }

    }

    const filterRestaurants = () => {
        axios({
            method: "get",
            url: urlHelper(),
        })
            .then(response => {
                setRestaurants(response.data)
                navigate('/results')
            })
    }

    useEffect(userChange, []);
    useEffect(getRestaurants, []);
    useEffect(getUser, [token]);

    return (
        <>
                <Menu
                    user={user}
                    setUser={setUser}
                    saveToken={saveToken}
                    token={token}
                    setToken={setToken} />
                <Routes>
                    <Route path="/register" element={<Register
                        user={user}
                        setUser={setUser}
                        saveToken={saveToken}
                        getUser={getUser}
                    />} />
                    <Route path="/dashboard" element={<Dashboard
                        user={user}
                        restaurants={restaurants}
                        setUser={setUser}
                        setRestaurants={setRestaurants}
                        getRestaurants={getRestaurants}
                        filterRestaurants={filterRestaurants}
                        location={location}
                        token={token}
                    />} />
                    <Route path="/results" element={<Results
                        restaurants={restaurants}
                        token={token}
                        setUser={setUser}
                        user={user}
                        location={location}
                        filterRestaurants={filterRestaurants}
                        getRestaurants={getRestaurants}
                    />} />
                    <Route path="/" element={<Home
                        user={user}
                        setUser={setUser}
                        filter={filter}
                        setFilter={setFilter}
                        filterRestaurants={filterRestaurants}
                        setRestaurants={setRestaurants}
                    />} />
                </Routes>
        </>
    );
}

export default App;
