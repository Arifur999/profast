import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
        <div className='flex items-end mb-2'>
            <img className='mb-2' src={logo} alt="" />
            <p className='text-3xl font-extrabold -ms-3'>Profast</p>
        </div>
        </Link>
    );
};

export default Logo;