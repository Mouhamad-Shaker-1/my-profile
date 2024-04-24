import { NavLink, Link } from "react-router-dom"
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(window.innerWidth < 680 ? false : true) 
    
    function toggleNavbarSmallScreen() {
        if (window.innerWidth < 680) {
            setShowNavbar(prevShowNavbar => !prevShowNavbar)
        }
    }


    window.addEventListener("resize", () => {
        if (window.innerWidth < 680) {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    });
        



    return (
        <header>
            <div className="contianer contianer-header">
                <div className="flex-space-between">
                    <Link to='/'>
                        <h1
                            onClick={() => toggleNavbarSmallScreen()}
                            className="logo"
                        >
                            shaker
                        </h1>
                    </Link> 
                    <FontAwesomeIcon onClick={toggleNavbarSmallScreen} className="icon-list" icon={faBars} />
                </div>
                {showNavbar && <nav>

                    <NavLink
                        onClick={() => toggleNavbarSmallScreen()}
                        className={({ isActive }) => {
                            {
                        return `navlink ${isActive && "active"}`
                    }}} to="/">
                        home
                    </NavLink>

                    <NavLink
                        onClick={() => toggleNavbarSmallScreen()}
                        className={({ isActive }) => {
                        return `navlink ${isActive && "active"}`
                    }} to="about">
                        about
                    </NavLink>
                    
                    <NavLink
                        onClick={() => toggleNavbarSmallScreen()}
                        className={({ isActive }) => {
                        return `navlink ${isActive && "active"}`
                    }} to="projects">
                        projects
                    </NavLink>

                    <NavLink
                        onClick={() => toggleNavbarSmallScreen()}
                        className={({ isActive }) => {
                        return `navlink ${isActive && "active"}`
                    }} to="contect">
                        contect
                    </NavLink>

                </nav>}
            </div>
        </header>
    )
}