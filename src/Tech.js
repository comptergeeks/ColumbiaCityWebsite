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
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt orci vitae lorem consectetur, vitae sagittis metus pharetra. Sed luctus fringilla lorem, vitae faucibus lacus facilisis et. Maecenas bibendum, nibh at laoreet lobortis, lorem risus placerat est, vel porttitor mauris diam in purus. Maecenas ultrices fermentum auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras non sagittis diam. Nam ut enim sit amet odio viverra hendrerit vel at mauris. Duis posuere turpis augue. Sed facilisis, tellus sit amet laoreet condimentum, augue dolor mattis orci, at euismod massa ipsum eget mi.
Vivamus placerat, odio a mattis maximus, libero mi finibus metus, luctus sollicitudin turpis eros vitae elit. Fusce rutrum, lacus ut viverra viverra, tellus nulla euismod sapien, faucibus congue leo orci sed tortor. Duis elementum sagittis augue, sodales maximus eros molestie eget. Ut fringilla eget eros vel pretium. Donec viverra nisi quis nulla vulputate, congue posuere enim sollicitudin. Nulla sollicitudin sem ut odio luctus bibendum. Aliquam vel pellentesque felis.
Cras vitae felis sit amet ligula lobortis efficitur ac in ligula. Nam ut lorem ultricies, porttitor mauris id, placerat tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ut neque venenatis, rhoncus lorem eget, aliquet nisi. Donec aliquet, velit id mollis commodo, ex turpis molestie dolor, eu dictum neque sapien sed augue. Nam egestas et ex vel vestibulum. Duis rhoncus turpis id sapien efficitur, at rutrum augue suscipit. Mauris non augue sit amet sapien euismod accumsan eget a turpis. Donec cursus augue ornare dolor mattis faucibus.</p>
           </div>
        </div>
    )
}

export default Tech;