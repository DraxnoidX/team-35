import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const CourseSlot = (props) =>(
    <div>
        {
            props.testCourse.schedule[props.day][props.slot].map((e ,  index)=>
                <div>
                    <div className='d-flex justify-content-around'>
                        <span>
                            <div>{e.user}</div>
                            <div>{e.roomID}</div>
                            <div>{e.tutorialNumber}</div>
                        </span>
                        <span className='btns d-flex flex-column '>
                            <button  className='btn btn-edit mb-2'>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button style={{backgroundColor : '#880d28',color : 'white'}} className='btn btn-remove'>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </span>
                    </div>
                    <hr className={`${(index===props.testCourse.schedule[props.day][props.slot].length-1) ? 'd-none' : '' }`} 
                        style={{border: '0.5px  solid #1c4886' ,borderRaduis : '25px'}} />
                </div>
            )
        }
    </div>
);

export default CourseSlot;