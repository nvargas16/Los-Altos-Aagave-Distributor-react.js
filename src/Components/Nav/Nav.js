import React from 'react';
import './Nav.css';
import Logo from '../Logo/Logo';
import {
    Link
  } from "react-router-dom";

//Link is used to link components to the exact path defined in Route of the Switch in NavBar

export default function Nav(){
    return(
        <div>

            <ul>
                <li className= 'list-nav'>
                    <Link to= '/'><div className= 'logo'><Logo/></div></Link>
                </li>
                <div className= 'nav-bar'>

                  <li className= 'list-nav item'>
                      <Link to= '/'><div className= 'nav-shape'>
                          <p id= 'text'>
                              Home
                          </p>
                      </div></Link>
                  </li>
                  <li className= 'list-nav item'>
                      <Link to= '/AboutUs'><div className= 'nav-shape'>
                          <p>
                              About Us
                          </p>
                      </div></Link>
                  </li>
                  <li className= 'list-nav item'>
                      <Link to= '/Products'><div className= 'nav-shape'>
                          <p>
                              Products
                          </p>
                      </div></Link>
                  </li>
                  <li className= 'list-nav item'>
                      <Link to= '/Specials'><div className= 'nav-shape'>
                          <p>
                              Specials
                          </p>
                      </div></Link>
                  </li>
                  <li className= 'list-nav last'>
                      <Link to= '/Contact'><div className= 'nav-shape'>
                          <p>
                              Contact Us
                          </p>
                      </div></Link>
                  </li>

                </div>
                

               

            </ul>
        </div>
    )
}