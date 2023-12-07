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
           <p>Columbia City’s public parks and green spaces were conveniently accessible and integrated throughout the architecture of the city. In my background research, I found that Columbia City was at first made up of forests and marshes. Currently, there are scenic park trails and forest hiking paths for tourists and residents to walk through. One of the popular trails that came up in my background research was Seward Park. I wasn’t able to go to Seward Park when I went to Columbia City, but I was able to explore the city’s other green spaces.</p>
           <p>I observed that green spaces were evident throughout the city and this aspect definitely added an aesthetically pleasing quality. Rows of plants and trees were planted along the roads, and hills of trees lined the borders of the community. Columbia City’s parks were located near recreational facilities such as the public library centered on a large green landscape. The public parks and green spaces are generally accessible in Columbia City and I observed it to be an asset to the population health of the community.</p>
           </div>
        </div>
    )
}

export default Tech;