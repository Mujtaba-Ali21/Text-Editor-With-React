import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/">{props.about}</a>
          </div>
        </div>
          <div className="form-check form-switch d-flex mx-auto">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label ms-2 text-${props.mode === "dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
        

      </div>
    </nav>
  )
}

Navbar.prototypes = { title: PropTypes.string }

Navbar.defaultProps = {
  title: "set title here",
  about: "About"
}