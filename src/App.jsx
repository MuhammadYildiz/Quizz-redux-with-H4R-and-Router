import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Admin from "./components/Admin"
import Quizz from "./components/Quizz"
import Navbar from "./Navbar"

function App() {

    return (
        <div className="flex">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/quizz" element={<Quizz />} />
            </Routes>
        </div>
    )
}

export default App
