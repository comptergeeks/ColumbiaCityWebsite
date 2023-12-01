import React from 'react';
import './NavbarStyle.css'
//import {Link} from "react-router-dom";



export default function Navbar() {
    return (
        <div className="background">
            <h1>Columbia City</h1>
            <img src='./images/Vector-2.png' alt='line'></img>
            <div className="container">
                <div className="box">
                    Technology Use
                </div>
                <div className="box">
                    Community and Social
                </div>
                <div className="box">
                    Public Parks and Green Spaces
                </div>
                <div className="box">
                    Business and Industry
                </div>
                <div className="box">
                    Transportation and Urban
                </div>
            </div>
            <img src='./images/Vector-1.png' alt='line'></img>
        </div>
    );
}
