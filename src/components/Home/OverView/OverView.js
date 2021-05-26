import React from 'react';
import image from '../../../images/home-img.png';
import image1 from '../../../images/home-img2.png';
import image2 from '../../../images/home-img3.png';
import './OverView.css';
const OverView = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="overview d-flex justify-content-around">
                <div className="overview-div">
                    <img src={image} alt="" />
                    <button className="overview-button">Advice a startup</button>
                </div>

                <div className="overview-div">
                    <img src={image1} alt="" />
                    <button className="overview-button">Advice a startup</button>
                </div>

                <div className="overview-div">
                    <img src={image2} alt="" />
                    <button className="overview-button">Advice a startup</button>
                </div>
            </div>
        </div>
    );
};

export default OverView;