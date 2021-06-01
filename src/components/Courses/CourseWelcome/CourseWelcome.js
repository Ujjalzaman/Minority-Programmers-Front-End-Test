import React from 'react';
import './CourseWelcome.css';
import Image from "../../../images//courses-hero.png";
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';
import ModuleHome from '../ModuleHome/ModuleHome';


const CourseWelcome = () => {
    return (
        <div className="courses-welcome">
            <div className="course-welcome-inside">
                <div className="courses-header">
                    <div className="d-flex align-items-center justify-content-around courses-header-insight mt-5">
                        <div className="courses-hero-img">
                            <img src={Image} alt="" />
                        </div>
                        <div className="courses-header-title">
                            <h1>Welcome back, <br /> Shot</h1>
                            <p>75% Completed</p>
                            <button>Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModuleHome/>
        </div>
    );
};

export default CourseWelcome;