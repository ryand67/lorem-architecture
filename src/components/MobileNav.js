import React from 'react';
import '../scss/MobileNav.scss';
import { Link } from 'react-router-dom';

export default function MobileNav() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/about'>About</Link></li>
                <li className="nav-item"><Link to='/work'>Work</Link></li>
                <li className="nav-item"><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}
