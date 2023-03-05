import React, { useState } from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
const activeClassName = "bg-white text-black w-[60%]  sm:w-[30%]  hover:bg-white";
export default function Navbar() {
    const location = useLocation();
    const homeActive = location.pathname === "/";
    const adminActive = location.pathname === "/admin";
    const quizzActive = location.pathname === "/quizz";
    const [burger, setburger] = useState(true)

    return (
        <div className={`flex   ${!burger ? "fixed": ""}`}>
            <div
                className={`bg-cyan-900 min-h-screen w-full fixed flex flex-col justify-center items-center duration-500 ease-out ${burger ? "-translate-x-[2000px] duration-1000 ease-in-out " : ""}`}>
                <NavLink to="/"
                    onClick={() => setburger(!burger)}
                    className={` text-center py-3 mt-8 hover:bg-green-500 mx-3 text-3xl 
                ${homeActive ? activeClassName : "bg-red-800 text-white w-[60%] sm:w-[30%] "} `}
                >
                    Home
                </NavLink>
                <NavLink to="admin"
                    onClick={() => setburger(!burger)}
                    className={` text-center py-3 mt-8 hover:bg-green-500 mx-3 text-3xl 
                ${adminActive ? activeClassName : "bg-red-800 text-white w-[60%] sm:w-[30%] "}  `}
                >
                    Admin
                </NavLink>
                <NavLink to="quizz"
                    onClick={() => setburger(!burger)}
                    className={` text-center py-3 mt-8 hover:bg-green-500 mx-3 text-3xl 
                ${quizzActive ? activeClassName : "bg-red-800 text-white w-[60%] sm:w-[30%] "}  `}
                >
                    Quiz
                </NavLink>
            </div>
            <span
                className=' w-[50px] h-[50px]  m-3 fixed  '
                onClick={() => setburger(!burger)}
            >
                {burger && <GiHamburgerMenu className=' text-3xl w-full  my-3 text-black  ' />}
                {!burger && <RiCloseFill className=' w-full text-[45px]  my-2 m-bottom-7  font-semibold text-white  ' />}
            </span>
        </div>
    )
}
