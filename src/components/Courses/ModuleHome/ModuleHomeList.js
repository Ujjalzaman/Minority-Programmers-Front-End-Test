import React from 'react';
import { Link } from 'react-router-dom';

const ModuleHomeList = () => {
    return (
        <div className="course-box-card mt-4">
            <Link to="/week1"><button className="course-btn">Completed</button></Link>
            <h2>Week1 - Foundamental of Cryptocurrency </h2>
            <div className="module-hr"></div>
            <p>100% Completed</p>
        </div>
    );
};

export default ModuleHomeList;