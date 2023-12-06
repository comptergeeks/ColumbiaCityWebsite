import React from 'react';
import Navbar from './components/Navbar.js';
import './Parks.css';

const Park1 = "./images/park1.jpg";
const Park2 = "./images/park2.jpg";
const Park3 = "./images/park3.jpg";
const Park4 = "./images/park4.png";



function Tech() {
    return (
        <div className = "tech">
            <Navbar/>
           <h2>Public Parks and Green Spaces</h2>
           <div className="body"> 
           <ul className="imagesfr">
            <li><img src={Park1} alt=''/></li>
            <li><img src={Park2} alt=''/></li>
            <li><img src={Park3} alt=''/></li>
            <li><img src={Park4} alt=''/></li>
          </ul>
           <h3>By: Raizel Lagunero</h3>
           <p>Columbia City’s public parks and green spaces were conveniently accessible throughout the city. Parks were also accessible and were surrounded by recreational facilities. The Boys and Girls Club had a playground, and the public library was located in a public park. Greenery was incorporated throughout the architecture, and there were multiple public parks. 
            Plants and trees were planted along the roads, and hills of trees lined the borders of the community, and this aspect definitely added an aesthetically pleasing quality. 
            </p>
           </div>
        </div>
    )
}

export default Tech;