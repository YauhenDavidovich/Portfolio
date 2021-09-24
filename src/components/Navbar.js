import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from '../images/logo.svg'
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <img src={logo} alt="logo"/>
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Projects</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
