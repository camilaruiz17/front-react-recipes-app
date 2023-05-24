import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../views/home/Home";
import DetailsViews from "../views/details/DetailsViews"
import Profile from "../views/profile/Profile";
import Search from "../views/search/Search";
import Login from "../views/login/Login";
import NavBars from "../components/nav-bar/NavBar";
import Register from "../views/register/Register";
import PerfilViews from "../components/profile-user/Profile-user";
import Footer from "../components/footer/Footer";


const Router = () => {


    return (
        <BrowserRouter>
        <NavBars/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home  />} />
            <Route path="/details" element={<DetailsViews/>} />
            <Route path="/profile" element={<PerfilViews />} />
            <Route path="/search/:busqueda" element={<Search />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        < Footer/>
        </BrowserRouter>
    );
    };
    
    export default Router;
