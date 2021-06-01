import React from 'react';
import { FaAngleLeft, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CoursesSidebar.css';
const CoursesSidebar = () => {
    return (
        <div className="courses-sidebar">
            <div className="inside-course-sidebar">
                <div className="courses-sidebar-head">
                    <div className="d-flex">
                        <div className="course-arrow-back">
                            <Link to="/learn" className="course-arrow-back"> <FaAngleLeft className="courses-arrow" /></Link>
                        </div>
                        <p>Courses</p>
                    </div>
                    <h4>Intro to Blockchain</h4>
                </div>

                <div className="week mt-5">
                    <h6>Week 1</h6>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-unchecked" />
                        <p>Introduction</p>
                    </div>
                </div>

                <div className="week mt-4">
                    <h6>Week 2</h6>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-unchecked" />
                        <p>Introduction</p>
                    </div>
                </div>

                <div className="week mt-4">
                    <h6>Week 3</h6>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-unchecked" />
                        <p>Introduction</p>
                    </div>
                </div>

                <div className="week mt-4">
                    <h6>Week </h6>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-unchecked" />
                        <p>Introduction</p>
                    </div>
                </div>

                <div className="week mt-4">
                    <h6>Week 5</h6>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-checked" />
                        <p>Introduction</p>
                    </div>
                    <div className="introduction">
                        <FaCheck className="courses-unchecked" />
                        <p>Introduction</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CoursesSidebar;