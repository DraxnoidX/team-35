import React ,{useState} from 'react';

export const AdminMissingDays = (props) =>{
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
        const uID = e.target.value;
        const staff = props.users.filter(u => u.id===uID);
        setUser(staff[0]);
        
       console.log(user);
    }
    
    return(
        <form>
            
            
            <div class="form-group ">
                <div className="">
                    <select id="inputState" 
                            onChange={userhandleChange}
                            className={`form-control card-title card-title mb-4 ${(operation==='edit' || operation==='remove') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Username</option>
                        {props.users ? 
                            props.users.map(user => <option value={user.id}>{user.username}</option>)
                            : <option>no users</option>
                        }
                    </select>
                    <div className={`${user!==null ? '' : 'd-none'} `}>
                        { user ? <>
                        <h5 className="card-text"><span style={{color : '#008A62'}}>Missing Hours : </span>
                            <span className='pl-4'> {user.missingHours} </span>
                        </h5>
                        <h5 className="card-text"><span  style={{color : '#008A62'}}>Missing days : 
                                                                                    </span>
                                                                                    {user.missingDays.map(d => <span className='pl-4'>
                                                                                                                    {d} 
                                                                                                                </span> )}
                                                                                    </h5> </>: <div></div> }
                    </div>
                                   
                </div>
            </div>
            
        </form>
    );
};

export default AdminMissingDays;