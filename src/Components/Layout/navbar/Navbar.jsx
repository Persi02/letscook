import './style.scss'
import React, { useState } from 'react'
import MenuIcon from '../../icons/MenuIcon'
import LogoIcon from '../../icons/LogoIcon'
import SearchBar from '../../General/searchBar/SearchBar'
import Button from '../../General/button/Button'
import NavbarItems from '../NavbarItems'
import { Link, useNavigate } from 'react-router-dom'
import ProfilIcon from '../../icons/ProfilIcon'
import NotifIcon from '../../icons/NotifIcon'



export default function Navbar({ isLogged }) {
    const [isProfil, setIsProfil] = useState(false)
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate('/connexion')
    }

    const items = [{ label: "Home", link: "/" }, { label: "Recipe", link: "/recipe" }, { label: "Meal Planners", link: "/mealplanners" }, { label: "Courses", link: "/courses" }, { label: "About us", link: "/about" }, { label: "Contact", link: "/contact" }
    ]
    return (

        <header className='navbar'>
            <div className="wrap_logo">
                <div className='icon_menu'>
                    <MenuIcon />
                </div>
                <LogoIcon />
            </div>
            <nav className="nav">
                <NavbarItems items={items} className="nav_link" />
            </nav>
            <div className="menu_nav">
                <SearchBar />
                {isLogged && <Link to='/connexion' >
                    <Button className="btn_sing btn--orange " text="Login" />
                </Link>}
                {isLogged && <Link to='/inscription' >
                    <Button className="btn_sing" text="Sing Up" />
                </Link>}
                {!isLogged &&
                    <div className="wrap_profil">
                        {isProfil && <Link to='/profil'> <img src="" alt="" /></Link>}
                        {!isProfil && <Link to='/profil'><ProfilIcon /></Link>}
                    </div>}
                {!isLogged && <NotifIcon />}
                {!isLogged && <Button postUser={logOut} className="btn_sing" text="log out" />}

            </div>
        </header>
    )
}
