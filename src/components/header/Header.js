import React from 'react';
import { Link } from 'react-router';
import './styles.sass';

const Header = () => (
    <nav className='navbar'>
        <ul className='navbar__nav'>
            <li className='navbar__nav__item'><Link to='/'>Main</Link></li>
            <li className='navbar__nav__item'><Link to='/heroes'>Heroes</Link></li>
            <li className='navbar__nav__item'><Link to='/team'>My Team</Link></li>
        </ul>
    </nav>
)

export default Header;
