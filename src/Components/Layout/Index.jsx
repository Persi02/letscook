import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../../page/homePage/Homepage'
import About from '../../page/about/About'
import Contact from '../../page/contact/Contact'
import Recipe from '../../page/recipe/Recipe'
import MeanPlanners from '../../page/meanPlanners/MeanPlanners'
import Courses from '../../page/courses/Courses'



export default function Index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/"
                    element={<Home />} />
                <Route path="/about"
                    element={<About />} />
                <Route path="/contact"
                    element={<Contact />} />
                <Route path="/recipe"
                    element={<Recipe />} />
                <Route path="/mealplanners"
                    element={<MeanPlanners />} />
                <Route path="/courses"
                    element={<Courses />} />
            </Routes>
            <Footer />
        </>
    )
}
