import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ refs }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="hamburger" onClick={handleToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
                    <li>
                        <a onClick={() => scrollToSection(refs.home)}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection(refs.teams)}>Teams</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection(refs.sgc)}>SGC Members</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection(refs.sponsors)}>Sponsors</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
