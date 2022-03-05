import React from 'react';
import {NavBar} from "./NavBar";
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from "./Home";
import News from "./News";
import Technology from "./Technology";
import Aboutus from "./Aboutus";

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/technology" exact component={Technology}/>
                    <Route path="/aboutus" exact component={Aboutus}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default Routing;