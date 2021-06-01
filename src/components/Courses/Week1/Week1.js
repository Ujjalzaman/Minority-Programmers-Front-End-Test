import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';
import Week1List from '../Week1List/Week1List';
import './Week1.css';

const Week1 = () => {
    return (
        <div className="">
            <Navbar />
            <div className="d-flex courses">
                <CoursesSidebar />
                <div className="courses-welcome course-week-head">
                    <div className="course-welcome-inside">
                        <div className="courses-header">
                            <div className="-flex align-items-center justify-content-center courses-header-insight mt-5">
                                <div className="course-week-head-progress">
                                    <div className="course-week-head-title">
                                        <h1 className="">Week 1</h1>
                                        <h3>Progress</h3>
                                    </div>
                                    <p>10/10</p>
                                    <hr className="module-hr module-hr-extra text-center" />
                                    <p>100% Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Week1List />
                </div>
            </div>

        </div>

    );
};

export default Week1;