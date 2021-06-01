import React from 'react';
import FeaturedCourseSingleList from './FeaturedCourseSingleList';

const courseData = [
    {
        title: 'Intro to Blockchain',
        tagLine: 'Blockchain Cryptocurrency Fundamentals',
        course_lenght: '8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
    {
        title: 'Intro to Blockchain',
        tagLine: 'Blockchain Cryptocurrency Fundamentals',
        course_lenght: '8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
    {
        title: 'Intro to Blockchain',
        tagLine: 'Blockchain Cryptocurrency Fundamentals',
        course_lenght: '8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
    {
        title: 'Intro to Blockchain',
        tagLine: 'Blockchain Cryptocurrency Fundamentals',
        course_length: '8.3/10 Modules',
        complete_parcent: '83% Completed',
    },
]

const FeaturedCourseSingle = () => {

    return (
        <div className="my-course-list">
            <div className="realted-startup d-flex justify-content-start align-items-center">
                
            {
                courseData.map(data => <FeaturedCourseSingleList data={data} key={100}></FeaturedCourseSingleList>)
            }
                
            </div>
        </div>
    );
};

export default FeaturedCourseSingle;