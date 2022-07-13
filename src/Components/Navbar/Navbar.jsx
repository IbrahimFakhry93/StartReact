import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import styles from './Navbar.module.css'
// import portofolio from './../Portofolio/Portofolio';





export default function Navbar(){
    return(
                <>
                <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-dark container-fluid py-4`}>
                        <div className="container">
                        <Link className={`${styles.navbarBrand} fw-bold`} to='/'><span>START REACT</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`${styles.navbarTabs} navbar-nav ms-auto`}>
                                <li className="nav-item">
                                {/* <NavLink className="nav-link fw-bold text-uppercase text-white" to="portofolio">Portofolio</NavLink> */}
                                <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")}  to="portofolio">Portofolio</NavLink> 
                                </li>
                                <li className="nav-item">
                                <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")}  to="about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink  className={({ isActive }) => (isActive ? "link-active" : "link")} to="contact">Contact</NavLink>
                                </li>
                        </ul>
                        </div>
                        </div>
                        </nav>
                </>
                            )
}