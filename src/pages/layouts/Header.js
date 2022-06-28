import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/inc_dec">
                      Inc/Dec
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/register">
                      Register
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/login">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/table">
                      Table
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white fs-5" to="/logout">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* <Outlet /> */}
      </>
    );
  }
}
