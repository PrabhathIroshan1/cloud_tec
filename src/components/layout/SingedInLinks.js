import React from 'react';
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const SingedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>New Item</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">CT</NavLink></li>
        </ul>
    )
} 

export default SingedInLinks;