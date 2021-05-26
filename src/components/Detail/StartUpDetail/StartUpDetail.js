import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import StartUpHeader from '../StartUpHeader/StartUpHeader';
import './StartUpDetail.css';
const Detail = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="detail">
                <div className="container">
                    <StartUpHeader></StartUpHeader>
                </div>
            </div>
        </div>
    );
};

export default Detail;