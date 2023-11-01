import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        {/* <Link className="nav-link active " aria-current="page" to="/">{props.link1}</Link> */}
                        <a className="nav-link active " aria-current="page" href="/">{props.link1}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href="/">{props.link2}</a>
                        </li>
                        <li className="nav-item dropdown">
                        {/* <Link className="nav-link " to="/about">{props.link3}</Link> */}
                        <a className="nav-link " href="/about">{props.link3}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">{props.link4}</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    link1: PropTypes.string
};

Navbar.defaultProps = {
    title: "Logo",
    link1: "Link1",
    link2: "Link2",
    link3: "Link3",
}
