import React from 'react';
import '../scss/Nav.scss';

export default function Nav() {
    return (
        <nav className="nav">
            <h1 className="nav-header">LA</h1>    
            <ul className="nav-list">
                <li className="nav-item">About</li>
                <li className="nav-item">Work</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    )
}
