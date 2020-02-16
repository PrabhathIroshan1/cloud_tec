import React from 'react';
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const SingedOutLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>Singup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
} 

export default SingedOutLinks;