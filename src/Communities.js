import React from 'react';
import Navbar from './components/Navbar.js';

const com1 = "./images/club.jpg";
const com2 = "./images/blind.jpg";
const com3 = "./images/cc.jpg";
const com4 = "./images/ccYoga.jpg";



function Tech() {
    return (
        <div className = "tech">
            <Navbar/>
           <h2>Community and Social</h2>
           <div className="body"> 
           <ul className="imagesfr">
            <li><img src={com1} alt=''/></li>
            <li><img src={com2} alt=''/></li>
            <li><img src={com3} alt=''/></li>
            <li><img src={com4} alt=''/></li>
          </ul>
           <h3>By: Joel Elangovan</h3>
           <p>After my initial research on Columbia city, I viewed it as a small and safe urban town with a low crime rate and a good school district. The websites I researched also showed Columbia City to be a very involved community. Upon our visit to Columbia City, our team was able to witness firsthand the involvement of the community in social gatherings and cohesive events. When I visited my neighborhood, I noticed how it was a suburban community. It was a very clean city, and citizen involvement was very high. They had a lot of parks and recreational activities like a teen center and a city library. In addition, the city also had a downtown/ mainstream type place where there were a lot of restaurants and shops. I was pleasantly surprised by the amount of greenery in the city. I expected it to be more urban, so the trees in the city and the calmness of the city was a bit surprising. While I was doing research, I found the city website, and it seemed to be a city with a lot of social involvement, like farmers' markets and city events very regularly when we visited the city that was the exact vibe I received as throughout the city they had flyers for different events happening soon. Community and social connectedness is definitely an asset to a city as it keeps the city together. The more connected a community, the more the people will want to be involved in city matters and the well-being of a city. This is what will help the city progress in the future and address any city-wide problems effectively. </p>
           </div>
        </div>
    )
}

export default Tech;