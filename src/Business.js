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
            <p>We rate our neighborhood a five because we consider all our topics to be assets for Columbia City. There was public transportation people could take to commute around the neighborhood, which is beneficial for the environment and for those who don’t own their own vehicles. The area was well suited for biking and walking, too. The neighborhood did an excellent job of maintaining its parks and green spaces to make them accessible for people to spend time together outside. There were also community centers, a public library, and other recreational facilities that allowed people to connect with each other and find access to educational resources and technology. Local businesses received support and funding as well so that they’re able to supply the neighborhood with all their needs and keep their economy running. Overall, we saw that these entities worked together to create a welcoming, accessible environment and promote unity within the community.</p>
           </div>
        </div>
    )
}

export default Tech;