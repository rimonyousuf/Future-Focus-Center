import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <h1>Future Focus Center</h1>
            <nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statics">Statics</ActiveLink>
                <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
            </nav>
            <button className='btn-apply'>Start Applying</button>
        </div>
    );
};

export default Header;