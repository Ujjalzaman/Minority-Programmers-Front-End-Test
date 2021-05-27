import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import StartUpBody from '../StartUpBody/StartUpBody';
import StartUpHeader from '../StartUpHeader/StartUpHeader';
import './StartUpDetail.css';
const Detail = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="detail">
                <div className="startup-detail-main">
                    <StartUpHeader></StartUpHeader>
                    <StartUpBody></StartUpBody>
                </div>

            </div>
        </div>
    );
};

export default Detail;