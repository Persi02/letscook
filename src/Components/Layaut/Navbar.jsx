import './style.scss'
import React from 'react'
import MenuIcon from '../icons/MenuIcon'
import LogoIcon from '../icons/LogoIcon'
import SearchBar from '../General/searchBar/SearchBar'
import Button from '../General/button/Button'
import Down from '../icons/Down'

export default function Navbar() {
    return (

        <div className='navbar'>
            <div className="wrap_logo">
                <div className='icon_menu'><MenuIcon /></div>
                <LogoIcon />
            </div>
            <nav className="nav">
                <a href="#" className="nav_link">Home</a>
                <a href="#" className="nav_link">Recipe<Down /></a>
                <a href="#" className="nav_link">Meal Planners</a>
                <a href="#" className="nav_link">Courses</a>
                <a href="#" className="nav_link">About us</a>
                <a href="#" className="nav_link">Contact</a>
            </nav>
            <div className="menu_nav">
                <SearchBar />
                <Button className="btn_sing btn--orange " text="Login" />
                <Button className="btn_sing" text="Sing Up" />
            </div>
        </div>
    )
}
