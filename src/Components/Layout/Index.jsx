import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../../page/homePage/Homepage'
import About from '../../page/about/About'



export default function Index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/"
                    element={<Home />} />
                <Route path="/about"
                    element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}
