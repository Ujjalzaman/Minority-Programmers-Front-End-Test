import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';
import CourseWelcome from '../../../components/Courses/CourseWelcome/CourseWelcome';
import './Courses.css';
const Courses = () => {
    return (
        <div className="">
            <Navbar />
            <div className="d-flex courses">
                <CoursesSidebar />
                <CourseWelcome/>
            </div>
                
        </div>
    );
};

export default Courses;