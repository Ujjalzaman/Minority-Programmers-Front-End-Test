import React from 'react';
import { FaArrowAltCircleLeft,  FaRegArrowAltCircleLeft } from 'react-icons/fa';
import MangosImage from '../../../images/mangoswap.png';
import './StartUpHeader.css';
const StartUpHeader = () => {
    return (

            <div className="startup-header">
                <div className="d-flex d-flex justify-content-around align-items-center">

                    <div className="startup-head d-flex justify-content-around">
                        <FaRegArrowAltCircleLeft className="arrow me-5" />
                        <img src={MangosImage} alt="" />
                        <h4>Mangoswap</h4>
                    </div>

                    <div className='startup-center '>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="startup-center-title">Fund raised</h4>
                            <h6 className="startup-center-parcent">50% complete</h6>
                        </div>
                        <div className="price">
                            <h5>$200,000/$400,000</h5>
                        </div>
                    </div>

                    <div className="mangoswap-hr-line"></div>

                    <div className="found-startup">
                        <button className="header-button">Found StartUp</button>
                    </div>
                </div>
            </div>

    );
};

export default StartUpHeader;