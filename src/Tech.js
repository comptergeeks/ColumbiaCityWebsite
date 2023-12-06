import React from 'react';
import Navbar from './components/Navbar.js'
import './Tech.css'

const Library = './images/library.png';

function Tech() {
    return (
        <div className = "tech">
            <Navbar/>
           <h2>Technology Use</h2>
           <div className="body"> 
           <img src ={Library} alt ="library"/>
           <h3>By: Farhan Khan</h3>
           <p>When I visited my neighborhood, I expected a more technology-accessible situation than I was met with. In my prior research, I discovered that in the past, Columbia City was becoming a technology-integrated neighborhood and had easy access to technology such as WiFi. However, when visiting, I was met with a lack of access to technology, with only one place where residents can access the internet, the library. Additionally, at the library, there were stations where residents could work and access the internet. These computers were not nearly up to date, most likely causing users not to be able to access the full bounds of technology. This conflicted with my background research on technology access. However, I also researched the background of the business and the general environment of the town, and I was pleasantly surprised with the heavy individual business and restaurant approach. The most surprising aspect of my visit was seeing the numerous facilities available for children to access technology, with the Boys and Girls Club being a prime example.</p>
           <p>My health topic was technology accessibility and use. I specifically considered the Recreational entities, Transportation entities, and Educational entities. These were all valuable when considering the technology usage and accessibility in the neighborhood, as they were the main hubs for technology in any neighborhood, and in Columbia City, they fostered most of the technology. This led me to conclude that overall, technology access is an asset in the neighborhood as they are easily available to all groups of people without discrimination of any type. In technology, an overall barrier is the money and divide between rich and poor, and all of these entities address and overcome the barrier by providing access to all. I think that this grants my topic a score of 5 as there is no downside to the technology, benefitting everyone in the community equally without exclusion. </p>
           </div>
        </div>
    )
}

export default Tech;