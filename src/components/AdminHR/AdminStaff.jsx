import React ,{useState} from 'react';

export const AdminStaff = (props) =>{
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

    const [user , setUser] =useState();
    const userhandleChange = e => {
        //departmentshandleChange();
        setUser(e.target.value);
        
       console.log(user);
    }
    const [faculty , setFaculty] =useState();
    const facultyhandleChange = e => {
        //departmentshandleChange();
        setFaculty(e.target.value);
        
       console.log(faculty);
    }
    return(
        <form>
            
            <select id="inputState" onChange={operationhandleChange} className='form-control card-title mb-5'  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                <option value='edit' selected >Edit User</option>
                <option value='add'>Add User</option>
                <option value='remove'>Remove User</option>
                        
            </select>
            <div class="form-group ">
                <div className="">
                    <select id="inputState" 
                            onChange={userhandleChange}
                            className={`form-control card-title card-title mb-4 ${(operation==='edit' || operation==='remove') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Username</option>
                        {props.users ? 
                            props.users.map(user => <option>{user.username}</option>)
                            : <option>no users</option>
                        }
                    </select>
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New Username" />
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New email" />
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New Salary" />
                    <select id="inputState" className={`form-control card-title  ${operation==='edit' ? '' : 'd-none'}`}  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option  selected >New User type</option>
                        <option value='HR'>HR</option>
                        <option value='HOD'>HOD</option>
                        <option value='Course Coordinator'>Course Coordinator</option>
                        <option value='Course Instructor'>Course Instructor</option>
                        <option value='Staff Member'>Staff Member</option>
                                
                    </select>
                    <select id="inputState" 
                            className={`form-control card-title card-title  ${(operation==='edit' ) ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >New Room</option>
                        {props.rooms ? 
                            props.rooms.map(room => <option>{room.roomId}</option>)
                            : <option>no rooms</option>
                        }
                    </select>
                    <select id="inputState" 
                            onChange={facultyhandleChange}
                            className={`form-control card-title card-title ${(operation==='edit') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option value='0' selected >New Faculty name</option>
                        {props.faculties ? 
                            props.faculties.map(faculty => <option value={faculty.name}>{faculty.name}</option>)
                            : <option>no faculties</option>
                        }
                    </select>
                    <select id="inputState" 
                            className={`form-control card-title card-title  ${(operation==='edit') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >New Department name</option>
                        {props.departments ? 
                            props.departments.filter(d => d.facultyName=== faculty).map(department => <option>{department.id}</option>)
                            : <option>no departments</option>
                        }
                    </select>

                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Username" />
                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Email" />
                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Salary" />
                    <select id="inputState" className={`form-control card-title  ${operation==='add' ? '' : 'd-none'}`}  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option  selected >User type</option>
                        <option value='HR'>HR</option>
                        <option value='HOD'>HOD</option>
                        <option value='Course Coordinator'>Course Coordinator</option>
                        <option value='Course Instructor'>Course Instructor</option>
                        <option value='Staff Member'>Staff Member</option>
                                
                    </select>
                    <select id="inputState" 
                            className={`form-control card-title card-title ${(operation==='add' ) ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Room</option>
                        {props.rooms ? 
                            props.rooms.map(room => <option>{room.roomId}</option>)
                            : <option>no rooms</option>
                        }
                    </select>
                    <select id="inputState" 
                            onChange={facultyhandleChange}
                            className={`form-control card-title card-title ${(operation==='add') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option value='0' selected >Faculty name</option>
                        {props.faculties ? 
                            props.faculties.map(faculty => <option value={faculty.name}>{faculty.name}</option>)
                            : <option>no faculties</option>
                        }
                    </select>
                    <select id="inputState" 
                            className={`form-control card-title card-title  ${(operation==='add') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Department name</option>
                        {props.departments ? 
                            props.departments.filter(d => d.facultyName=== faculty).map(department => <option>{department.id}</option>)
                            : <option>no departments</option>
                        }
                    </select>
                    
                </div>
            </div>
            <div className="navigation-btns d-flex flex-row-reverse ">
                
                <button  type="submit" className={`btn  acceptedRequests mr-5 mb-2 ${operation==='edit' ? '' : 'd-none'}`}>Edit user</button>
                <button  type="submit" className={`btn  pendingRequests mr-5 mb-2 ${operation==='add' ? '' : 'd-none'}`}>Add user</button>
                <button  type="submit" className={`btn  rejectedRequests mr-5 mb-2 ${operation==='remove' ? '' : 'd-none'}`}>Remove user</button>
            </div>
        </form>
    );
};

export default AdminStaff;