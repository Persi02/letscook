import React, { useEffect, useState } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../../page/homePage/Homepage'
import About from '../../page/about/About'
import Contact from '../../page/contact/Contact'
import Recipe from '../../page/recipe/Recipe'
import MeanPlanners from '../../page/meanPlanners/MeanPlanners'
import Courses from '../../page/courses/Courses'
import Inscription from '../../page/inscription/Inscription'
import Connexion from '../../page/connexion/Connexion'



export default function Index() {
    const [isLayout, setIsLayout] = useState(true);
    const [isLogged, setIsLogged] = useState(true);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [])

    return (

        <>
            <Navbar isLogged={isLogged} setIslogged={setIsLogged} />
            <Routes>
                <Route path="/"
                    element={<Home setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/about"
                    element={<About setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/contact"
                    element={<Contact setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/recipe"
                    element={<Recipe setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/mealplanners"
                    element={<MeanPlanners setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/courses"
                    element={<Courses setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/inscription"
                    element={<Inscription setIsLayout={setIsLayout} isLayout={isLayout} setIsLogged={setIsLogged} />} />
                <Route path="/connexion"
                    element={<Connexion setIsLayout={setIsLayout} isLayout={isLayout} setIsLogged={setIsLogged} />} />
            </Routes>
            {isLayout && <Footer />}
        </>


    )
}
