import React from 'react';
import './About.css';
import Nav from '../../Components/Nav/Nav';
import {Container, Col, Row} from  'react-bootstrap';
import about1 from '../../Images/about1.png';
import about2 from '../../Images/about2.png';
import about3 from '../../Images/about3.png';





export default function About(){
    return(
        <div className= 'parent-container'>
        <div className= 'container3'>
            <Nav />
             {/* About content starts here */}
             
             <div className= 'description'>
                 <p className= 'description-text'>
                 Los Altos Agave Distributor is a wholesale distributor in the Milwaukee area. Los Altos Agave Distributor has been proudly supplying tequila and other spirits and wine to local and regional customers for the past 22 years.
                 </p>
            
            <div className= 'pic1'>
                <img src= {about1} className= 'pic'></img>
            </div>
            <div className= 'image-text1'>
                <p className= 'title'>
                    Co-Founder: Luis Vargas
                </p>
                <p className= 'story'>
                    Luis Vargas visiting <br/>Productos Finos de Agave <br/> SA de CV distillery in <br/>Jesus Maria, Jalisco.
                </p>
            </div>


            <div className= 'pic2'>
                <img src={about2} className= 'pic'></img>
            </div>
            <div className= 'image-text2'>
                <p className= 'title'>
                    Co-Founder: Ramiro Magallanes
                </p>
                <p className= 'story'>
                    Ramiro Magallanes <br/> exploring the terrain of <br/>  Tequila producing <br/>  regions in Jalisco.
                </p>
            </div>


            <div className= 'pic3'>
                <div>
                    <img src= {about3} className= 'pic'></img>
                </div>
            </div>
            <div className= 'image-text3'>
                <p className= 'title'>
                    Our dedication to quality
                </p>
                <p className= 'story'>
                Prior to importing fine agave products <br/> from Mexico into the United States, <br/>we provide Tequila 
                testing to our <br/> consumers to ensure that we offer the <br/> highest quality products. Our dedication <br/>to quality
                legitimizes the relationship <br/>between customer and wholesaler!
                </p>
            </div>

             </div>
            
            
       {/* About content ends here */}
       </div>
   </div>
    )
}

