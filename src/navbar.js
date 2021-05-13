import React from 'react';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Products from  './Pages/Products/Products';
import Specials from './Pages/Specials/Specials';
import Contact from './Pages/Contact/Contact';
import Nav from './Components/Nav/Nav';

//npm install react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function NavBar(){
    return(
        <Router>

            {/* Nav is placed in between router and switch, because it will be present in all pages  */}
            <Nav />

            <Switch>

            {/* Switch renders a route and route is used to check if the path matches
            EXACT IS IMPORTANT*/}

                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path= '/AboutUs'>
                    <About />
                </Route>
                <Route exact path= '/Products'>
                    <Products/>
                </Route>
                <Route exact path= '/Specials'>
                    <Specials />
                </Route>
                <Route exact path= '/Contact'>
                    <Contact />
                </Route>


            </Switch>
        </Router>
    )
}

