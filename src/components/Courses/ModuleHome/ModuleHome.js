import React from 'react';
import { Link } from 'react-router-dom';
import './ModuleHome.css';
import ModuleHomeList from './ModuleHomeList';

const moduleData = [
    {
        title: 'Week1 - Foundamental of Cryptocurrency',
        completed:'100% Completed',
    },
    {
        title: 'Week1 - Foundamental of Cryptocurrency',
        completed:'100% Completed',
    },
    {
        title: 'Week1 - Foundamental of Cryptocurrency',
        completed:'100% Completed',
    },
    {
        title: 'Week1 - Foundamental of Cryptocurrency',
        completed:'100% Completed',
    },
]
const ModuleHome = () => {
    return (
        <div className="module-home d-flex justify-content-around">
            <div className="">
                <div className="module-head d-flex justify-content-center align-items-center">
                    <div className="module-heading">
                        <h2 className="active">Modules</h2>
                    </div>
                    <div className="module-heading">
                        <h2>Calendar</h2>
                    </div>
                    <div className="module-heading">
                        <h2>Messages</h2>
                    </div>
                </div>
                <div className="course-box mt-3">
                    {
                        moduleData.map(data => <ModuleHomeList data={data} key={1}></ModuleHomeList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ModuleHome;