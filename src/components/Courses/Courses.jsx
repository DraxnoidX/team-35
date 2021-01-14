import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Courses = ({courses}) => (
    <section>
        <div className='container'>
            <div className='row ' >
                
                {   (courses.length==0)? <div>No courses avaliable</div>
                    :courses.map(course => <div className="col-xs-12 col-md-6 col-lg-4">
                                                <div class="card p-3 mb-5">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{course.id}</h5>
                                                        <p class="card-text">{course.name}</p>
                                                        <span className="btns pt-5">
                                                            <Link to="#" class="btn details">Course details</Link>
                                                            <Link to="/Courses/CourseSchedule" class="ml-2 btn schedule">Course schedule</Link>
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