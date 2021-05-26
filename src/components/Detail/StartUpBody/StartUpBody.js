import React from 'react';
import StartUpAside from '../StartUpAside/StartUpAside';
import StartUpMain from '../StartUpMain/StartUpMain';

const StartUpBody = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <StartUpAside></StartUpAside>
                </div>
                <div className="col-md-8">
                    <StartUpMain></StartUpMain>
                </div>
            </div>
        </div>
    );
};

export default StartUpBody;