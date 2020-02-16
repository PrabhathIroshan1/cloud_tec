import React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const Navbar = () => {
    return(
        <nav className="nav nav-wrapper light-blue darken-2">
            <div className="container">
                <Link to='/' className="brand-logo">Cloud Tec</Link>
            </div>
        </nav>

    )
} 

export default Navbar;