import React from 'react';
import './Featured.css';
import MangosImage from '../../../images/mangoswap.png';
const Featured = () => {
    return (
        <div className="container feature">
            <div className="new-div">
            <div className="row">
                <div className="col-md-3 feature-desc  d-flex align-items-center mt-5">
                    <div className="feature-details">
                        <h2>Featured Startups</h2>
                        <p>Invest in the next billion dollar company today</p>
                    </div>
                </div>

                <div className="col-md-3 featured-div me-3 mt-5">
                    <div className="mangoswap">
                        <div className="mangoswap-head d-flex justify-content-center">
                            <img src={MangosImage} alt="" />
                            <h4>MangosWap</h4>
                        </div>
                        <div className="mangoswap-desc">
                            <p className="">The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</p>
                        </div>
                        <div className="found d-flex justify-content-between">
                            <p>Fund raise</p>
                            <p className="parcent">50% complete</p>
                        </div>
                        <div className="price">
                            <h5>$200,000/$400,000</h5>
                        </div>
                        <div className="mangoswap-hr-line">
                            {/* <hr /> */}
                        </div>
                        <div className="mangoswap-button d-flex justify-content-between">
                            <div className="found-btn">
                                <button>Fund Startup</button>
                            </div>
                            <div className="learn-btn">
                                <button>Learn more</button>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-md-3 featured-div me-3 mt-5">
                <div className="mangoswap">
                        <div className="mangoswap-head d-flex justify-content-center">
                            <img src={MangosImage} alt="" />
                            <h4>MangosWap</h4>
                        </div>
                        <div className="mangoswap-desc">
                            <p className="">The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</p>
                        </div>
                        <div className="found d-flex justify-content-between">
                            <p>Fund raise</p>
                            <p className="parcent">50% complete</p>
                        </div>
                        <div className="price">
                            <h5>$200,000/$400,000</h5>
                        </div>
                        <div className="mangoswap-hr-line">
                            {/* <hr /> */}
                        </div>
                        <div className="mangoswap-button d-flex justify-content-between">
                            <div className="found-btn">
                                <button>Fund Startup</button>
                            </div>
                            <div className="learn-btn">
                                <button>Learn more</button>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="col-md-3 featured-div mt-5">
                <div className="mangoswap">
                        <div className="mangoswap-head d-flex justify-content-center">
                            <img src={MangosImage} alt="" />
                            <h4>MangosWap</h4>
                        </div>
                        <div className="mangoswap-desc">
                            <p className="">The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</p>
                        </div>
                        <div className="found d-flex justify-content-between">
                            <p>Fund raise</p>
                            <p className="parcent">50% complete</p>
                        </div>
                        <div className="price">
                            <h5>$200,000/$400,000</h5>
                        </div>
                        <div className="mangoswap-hr-line">
                            {/* <hr /> */}
                        </div>
                        <div className="mangoswap-button d-flex justify-content-between">
                            <div className="found-btn">
                                <button>Fund Startup</button>
                            </div>
                            <div className="learn-btn">
                                <button>Learn more</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            </div>
        </div>
    );
};

export default Featured;