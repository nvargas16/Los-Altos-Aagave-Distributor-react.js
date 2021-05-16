import React from 'react';
import './Contact.css';
import Nav from '../../Components/Nav/Nav';
import { Link } from "react-router-dom";
import location from '../../Images/location.png';
import Form from '../../Components/Form/Form';


export default function Contact(){
    return(
            <div className= 'parent-container'>
                <div className= 'container2'>
                    {/* All Content goes inside container div */}


                    <Nav />
                    <div className= 'phone-content'>
                    <div className= 'phone'>
                    <Link to={{ pathname: "tel:4146714751" }} onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"target="_blank">
                        <p className= 'phone-text'>
                            <strong>Phone/Fax:</strong> (414)671-4751
                        </p>
                    </Link>
                        
                    </div>
                    </div>
                
                <div className= 'email-content'>
                <div className='email'>
                <a href="mailto:sales@losaltosagavedistributor.com" style={{textDecoration: 'none'}}>
                        <p className= 'email-text'>
                            <strong>Email:</strong> sales@losaltosagavedistributor.com
                        </p>
                </a>
                    
                </div>
                </div>

                <div className='address-content'>
                <div className= 'address'>
                    <a href= "https://www.google.com/maps/place/Los+Altos+Agave/@42.9950571,-87.9571044,15z/data=!4m5!3m4!1s0x0:0xb71004f54521f9b7!8m2!3d42.9950571!4d-87.9571044"
                target= "_blank" >
                        <p>
                            3431 W. Forest Home Ave <br /> Milwaukee, WI 53215
                        </p>
                    </a>
                </div>
                </div>

                <div>
                    <Link to= {{pathname: "https://www.google.com/maps/place/Los+Altos+Agave/@42.9950571,-87.9571044,15z/data=!4m5!3m4!1s0x0:0xb71004f54521f9b7!8m2!3d42.9951392!4d-87.9571006"}}
                target= "_blank"><img src= {location} alt='3431 W. Forest Home Ave Milwaukee, WI 53215' className= 'map'></img></Link>
                </div>

                <h1 class= "formtitle">
                    Contact Form
                </h1>
                <Form />

        
                {/* End of container div */}
                </div>
            </div>
        

     
        
    )
}
