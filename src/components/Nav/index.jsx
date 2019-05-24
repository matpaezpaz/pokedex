import React from 'react';
import './style.scss';


const Nav = ({title}) => 
    <header className="nav-header">
        <h1 className="nav-header__brand">
            {title}
        </h1>
        <ul className="nav-header__links">
            <li>Link 1</li>
            <li>Link 2</li>
        </ul>
    </header>


export default Nav;