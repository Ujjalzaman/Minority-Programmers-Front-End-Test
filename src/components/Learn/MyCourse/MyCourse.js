import React from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MyCourseList from '../MyCourseList/MyCourseList';
import './MyCourse.css';

const MyCourse = () => {
    return (
        <div className="mycourse mt-5">
            <div className="mycourse-search">
                <div className="form-group d-flex justify-content-center align-items-center">
                    <input className="form-control" type="text" name="" id="" alt="What event are you looking for?" />
                    <select name="mycourse-search-btn ms-2" id="">
                        <option value="course">filter search</option>
                        <option value="course">Course</option>
                    </select>
                </div>
            </div>

            <div className="mt-5 mycourse-bottom">
                <div className="container mycourse-div d-flex justify-content-center align-items-center">
                    <h2>My Courses</h2>
                    <hr className="mycourse-hr-heading" />
                    <div className="my-course-arrow d-flex">
                        <FaArrowLeft className="me-4" />
                        <FaArrowRight />
                    </div>
                </div>
                <div className="mycourse-course-list">
                    <MyCourseList />
                </div>
            </div>
        </div>
    );
};

export default MyCourse;