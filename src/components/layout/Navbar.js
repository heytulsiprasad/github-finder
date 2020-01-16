import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Navbar = ({icon, title}) => {
    
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}></i>&nbsp;
                    {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "GitHub Finder (Default)",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
