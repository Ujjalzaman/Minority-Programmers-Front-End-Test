import React from 'react';
import MangosImage from '../../../images/mangoswap.png';
import './MyCourseList.css';
import MycourseListSingleCard from './MycourseListSingleCard';

const courseData = [
    {
        title: 'Intro to Blockchain',
        tagLine:'Blockchain Cryptocurrency Fundamentals',
        course_lenght:'8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
    {
        title: 'Intro to Blockchain',
        tagLine:'Blockchain Cryptocurrency Fundamentals',
        course_lenght:'8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
    {
        title: 'Intro to Blockchain',
        tagLine:'Blockchain Cryptocurrency Fundamentals',
        course_lenght:'8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
    {
        title: 'Intro to Blockchain',
        tagLine:'Blockchain Cryptocurrency Fundamentals',
        course_length:'8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
]

const MyCourseList = () => {
    return (
        <div className="my-course-list">
            <div className="realted-startup d-flex justify-content-start align-items-center">
                
            {
                courseData.map(data => <MycourseListSingleCard data={data} key={30}></MycourseListSingleCard>)
            }
                
            </div>
        </div>
    );
};

export default MyCourseList;