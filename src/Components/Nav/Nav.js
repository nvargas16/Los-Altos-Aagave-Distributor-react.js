import React from 'react';
import './Nav.css';
import Logo from '../Logo/Logo';

export default function Nav(){
    return(
        <div>

            <ul>
                <li className= 'list-nav'>
                    <div className= 'logo'><Logo/></div>
                </li>
                <div className= 'nav-bar'>

                  <li className= 'list-nav item'>
                      <div className= 'nav-shape'>
                          <p id= 'text'>
                              Home
                          </p>
                      </div>
                  </li>
                  <li className= 'list-nav item'>
                      <div className= 'nav-shape'>
                          <p>
                              About Us
                          </p>
                      </div>
                  </li>
                  <li className= 'list-nav item'>
                      <div className= 'nav-shape'>
                          <p>
                              Products
                          </p>
                      </div>
                  </li>
                  <li className= 'list-nav item'>
                      <div className= 'nav-shape'>
                          <p>
                              Specials
                          </p>
                      </div>
                  </li>
                  <li className= 'list-nav last'>
                      <div className= 'nav-shape'>
                          <p>
                              Contact Us
                          </p>
                      </div>
                  </li>

                </div>
                

               

            </ul>
        </div>
    )
}