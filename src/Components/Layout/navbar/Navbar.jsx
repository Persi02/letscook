import './style.scss'
import React from 'react'
import MenuIcon from '../../icons/MenuIcon'
import LogoIcon from '../../icons/LogoIcon'
import SearchBar from '../../General/searchBar/SearchBar'
import Button from '../../General/button/Button'
import NavbarItems from '../NavbarItems'


export default function Navbar() {
    const items = [{ label: "Home", link: "/" }, { label: "Recipe", link: "/recipe" }, { label: "Meal Planners", link: "/mealplanners" }, { label: "Courses", link: "/courses" }, { label: "About us", link: "/about" }, { label: "Contact", link: "/contact" }
    ]
    return (

        <div className='navbar'>
            <div className="wrap_logo">
                <div className='icon_menu'><MenuIcon /></div>
                <LogoIcon />
            </div>
            <nav className="nav">
                <NavbarItems items={items} className="nav_link" />
            </nav>
            <div className="menu_nav">
                <SearchBar />
                <Button className="btn_sing btn--orange " text="Login" />
                <Button className="btn_sing" text="Sing Up" />
            </div>
        </div>
    )
}
