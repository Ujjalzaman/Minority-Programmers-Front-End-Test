import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import './StartUpAside.css';
const StartUpAside = () => {
    return (
        <div className="startup-aside">
            <div className="container">
                <div className="startupe-aside-title">
                    <h3 className="">Founded 17th May, 2015 </h3>
                </div>
                <hr />
                <div className="social">
                    <p>Website</p>
                    <div className="social-link">
                        <h3>mangoswap.com <FaTwitter /> in <FaFacebook /></h3>
                    </div>
                </div>

                <div className="social">
                    <p>Locatioin</p>
                    <div className="website-link">
                        <h3>San Fancisco, California</h3>
                    </div>
                </div>

                <div className="social">
                    <p>Team Size</p>
                    <div className="website-link">
                        <h3>100-500 People</h3>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h2>Meet the team </h2>
                <div className="startup-team">
                    <div className="team">
                        <div className="team-img"></div>
                        <div className="team-desc">
                            <h4>Edmund Kitan</h4>
                            <p>Founder</p>
                        </div>
                    </div>

                    <div className="team">
                        <div className="team-img"></div>
                        <div className="team-desc">
                            <h4>Olarenwaju Cesar</h4>
                            <p>Co-Founder</p>
                        </div>
                    </div>

                    <div className="team">
                        <div className="team-img"></div>
                        <div className="team-desc">
                            <h4>Uzo Amanda</h4>
                            <p>Head of Growth</p>
                        </div>
                    </div>

                    <div className="team">
                        <div className="team-img"></div>
                        <div className="team-desc">
                            <h4>Donald Duke</h4>
                            <p>Head of Product</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h2>Tags</h2>
                <div className="tags d-flex justify-content-center">
                    <p>Crypto</p>
                    <p>Exchange</p>
                    <p>NFT</p>
                    <p>BlockChain</p>
                </div>
            </div>
        </div>
    );
};

export default StartUpAside;