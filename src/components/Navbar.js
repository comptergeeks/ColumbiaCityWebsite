import React from 'react';
import './NavbarStyle.css'
import { Link } from 'react-router-dom';
//import {Link} from "react-router-dom";



export default function Navbar() {
    return (
        <div className="background">
            <Link to="/"style={{color: 'inherit', textDecoration: 'inherit'}}>
            <h1>Columbia City</h1>
            </Link>
            <img src='./images/Vector-2.png' alt='line'></img>
            <div className="container">
                <div className="box">
                <Link to="/tech" style={{color: 'inherit', textDecoration: 'inherit'}}>Technology Use</Link>
                </div>
                <div className="box">
                    Community and Social
                </div>
                <div className="box">
                <Link to="/parks" style={{color: 'inherit', textDecoration: 'inherit'}}>Public Parks and Green Spaces</Link>
                </div>
                <div className="box">
                <Link to="/business" style={{color: 'inherit', textDecoration: 'inherit'}}>Business and Industry</Link>
                </div>
                <div className="box">
                <Link to="/transport" style={{color: 'inherit', textDecoration: 'inherit'}}> Transportation and Urban</Link>
                   
                </div>
            </div>
            <img src='./images/Vector-1.png' alt='line'></img>
        </div>
    );
}
