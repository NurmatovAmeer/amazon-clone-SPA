import React from 'react';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
       <nav className="navbar navbar-expand-md bg-dark navbar-dark d-flex justify-content-around">
           <Link to="/" className="navbar-brand ">LOGO</Link>

           <ul className="navbar-nav">
               <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
               <li className="nav-item"><Link to="/news" className="nav-link">News</Link></li>
               <li className="nav-item"><Link to="/technology" className="nav-link">Technology</Link></li>
               <li className="nav-item"><Link to="/aboutus" className="nav-link">About us</Link></li>
           </ul>
       </nav>     
        </>
    );
};