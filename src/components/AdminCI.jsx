import React ,{useState} from 'react';
// import AdminLocation from './AdminLocation';
// import AdminFaculty from './AdminFaculty';
// import AdminDepartment from './AdminDepartment';
// import AdminCourse from './AdminCourse';
// import AdminStaff from './AdminStaff';


export function AdminHOD(props){
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
    <div className="container">
        <div className={`admin-body `} >
                <div className="card " >
                        <h5 className="card-header " >
                            <div className="header-select">
                                Course Coordinator functionalities
                            </div>

                        </h5>
                        
                        <div className="card-body container">
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
                                <select id="inputState" 
                                        
                                        className={`form-control card-title card-title mb-4 `}  
                                        style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option selected >Course</option>
                                    {props.courses ? 
                                        props.courses.map(course => <option>{course.id}</option>)
                                        : <option>no courses</option>
                                    }
                                </select>
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

export default AdminHOD;