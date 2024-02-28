import React from 'react';
import MapPage from './MapPage.js';
import { NavLink } from 'react-router-dom';
import SavedPage from './SavedPage.js';

export function Header() {
    return (
        <header>
            <nav className="topnav navbar navbar-expand-lg" id="myTopnav">
                <div className="container-fluid">
                    <h1 className="project-name">Dubs Housing</h1>
                    <img src="/img/dubslogo.png" alt="washington husky" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/map">Location</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/saved">Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function Footer (){
    return (
        <footer>
            <p>&copy; 2024 DubsHousing, Inc.</p>
        </footer>
    );
}