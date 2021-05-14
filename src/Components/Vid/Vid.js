import React from 'react';
import ReactPlayer from 'react-player'
import Vid from './Vid.css';

export default function Vid5(){
    return(
        <div className= "tequila">
            <video controls autoPlay loop muted playsinline width="700" height="400"  border-radius= "80" overflow= "hidden" controls >
      <source src='https://www.1800tequila.com/wp-content/uploads/2020/06/1800LoopAmbientHero.mp4' type="video/mp4"/>
     </video>
        </div>
    )
}

