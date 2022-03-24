import React from 'react';
import './Menubar.css';

const Menubar = () => {
    return (
        <div className='container d-flex justify-content-between'>
            <div>
                <h4>LOGO</h4>
            </div>
            <div className='menu-items'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Cart</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Menubar;