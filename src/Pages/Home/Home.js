import React from 'react';
import Nav from '../../Components/Nav/Nav';
import './Home.css';
import home1 from '../../Images/home1.png';


export default function Home(){
    return(
        <div className= 'parent-container'>
             <div className= 'container'>
                 <Nav />
                 <div className= 'pic'>
                     <img src= {home1} alt='mezcal' className='home1'></img>
                 </div>
                 <div>
                     <p className= 'text'>
                         Tequila <br /> Mezcal <br /> Tequila <br /> Mezcal 
                     </p>
                 </div>
            </div>
        </div>
       
    )
}

