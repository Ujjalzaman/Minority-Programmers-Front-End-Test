import React from 'react';
import { Link } from 'react-router-dom';

const WeekSingleCard = (props) => {
    const { title, image, btn } = props.data
    return (
        <div className="course-box-card course-week-card mt-4">
            <Link to="/activity">
                <button className={`course-week-card-btn week-btn-${btn}`}>Complete</button>
            </Link>
            <div className="course-week-card-content">
                <img src={image} className="" alt="" />
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default WeekSingleCard;