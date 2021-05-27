import React from 'react';
import './StartUpmain.css';
import RealatedStartup from '../RealatedStartup/RealatedStartup';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const StartUpMain = () => {
    return (
        <div className="div">
            <div className="startup-main">
                <div className="startup-top">
                    <div className="container">
                        <div className="about-startup">
                            <h2>About Startup</h2>
                            <h3>Crypto</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        </div>
                        <div className="Vision">
                            <h2>Vision</h2>
                            <h3>Crypto</h3>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container startup-main-bottom">
                <div className="realted-startup-div">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Related Startups</h3>
                        <div>
                            <FaArrowLeft className="me-4"/>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-left">
                    <RealatedStartup></RealatedStartup>
                </div>
            </div>
        </div>
    );
};

export default StartUpMain;