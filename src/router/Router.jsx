import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../views/home/Home";
import DetailsViews from "../views/details/DetailsViews"
import Profile from "../views/profile/Profile";
import Search from "../views/search/Search";
import Login from "../views/login/Login";
import NavBars from "../components/nav-bar/NavBar";
import Register from "../views/register/Register";


const Router = () => {


    return (
        <BrowserRouter>
        <NavBars/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home  />} />
            <Route path="/details" element={<DetailsViews/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search/:busqueda" element={<Search />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>
    );
    };
    
    export default Router;
