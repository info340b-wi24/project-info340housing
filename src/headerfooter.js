import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className="topnav navbar navbar-expand-lg" id="myTopnav">
                <div className="container-fluid">
                    <h1 className="project-name">Dubs Housing</h1>
                    <img src="/img/dubslogo.png" alt="washington husky" />
                    <button className="navbar-toggler bg-light shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link rounded" + (isActive ? " active" : "")} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link rounded" + (isActive ? " active" : "")} to="/map">Location</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link rounded" + (isActive ? " active" : "")} to="/saved">Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <footer>
            <p>&copy; 2024 DubsHousing, Inc.</p>
        </footer>
    );
}
