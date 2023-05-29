
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "../views/home/Home";
import DetailsViews from "../views/details/DetailsViews"
import Search from "../views/search/Search";
import Login from "../views/login/Login";
import NavBars from "../components/nav-bar/NavBar";
import Register from "../views/register/Register";
import Profile from "../views/profile/Profile";
import Footer from "../components/footer/Footer";
import CreateRecipes from "../views/Create-recipes/Create-recipes";



const Router = () => {
    const [token, setToken] = useState(null)
    useEffect(() => {
    setToken(localStorage.getItem("token"))
    console.log('TOKEN', localStorage.getItem("token"))
    }, [])


    return (
        <BrowserRouter>
        <NavBars/>
        <Routes>
            <Route path="/login/:redirectTo" element={<Login />} />
            <Route path="/" element={<Home  />} />
            <Route path="/details" element={<DetailsViews/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search/:busqueda" element={<Search />} />
            <Route path="/register/:redirectTo" element={<Register />} />
            <Route path="/create" element={<CreateRecipes />} />    
        </Routes>
        < Footer/>
        </BrowserRouter>
    );
    };
    
    export default Router;
