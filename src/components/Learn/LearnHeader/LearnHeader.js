import React from 'react';
import globeImage from '../../../images/glob.png';
import './LearnHeader.css';
const LearnHeader = () => {
    return (
        <div className="learn-header d-flex justify-content-around align-items-center">
            <div className="elipse d-flex align-items-center">     
                <img src={globeImage} alt="" />
            </div>
            <div className="learn-header-heading text-end">
                <h1>Learn high in demand <br /> IT Skills & Get Crypto</h1>
                <p>powered by <span>KoinStreet</span></p>
            </div>
        </div>
    );
};

export default LearnHeader;