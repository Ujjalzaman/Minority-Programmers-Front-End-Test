import React from 'react';
import { Link } from 'react-router-dom';
import MangosImage from '../../../images/mangoswap.png';

const FeaturedList = (props) => {
    const {title, image, parcent, description, price} = props.data;
    return (
        <div className="col-md-3 featured-div me-3 mt-5">
                    <div className="mangoswap">
                        <div className="mangoswap-head d-flex justify-content-center">
                            <img src={image} alt="" />
                            <h4>{title}</h4>
                        </div>
                        <div className="mangoswap-desc">
                            <p className="">{description}</p>
                        </div>
                        <div className="found d-flex justify-content-between">
                            <p>Fund raise</p>
                            <p className="parcent">{parcent}</p>
                        </div>
                        <div className="price">
                            <h5>{price}</h5>
                        </div>
                        <div className="mangoswap-hr-line">
                            {/* <hr /> */}
                        </div>
                        <div className="mangoswap-button d-flex justify-content-between">
                            <div className="found-btn">
                               <Link to="/startup"><button>Fund Startup</button></Link> 
                            </div>
                            <div className="learn-btn">
                               <Link to="/learn"> <button>Learn more</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
    );
};

export default FeaturedList;