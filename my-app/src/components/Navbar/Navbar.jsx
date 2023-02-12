import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
    let activeStyle = {
      textDecoration: "underline",
    };
  return (
    <div>
      {/* <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link> */}

      <NavLink to="/" className="nav-link">
        {" "}
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/blogs" className="nav-link">
        Blog
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar
