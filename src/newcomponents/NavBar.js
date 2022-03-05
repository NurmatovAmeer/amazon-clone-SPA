import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                     <Link to="/" className="navbar-brand">LOGO</Link>

                     <ul className="navbar-nav">
                         <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                         <li className="nav-item"><Link to="/contacts" className="nav-link">Contacts</Link></li>
                         <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
                         <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
                     </ul>

                 </nav>

        </>
    );
};

export default NavBar;