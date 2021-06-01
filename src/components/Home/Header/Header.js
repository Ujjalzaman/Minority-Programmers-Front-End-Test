import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header d-flex justify-content-end align-items-center">
            <div className="header-desc">
                <h2>Invest Directly into <br /> minority innovations.</h2>
                <Link to="/startup" class="link-text"><button className="header-button">View Startups</button></Link>
            </div>
        </div>
    );
};

export default Header;