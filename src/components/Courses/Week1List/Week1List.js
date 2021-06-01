import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import codeImage from '../../../images/week1.png';
import './Week1List.css';
import WeekSingleCard from './WeekSingleCard';

const activityData = [
    {
        title: 'Activity - Join Clickup',
        image: codeImage,
        btn: "green",
    },
    {
        title: 'Activity - Join Clickup',
        image: codeImage,
        btn: "orange",
    },
    {
        title: 'Activity - Join Clickup',
        image: codeImage,
        btn: "gray",
    },
    {
        title: 'Activity - Join Clickup',
        image: codeImage,
        btn: "green",
    },
]


const Week1List = () => {
    return (
        <div className="week1-list">

            <div className="module-home d-flex justify-content-around">
                <div className="">
                    <div className="module-head d-flex justify-content-center align-items-center">
                        <div className="module-heade">
                            <h2 className="active">Modules</h2>
                        </div>
                        <div className="module-heade">
                            <h2>Calendar</h2>
                        </div>
                        <div className="module-heade">
                            <h2>Messages</h2>
                        </div>
                    </div>
                    <div className="course-box mt-3">
                        <div className="course-arrow d-flex justify-content-around align-items-center">
                            <FaArrowLeft />
                            <FaArrowRight />
                        </div>
                        {
                            activityData.map(data => <WeekSingleCard data={data} key={data.btn}></WeekSingleCard>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Week1List;