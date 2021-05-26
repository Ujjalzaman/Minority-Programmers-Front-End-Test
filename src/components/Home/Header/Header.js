import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header d-flex justify-content-end align-items-center">
            <div className="header-desc">
                <h2>Invest Directly into <br /> minority innovations.</h2>
                <button className="header-button">View Startups</button>
            </div>
        </div>
    );
};

export default Header;