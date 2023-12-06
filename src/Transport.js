import React from 'react';
import Navbar from './components/Navbar.js'
import './Transport.css'
const myVideo = "./images/northgatevideo.mov";

function Tech() {
    return (
        <div className = "tech">
            <Navbar/>
           <h2>Transportation and Urban</h2>
           <div className="body"> 
           <video controls autoPlay loop muted> 
           <source src={myVideo} type="video/mp4"></source>
           </video>
           <h3>By: Joseph Parris</h3>
           <p>In Columbia City, transportation was both plentiful and accessible. The area has its own light rail station that’s a short walk to many prominent locations in the city. In addition to having its own light rail station, Columbia City has plenty of buses and bus stops throughout the area.</p>
           <p>The area is also a growing suburb with many new property developments, including apartments and townhouses. Businesses were also plentiful in the area, with many restaurants and shops in their downtown area. Our experience matches up with the research I’ve done on the area, especially regarding establishing new housing and Columbia City’s development as a suburb.</p>
           </div>
        </div>
    )
}

export default Tech;