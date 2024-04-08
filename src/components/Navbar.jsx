import { NavLink } from "react-router-dom"
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    function toggleNavbarSmallScreen() {
        setShowNavbar(prevShowNavbar => !prevShowNavbar)
    }

    return (
        <header>
            <div className="contianer contianer-header">
                <div className="flex-space-between">
                    <h1 className="logo">shaker</h1>
                    <FontAwesomeIcon onClick={toggleNavbarSmallScreen} className="icon-list" icon={faBars} />
                </div>
                {showNavbar && <nav>

                    <NavLink className={({isActive}) => {{
                        return `navlink ${isActive && "active"}`
                    }}} to="/">
                        home
                    </NavLink>

                    <NavLink className={({isActive}) => {
                        return `navlink ${isActive && "active"}`
                    }} to="about">
                        about
                    </NavLink>
                    
                    <NavLink className={({isActive}) => {
                        return `navlink ${isActive && "active"}`
                    }} to="projects">
                        projects
                    </NavLink>

                    <NavLink className={({isActive}) => {
                        return `navlink ${isActive && "active"}`
                    }} to="contect">
                        contect
                    </NavLink>

                </nav>}
            </div>
        </header>
    )
}