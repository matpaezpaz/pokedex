import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


const Nav = ({title}) =>
    <nav>
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
                {title}
            </Link>
        </div>
    </nav>


export default Nav;