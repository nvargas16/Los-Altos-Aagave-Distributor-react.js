import React from 'react';
import './Specials.css';
import Nav from '../../Components/Nav/Nav';
import {
    Link
  } from "react-router-dom";


export default function Specials(){
    return(
        <div className= 'parent-container'>
        <div className= 'container5'>
            <Nav />
             {/* About content starts here */}
             <p className='package1'>
                 California Package: <br />
                 California Package: <br />
                 California Package: <br />
                 California Package: <br />
             </p>
             <p className= 'package-details'>
                Order five cases of Californian wine <br/>(you determine which one – <br/>find out more in our product catalog), <br/>and we will give you a 10% discount<br/> on your order.
             </p>

             <Link to= '/Products'>
             <div className= 'package-button'>
                 <p>
                     Products
                 </p>
             </div>
             </Link>
        
      
            </div>
             </div>
       
    )
}