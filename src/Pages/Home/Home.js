import React from 'react';
import Nav from '../../Components/Nav/Nav';
import './Home.css';
import Vid from '../../Components/Vid/Vid';


export default function Home(){
    return(
        <div className= 'parent-container'>
             <div className= 'container1'>
                 <Nav />
                 <div>
                     <div className= 'home1'>
                        <Vid />
                     </div>
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

