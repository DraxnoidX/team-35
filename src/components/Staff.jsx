import React ,{useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import UserIcon from './user.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Staff = (props) =>{
    const [operation , setOperation] =useState(false);
    const operationhandleChange = e => {
        setOperation(e.target.value);
       // console.log(requestTypeSelected);
    }

    
    return(
    <div className="container">
        <div className="navigation-btns d-flex justify-content-around">
                
                <Link to="/StaffPerCourse" className="btn  acceptedRequests mb-5">Staff per course</Link>
                
        </div>
        <div className={`row d-flex justify-content-around `}>
            {(props.users.length===0) ? <div>No avilable users</div>
            : props.users.map(user=>
                <div className="col-xs-12 my-3">
                    <div className="card" style={{width: '18rem'}}>
                        <span className='logoBackGround pt-5 px-2'><img  src={UserIcon} alt='GUC logo' width="150" height="60"/></span>
                        <div className="card-body">
                            <h4 className="card-title">{user.username}</h4>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Email : </span>{user.email}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Type : </span>{user.type}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Office : </span>{user.officeLocation}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Faculty : </span>{user.faculty}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Department : </span>{user.department}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Day off : 
                                                                                    </span>
                                                                                        {user.daysOff.map(d => <span className='pl-4'>
                                                                                                                    {d} 
                                                                                                                </span> )}
                                                                                    </h5>
                            <Link to={`/Schedule/${user.id}`} className="mt-3 btn schedule">View teaching assignment</Link>                                                                    
                        </div>
                    </div>
                </div>
            ) }
            
        </div>
    </div>
    );
};

export default Staff;