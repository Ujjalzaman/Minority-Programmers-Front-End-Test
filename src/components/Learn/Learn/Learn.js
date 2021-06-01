import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import LearnHeader from '../LearnHeader/LearnHeader';
import MyCourse from '../MyCourse/MyCourse';
import './Learn.css';

const Learn = () => {
    return (
        <div className="learn">
            <Navbar />
            <LearnHeader />
            <div className="learn-body">
                <MyCourse />
                <FeaturedCourses/>
            </div>
        </div>
    );
};

export default Learn;