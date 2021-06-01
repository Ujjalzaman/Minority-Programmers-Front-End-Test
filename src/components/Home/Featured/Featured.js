import React from 'react';
import './Featured.css';
import MangosImage from '../../../images/mangoswap.png';
import FeaturedList from './FeaturedList';
const mangosData = [
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: MangosImage,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: MangosImage,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: MangosImage,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
]
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

                    {
                        mangosData.map(data => <FeaturedList data={data} key={20}></FeaturedList>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Featured;