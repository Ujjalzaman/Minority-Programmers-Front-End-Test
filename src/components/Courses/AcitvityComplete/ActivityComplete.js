import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ActivityCompleteBody from '../ActivityCompleteBody/ActivityCompleteBody';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';
import userImage from '../../../images/courses-hero.png';
import './AcitvityComplete.css';

const ActivityComplete = () => {
    return (
        <div className="">
            <Navbar />
            <div className="d-flex course-acitivit-complete-body">
                <div className="course-video-sidebar">
                    <CoursesSidebar />
                </div>
                <div className="">
                    <div className="">
                        <iframe width="1110" height="460"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <div className="activity-complete-profile">
                        <h2>Activity complete!</h2>
                        <img src={userImage} alt="" />
                        <p><small>90% complete</small></p>
                        <h6>You just completed</h6>
                        <h4>Activity 1: Join Clickup</h4>
                        <button className="course-complete-btn">Go to Next Lesson</button>
                        <p>cancel</p>
                    </div>
                    <div className="">
                        <ActivityCompleteBody />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ActivityComplete;

