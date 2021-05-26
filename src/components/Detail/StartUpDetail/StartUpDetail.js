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
                <StartUpHeader></StartUpHeader>
                <StartUpBody></StartUpBody>
           
            </div>
        </div>
    );
};

export default Detail;