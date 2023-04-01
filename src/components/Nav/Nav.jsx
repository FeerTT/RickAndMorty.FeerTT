import React, { Component } from 'react'
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom'
import "./nav.css"


export default function Nav ({onSearch}){
    return (
    <div className='navBar'>
        <Link to={"/about"}>
            <p className='navAbout'>About</p>
        </Link>
        <SearchBar onSearch={onSearch}>
        </SearchBar >
        <Link to={"/home"}>
            <p className='navHome'>Home</p>
        </Link>
        <Link to={"/favorites"}>
        <p className='navFavorito'>Favorites</p>
        </Link>
    </div>
    )
}



