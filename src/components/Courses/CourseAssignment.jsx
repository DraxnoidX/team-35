import React ,{useState} from 'react';
// import AdminLocation from './AdminLocation';
// import AdminFaculty from './AdminFaculty';
// import AdminDepartment from './AdminDepartment';
// import AdminCourse from './AdminCourse';
// import AdminStaff from './AdminStaff';


export function CourseAssignment(props){
    const [add , setAdd] = useState(true);
    function addBtn(){
        setAdd(window => !window);
    }

    const [remove , setRemove] = useState(false);
    function removeBtn(){
        setRemove(window => !window);
    }

    const [edit , setEdit] = useState(false);
    function editBtn(){
        setEdit(window => !window);
    }
    const [operation , setOperation] =useState('edit');
    const operationhandleChange = e => {
        setOperation(e.target.value);
       // console.log(requestTypeSelected);
    }
    return (
    <div className={`container ${(props.window===true) ? '' : 'd-none'}`}>
        <div className={`admin-body `} >
                <div className="card " >
                        <h5 className="card-header " >
                            <div className="header-select">
                                Course instructor functionalities
                            </div>

                        </h5>
                        
                        <div className={`card-body container `}>
                            <form>
                                <select id="inputState" onChange={operationhandleChange} className='form-control card-title mb-5'  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option value='edit' selected >Update Assignment</option>
                                    <option value='add'>Assign User</option>
                                    <option value='remove'>Remove Assignment</option>
                                            
                                </select>
                                <select id="inputState" 
                                        
                                        className={`form-control card-title card-title mb-4 `}  
                                        style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option selected >Username</option>
                                    {props.users ? 
                                        props.users.map(user => <option>{user.username}</option>)
                                        : <option>no users</option>
                                    }
                                </select>
                                <div className={`${operation ==='edit' ? '' : 'd-none'}`}>
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Old Day</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                    </select>
                                    
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >New Day</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                    </select>
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Old Slot</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                    </select>
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >New Slot</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                    </select>
                                    
                                    <select id="inputState" 
                                            
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Old room</option>
                                        {props.rooms ? 
                                            props.rooms.map(room => <option>{room.roomId}</option>)
                                            : <option>no rooms</option>
                                        }
                                    </select>
                                    <select id="inputState" 
                                            
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >New room</option>
                                        {props.rooms ? 
                                            props.rooms.map(room => <option>{room.roomId}</option>)
                                            : <option>no rooms</option>
                                        }
                                    </select>
                                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                                        style={{fontSize : '1.2rem' , fontWeight : '600'}}
                                        type="text" placeholder="New Tutorial " />
                                </div>
                                <div className={`${operation ==='add' ? '' : 'd-none'}`}>
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Day</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                    </select>
                                    
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Slot</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                    </select>
                                    
                                    <select id="inputState" 
                                            
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Room</option>
                                        {props.rooms ? 
                                            props.rooms.map(room => <option>{room.roomId}</option>)
                                            : <option>no rooms</option>
                                        }
                                    </select>
                                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                                        style={{fontSize : '1.2rem' , fontWeight : '600'}}
                                        type="text" placeholder="Tutorial " />
                                </div>
                                <div className={`${operation ==='remove' ? '' : 'd-none'}`}>
                                <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Day</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                    </select>
                                    
                                    <select id="inputState" 
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Slot</option>
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                    </select>
                                    
                                    <select id="inputState" 
                                            
                                            className={`form-control card-title card-title mb-4 `}  
                                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Room</option>
                                        {props.rooms ? 
                                            props.rooms.map(room => <option>{room.roomId}</option>)
                                            : <option>no rooms</option>
                                        }
                                    </select>
                                    <input class={`form-control card-title card-title ${operation==='remove' ? '' : 'd-none'} `} 
                                        style={{fontSize : '1.2rem' , fontWeight : '600'}}
                                        type="text" placeholder="Tutorial " />
                                </div>
                                <div className="navigation-btns d-flex flex-row-reverse ">
                                    <button  type="submit" className={`btn  acceptedRequests mr-5 mb-2 ${operation==='edit' ? '' : 'd-none'}`}>Update Assignment</button>
                                    <button  type="submit" className={`btn  pendingRequests mr-5 mb-2 ${operation==='add' ? '' : 'd-none'}`}>Assign User</button>
                                    <button  type="submit" className={`btn  rejectedRequests mr-5 mb-2 ${operation==='remove' ? '' : 'd-none'}`}>Remove Assignment</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
    </div>
    );
};

export default CourseAssignment;