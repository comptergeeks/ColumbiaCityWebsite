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
            <p> Their business and industry can be considered assets because all these businesses help to boost the economy of the neighborhood and city while providing various services to customers and work for those seeking employment. There are major employers, mainly banks and insurance companies like Bank of America, State Farm, and BECU that help handle financial situations. Then there are a lot of small businesses being supported by customers and receiving funds from city programs. The neighborhood is also focused on being sustainable and providing local, organic food at farmer's markets and grocery stores like PCC.</p>
           </div>
        </div>
    )
}

export default Tech;