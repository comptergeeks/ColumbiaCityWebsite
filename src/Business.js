import React from 'react';
import Navbar from './components/Navbar.js'
import './Business.css'

const Best = './images/all-the-best.jpg';
const Support = './images/support-columbia-city.jpg'
const IceCream = './images/icecream-shop.jpg'

function Tech() {
    return (
        <div className = "tech">
            <Navbar/>
           <h2>Business and Industry</h2>
           <div className="body"> 
           <div className="image-flex">
           <img src ={Best} alt ="all-thebest"/>
           <img src ={Support} alt ="suport"/>
           <img src ={IceCream} alt ="icreamshop"/>
           </div>
           <h3>By: Amy Chung</h3>
           <p>My observations did match up with the data and research I found. I read that Columbia City is becoming known for its diverse business district and that is certainly true when we walked down the streets and saw many types of businesses selling food, drinks, desserts, pet supplies, groceries, plants, clothing, beauty products, and more.
            </p>
           </div>
        </div>
    )
}

export default Tech;