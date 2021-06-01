import React from 'react';
import Featured from '../Featured/Featured';
import MangoswapList from '../MangoswapList/MangoswapList';
import OverView from '../OverView/OverView';
import './HomeBody.css';


const HomeBody = () => {

    return (
        <div className="home-body">

            <Featured></Featured>
            <OverView></OverView>
           <MangoswapList></MangoswapList>
        </div>
    );
};

export default HomeBody;