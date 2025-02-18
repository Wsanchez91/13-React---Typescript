import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
            <Link to="/">Home</Link>
            <Link to="/candidates">Candidates</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Nav;