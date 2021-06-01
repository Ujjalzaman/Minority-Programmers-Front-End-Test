import React from 'react';
import Image from '../../../images/mangoswap.png';
import MangoswapCardList from '../../../components/Home/MangoswapList/MangoswapCardList';
import './MangoswapList.css';

const mangosData = [
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
    {
        title: 'MangosWap',
        description: 'The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.',
        image: Image,
        parcent: '50% complete',
        price: '200,000/$400,000',
    },
]
const MangoswapList = () => {
    return (
        <div className="container feature">
            <div className="new-div">
                <div className="row">
                    <div className="col-md-3 feature-desc  d-flex align-items-center">
                        <div className="feature-details">
                            <h2>Upcoming Startups</h2>
                            <p>These visionary companies and disruptors are on their journey to change the world.</p>
                        </div>
                    </div>

                    {
                        mangosData.map(data => <MangoswapCardList data={data} key={5}></MangoswapCardList>)
                    }
                    

                    

                    <div className="magnoswaplist-load-btn d-flex justify-content-center mt-4">
                        <button>Load More</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MangoswapList;