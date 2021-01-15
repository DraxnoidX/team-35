import React ,{useState,useEffect} from 'react';

export const AdminDepartment = (props) =>{
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
    const [faculty , setFaculty] =useState();
    const facultyhandleChange = e => {
        //departmentshandleChange();
        setFaculty(e.target.value);
        
       console.log(faculty);
    }
    // useEffect(() => {
    //     setFaculty(faculty);
    // })
    return(
        <form>
            <select id="inputState" onChange={operationhandleChange} className='form-control card-title mb-5'  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                <option value='edit' selected >Edit department</option>
                <option value='add'>Add department</option>
                <option value='remove'>Remove department</option>
                        
            </select>
            <select id="inputState" 
                            onChange={facultyhandleChange}
                            className={`form-control card-title card-title mb-4 `}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option value='0' selected >Faculty name</option>
                        {props.faculties ? 
                            props.faculties.map(faculty => <option value={faculty.name}>{faculty.name}</option>)
                            : <option>no faculties</option>
                        }
            </select>
            
            <div class="form-group ">
                <div className="">
                    <select id="inputState" 
                            className={`form-control card-title card-title mb-4 ${(operation==='edit' || operation==='remove') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Department name</option>
                        {props.departments ? 
                            props.departments.filter(d => d.facultyName=== faculty).map(department => <option>{department.id}</option>)
                            : <option>no departments</option>
                        }
                    </select>
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New Department name" />
                    
                    
                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Department name" />
                    
                </div>
            </div>
            <div className="navigation-btns d-flex flex-row-reverse ">
                
                <button  type="submit" className={`btn  acceptedRequests mr-5 mb-2 ${operation==='edit' ? '' : 'd-none'}`}>Edit Department</button>
                <button  type="submit" className={`btn  pendingRequests mr-5 mb-2 ${operation==='add' ? '' : 'd-none'}`}>Add Department</button>
                <button  type="submit" className={`btn  rejectedRequests mr-5 mb-2 ${operation==='remove' ? '' : 'd-none'}`}>Remove Department</button>
            </div>
        </form>
    );
};

export default AdminDepartment;