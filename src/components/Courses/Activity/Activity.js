import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ActivityBody from '../ActivityBody/ActivityBody';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';
import './Activity.css';

const Activity = () => {
    return (
        <div className="">
            <Navbar />
            <div className="d-flex">
                <div className="course-video-sidebar">
                    <CoursesSidebar />
                </div>
                <div className="">
                    <div className="">
                        <iframe width="1110" height="460"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <ActivityBody />
                </div>
            </div>
        </div>
    );
};

export default Activity;




