import React from 'react';
import './Products.css';
import Nav from '../../Components/Nav/Nav';
import {Grid} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '../../Components/Card/Card';
import t2 from '../../Images/t2.jpg';
import t3 from '../../Images/t3.jpg';
import t4 from '../../Images/t4.jpg';
import t5 from '../../Images/t5.jpg';
import w1 from '../../Images/w1.jpg';
import w2 from '../../Images/w2.jpg';
import w3 from '../../Images/w3.jpg';
import w4 from '../../Images/w4.jpg';


export default function Products(){
    return(
        <div className= 'parent-container'>
        <div className= 'container4'>
            <Nav />
             {/* Products content starts here */}





             <p className= 'category'>Tequila</p>
             <Grid container spacing= {3}>
                 <Grid item xs= {3}>
                     <img src= {t2} className= 'tp'></img>
                     <h3 className='type'>Campo Azul Selecto Blanco</h3>
                 </Grid>
                 <Grid item xs= {3}>
                     <img src= {t3} className= 'tp'></img>
                     <h3 className='type'>Campo Azul Selecto Reposado</h3>
                 </Grid>
                 <Grid item xs= {3}>
                     <img src= {t4} className= 'tp'></img>
                     <h3 className='type'>Cristeros Silver</h3>
                 </Grid>
                 <Grid item xs= {3}>
                     <img src= {t5} className= 'tp'></img>
                     <h3 className='type'>Cristeros Reposado</h3>
                 </Grid>
             </Grid>

             <p className= 'category2'>Wine</p>
             <Grid container spacing= {3}>
                 <Grid item xs= {3}>
                     <img src= {w1} className= 'tp'></img>
                     <h3 className='type'>Campo Azul Selecto Blanco</h3>
                 </Grid>
                 <Grid item xs= {3}>
                     <img src= {w2} className= 'tp'></img>
                     <h3 className='type'>Campo Azul Selecto Reposado</h3>
                 </Grid>
                 <Grid item xs= {3}>
                     <img src= {w3} className= 'tp'></img>
                     <h3 className='type'>Cristeros Silver</h3>
                 </Grid>
                 <Grid item xs= {3}>
                     <img src= {w4} className= 'tp'></img>
                     <h3 className='type'>Cristeros Reposado</h3>
                 </Grid>
             </Grid>
      
            </div>
             </div>
             
    )
}