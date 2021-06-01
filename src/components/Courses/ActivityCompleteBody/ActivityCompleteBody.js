import React from 'react';
import { FaArrowLeft, FaArrowRight,FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ActivityCompleteBody.css';

const ActivityCompleteBody = () => {
    return (
        <div className="activity-body">
            <div className="container activity-body-inside">
                <div className="week-arrow activity-arrow d-flex justify-content-around align-items-center">
                    <FaArrowLeft className="activity-left-arrow" />
                    <FaArrowRight className="activity-right-arrow" />
                </div>
                <div className="activity-body-clickup">
                    <div className="containe">
                        <button className="activity-button">
                           <Link to="/activity-complete" className="btn-link">in Progress</Link> 
                        </button>
                        <h2>Activity1 -Join Clickup</h2>
                        <div className="course-vide-timestamp d-flex">
                            <FaRegClock className="clock-icon"/>
                            <p>12 minutes</p>
                        </div>

                        <div className="course-activity-header">
                            <h2>Header</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, molestiae. Optio, dolorum voluptatem rerum aut maxime asperiores ab natus incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam, repellendus, suscipit dolore, fugit laudantium quibusdam mollitia sed recusandae maiores debitis dolores molestiae. Dolore dicta corrupti voluptate nihil quis cum ut deleniti quo consequatur repudiandae amet saepe ipsam reprehenderit suscipit adipisci, laborum odio porro sequi eius voluptatum, provident eligendi ex.
                            dolor sit amet consectetur adipisicing elit. Eum quisquam, repellendus, suscipit dolore, fugit laudantium quibusdam mollitia sed recusandae maiores debitis dolores molestiae. Dolore dicta corrupti voluptate nihil quis cum ut deleniti quo consequatur repudiandae amet saepe ipsam reprehenderit suscipit adipisci, laborum odio porro sequi eius voluptatum, provident eligendi ex.
                            </p>
                        </div>
                        <div className="course-activity-header">
                            <h2>Header</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, molestiae. Optio, dolorum voluptatem rerum aut maxime asperiores ab natus incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolore quidem laudantium. Error, rem. Repudiandae cum soluta voluptatem iure. Natus ad praesentium eaque sequi. Alias animi architecto repellendus dolore non impedit aliquam eligendi ab fugiat accusantium voluptatem similique beatae ipsam, eum voluptatum est odio? Asperiores corrupti 
                            dolor sit amet consectetur adipisicing elit. Eum quisquam, repellendus, suscipit dolore, fugit laudantium quibusdam mollitia sed recusandae maiores debitis dolores molestiae. Dolore dicta corrupti voluptate nihil quis cum ut deleniti quo consequatur repudiandae amet saepe ipsam reprehenderit suscipit adipisci, laborum odio porro sequi eius voluptatum, provident eligendi ex.similique voluptatum voluptatem ex?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityCompleteBody;