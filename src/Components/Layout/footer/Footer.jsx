import React from 'react'
import './style.scss'
import FacebookIcon from '../../icons/FacebookIcon'
import InstaIcon from '../../icons/InstaIcon'
import LogoIcon from '../../icons/LogoIcon'
import CoeurIcon from '../../icons/CoeurIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import Input from '../../General/input/Input'
import Button from '../../General/button/Button'
import NavbarItems from '../NavbarItems'


export default function Footer() {
    const menuFooter = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Recipes",
            link: "/recipes"
        }
        ,
        {
            label: "About us",
            link: "/about"
        }
        ,
        {
            label: "Privacy Policy",
            link: "/privacy"
        }
        ,
        {
            label: "Terms of service",
            link: "/termsofservice"
        }
        ,
        {
            label: "sitemap",
            link: "/sitemap"
        }
        ,
        {
            label: "Contact us",
            link: "/contact"
        }
        ,
        {
            label: "Blog",
            link: "/blog"
        }
        ,
        {
            label: "Career",
            link: "/career"
        }
        ,
        {
            label: "Dinner",
            link: "/dinner"
        }
        ,
        {
            label: "Meals",
            link: "/meals"
        }
        ,
        {
            label: "Ingredients",
            link: "/ingredients"
        }
        ,
        {
            label: "Product vetting",
            link: "/product"
        }
        ,
        {
            label: "Occasions",
            link: "/occasions"
        }
        ,
        {
            label: "KItchen Tips",
            link: "/kitchen"
        }
        ,
        {
            label: "News",
            link: "/news"
        }
        ,
        {
            label: "Feature",
            link: "/feature"
        }
        ,
        {
            label: "Home",
            link: "/"
        }
        ,
        {
            label: "Home",
            link: "/"
        }

    ]

    return (
        <footer>
            <div className="wrap">
                <div className='wrap_footer'>
                    <div className="contact_footer">
                        <div className="box_rsociaux">
                            <h4>Story Connected</h4>
                            <div className="card_rsociaux">
                                <FacebookIcon />
                                <InstaIcon />
                                <CoeurIcon />
                                <TwitterIcon />
                            </div>
                        </div>
                        <div className="newsletter_footer">
                            <h4>Subscribe to our Newsetter</h4>
                            <Input type="text" placeholder="E-mail" />
                            <Button className="btn_sing  btn--orange " text="Subscribe" />
                        </div>
                    </div>
                    <div className="menus_footer ">
                        <NavbarItems items={menuFooter} className="menu_footer" />
                    </div>
                    <div className="logo_footer">
                        <LogoIcon />
                    </div>
                </div>
            </div>
        </footer>
    )
}
