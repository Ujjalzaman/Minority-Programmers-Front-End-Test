import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCourseSingleList = (props) => {
    const { title, tagLine, course_length, complete_parcent } = props.data;

    return (
        <div className="realted-startup-card coruse-list-card mt-3">
            <div className=" d-flex justify-content-end">
                <div className="d-flex course-list-card-head">
                    <div className="round"></div>
                    <p className="m-1">Earn $30</p>
                </div>
            </div>

            <div className="coruse-list-intro">
                <h2 className="">{title}</h2>
                <p className="">{tagLine}</p>
            </div>

            <div className="found-startup coruse-list-learn-div">
                <Link to="/courses"><button className="header-button">Learn</button></Link>
            </div>

            <div className="d-flex flex-column justify-content-center my-course-list-card-bottom">
                <div className="my-course-list-modules">
                    <p>{course_length}</p>
                </div>
                <div className="my-course-list-hr">
                </div>
            </div>
            <p className="my-course-list-card-bottom-complete-parcent">{complete_parcent}</p>
        </div>
    );
};

export default FeaturedCourseSingleList;