import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import FeaturedCourseSingle from '../../Learn/FeaturedCourses/FeaturedCourseSingle';
import './FeaturedCourses.css';



const FeaturedCourses = () => {
    return (

        <div className="mycourse" style={{ "marginTop": "-130px" }}>
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
                    <FeaturedCourseSingle />
                </div>
            </div>
                <button className="load-more-btn d-flex justify-content-center">Load More 
                </button>
        </div>
    );
};

export default FeaturedCourses;