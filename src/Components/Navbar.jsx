import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";
// import the onclick function of switch here

export default function Navbar({title, home, blogs, value, clearSearch, handelSearchKey, formSubmit}) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">{blogs}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={formSubmit}>
            <input onChange={handelSearchKey} className="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search" value={value}/>
            {value && <span onClick={clearSearch}>x</span>}
            <button className="btn btn-primary" type="submit">Search</button>

            <div className="form-check form-switch my-2 mx-2">
                <input className="form-check-input" type="checkbox" role="switch" id="myswitch"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>

          </form>
            



        </div>
      </div>
    </nav>
    )
  }

  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    blogs: PropTypes.string.isRequired
  }
  