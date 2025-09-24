import { NavLink } from "react-router-dom";
import "./NavBar.module.css"
function NavBar(){
    return(
        <div className="navbar">
            <h1>Mini Blog</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>

    )
}

export default NavBar ; 