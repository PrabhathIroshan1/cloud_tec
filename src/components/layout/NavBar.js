import React from 'react';
import SingedInLinks from './SingedInLinks';
import SingedOutLinks from './SingedOutLinks';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const Navbar = () => {
    return(
        <nav className="nav nav-wrapper indigo lighten-3">
            <div className="container">
                <Link to='/' className="brand-logo">Cloud Tec</Link>
                <SingedInLinks/>
                <SingedOutLinks/>
            </div>
        </nav>

    )
} 

export default Navbar;