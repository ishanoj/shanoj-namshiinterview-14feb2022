import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <header className='header-bar'>
            <div>
            <h2 className='pet--shop_title'>
                <Link to='/'>Pet Shop</Link> 
            </h2>
        </div>
        </header>
    )
};

export default Header;
