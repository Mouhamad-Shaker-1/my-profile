import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className="bg-secondary">
            <div className="contianer flex-space-between">
                <h1 className="logo">shaker</h1>
                <nav>

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
                    }} to="contect">
                        contect
                    </NavLink>

                </nav>
            </div>
        </header>
    )
}