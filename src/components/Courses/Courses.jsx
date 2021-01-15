import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Courses = ({courses}) => (
    <section>
        <div className='container'>
            <div className='row ' >
                
                {   (courses.length===0)? <div>No courses avaliable</div>
                    :courses.map(course => <div className="col-xs-12 col-md-6 col-lg-4">
                                                <div className="card p-3 mb-5" data-id = {course.id}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{course.id}</h5>
                                                        <p className="card-text">{course.name}</p>
                                                        <p className="card-text"><span style={{color : '#008A62'}}>Course coverage : </span>{(course.totalSlotsTaken/course.totalSlots)*100}</p>
                                                        <span className="btns pt-5">
                                                            <Link to="#" className="btn details">Course details</Link>
                                                            <Link to={`/Courses/CourseSchedule/${course.id}`} className="ml-2 btn schedule">Course schedule</Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            
                                            </div>            
                    )
                }
                
            </div>
        </div>
    </section>
);

export default Courses;