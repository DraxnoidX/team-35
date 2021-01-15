import React ,{useState} from 'react';

export const AdminFaculty = (props) =>{
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
    return(
        <form>
            
            <select id="inputState" onChange={operationhandleChange} className='form-control card-title mb-5'  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                <option value='edit' selected >Edit faculty</option>
                <option value='add'>Add faculty</option>
                <option value='remove'>Remove faculty</option>
                        
            </select>
            <div class="form-group ">
                <div className="">
                    <select id="inputState" 
                            className={`form-control card-title card-title mb-4 ${(operation==='edit' || operation==='remove') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >Faculty name</option>
                        {props.faculties ? 
                            props.faculties.map(faculty => <option>{faculty.name}</option>)
                            : <option>no faculties</option>
                        }
                    </select>
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New Faculty name" />
                    
                    
                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Faculty name" />
                    
                </div>
            </div>
            <div className="navigation-btns d-flex flex-row-reverse ">
                
                <button  type="submit" className={`btn  acceptedRequests mr-5 mb-2 ${operation==='edit' ? '' : 'd-none'}`}>Edit faculty</button>
                <button  type="submit" className={`btn  pendingRequests mr-5 mb-2 ${operation==='add' ? '' : 'd-none'}`}>Add faculty</button>
                <button  type="submit" className={`btn  rejectedRequests mr-5 mb-2 ${operation==='remove' ? '' : 'd-none'}`}>Remove faculty</button>
            </div>
        </form>
    );
};

export default AdminFaculty;