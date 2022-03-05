import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import Contacts from "./Contacts";
import Menu from "./Menu";
import About from "./About";

export const Routinghw = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/menu' component={Menu}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};
