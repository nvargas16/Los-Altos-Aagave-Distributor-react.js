import React from 'react';
import './Logo.css';
import logo from '../../Images/logo.jpg';

export default function Logo(){
    return(
        <div>
            <img src = {logo} className= 'logo' alt= 'Los Altos Agave Distributor, Inc.' ></img>
        </div>
    )
}
