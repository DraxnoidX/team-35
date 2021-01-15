import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import CourseSlot from './CourseSlot';
import CourseAssignment from './CourseAssignment';
export const CourseSchedule = (props) =>{
    const [window , setWindow] =useState(false);
    function windowHnadler(){
        setWindow(window => !window);
        console.log(window);
    }
    return(
    <div className="container">
        
        <h1 style={{color : '#1c4886'}}>CSEN704</h1>
        <div className="navigation-btns mt-5 d-flex justify-content-around">
                <button  onClick={windowHnadler} className={`btn  acceptedRequests mb-5 ${(window===true) ? 'd-none' : ''}`}>
                    Open Assignment Editor
                </button>
                <button  onClick={windowHnadler} className={`btn  rejectedRequests mb-5 ${(window===true) ? '' : 'd-none'}`}>
                    Close Assignment Editor
                </button>
        </div>
        <CourseAssignment window={window}/>
        <div className="card new-assignment d-none">
            <h5 className="card-header">New assignment</h5>
            <div className="card-body">
                <h5 className="card-title">
                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Username</option>
                        {props.users.map(u => <option>{u.username}</option>)}
                    </select>
                </h5>
                <h5 className="card-title">
                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Slot</option>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
                        <option>5th</option>
                    </select>
                </h5>
                <h5 className="card-title">
                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Day</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                    </select>
                </h5>
                <h5 className="card-title">
                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Room</option>
                        {props.rooms.map(r => <option>{r.roomId}</option>)}
                    </select>
                </h5>
                <h5 className="card-title">
                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Tutorial</option>
                        <option>T1</option>
                        <option>T2</option>
                        <option>T3</option>
                        <option>T4</option>
                        <option>T5</option>
                        <option>T6</option>
                    </select>
                </h5>
                <span className="btns d-flex flex-row-reverse ">
                                <button className="btn  reject mr-2" >Cancel</button>
                                <button className={`btn  accept mr-2 `}>Create</button>
                                
                </span>
            </div>
        </div>
        <table className="table table-bordered mt-4 table-responsive-sm table-responsive-md" >
            <thead>
                <tr>
                    <th className='header' scope="col">Day/Slot</th>
                    <th className='header' scope="col">1st</th>
                    <th className='header' scope="col">2nd</th>
                    <th className='header' scope="col">3rd</th>
                    <th className='header' scope="col">4th</th>
                    <th className='header' scope="col">5th</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='row-header' scope="row">Saturday</th>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={0} slot={1}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={0} slot={2}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={0} slot={3}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={0} slot={4}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={0} slot={5}/>
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Sunday</th>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={1} slot={1}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={1} slot={2}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={1} slot={3}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={1} slot={4}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={1} slot={5}/>
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Monday</th>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={2} slot={1}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={2} slot={2}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={2} slot={3}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={2} slot={4}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={2} slot={5}/>
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Tuesday</th>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={3} slot={1}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={3} slot={2}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={3} slot={3}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={3} slot={4}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={3} slot={5}/>
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Wednesday</th>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={4} slot={1}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={4} slot={2}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={4} slot={3}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={4} slot={4}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={4} slot={5}/>
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Thursday</th>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={5} slot={1}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={5} slot={2}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={5} slot={3}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={5} slot={4}/>
                    </td>
                    <td className='text-center'>
                        <CourseSlot course={props.course} day={5} slot={5}/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}
export default CourseSchedule;