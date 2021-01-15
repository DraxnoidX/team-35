import React ,{useState} from 'react';

export const AdminLocation = (props) =>{
    const [add , setAdd] = useState(true);
    function addRoom(){
        setAdd(window => !window);
    }

    const [remove , setRemove] = useState(false);
    function removeRoom(){
        setRemove(window => !window);
    }

    const [edit , setEdit] = useState(false);
    function editRoom(){
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
                <option value='edit' selected >Edit room</option>
                <option value='add'>Add room</option>
                <option value='remove'>Remove room</option>
                        
            </select>
            <div class="form-group ">
                <div className="">
                    <select id="inputState" 
                            className={`form-control card-title card-title mb-4 ${(operation==='edit' || operation==='remove') ? '' : 'd-none'}`}  
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >RoomID</option>
                        {props.rooms ? 
                            props.rooms.map(room => <option>{room.roomId}</option>)
                            : <option>no rooms</option>
                        }
                    </select>
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New Room ID" />
                    <input class={`form-control card-title card-title ${operation==='edit' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="New Capacity" />
                    <select id="inputState" className={`form-control card-title ${operation==='edit' ? '' : 'd-none'}`}  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option selected >New Type</option>
                        <option value='lecture hall'>Lecture hall</option>
                        <option value='lab'>Lab</option>
                        <option value='tutorial room'>Tutorial room</option>
                        <option value='office'>Office</option>
                                
                    </select>
                    
                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Room ID" />
                    <input class={`form-control card-title card-title ${operation==='add' ? '' : 'd-none'} `} 
                            style={{fontSize : '1.2rem' , fontWeight : '600'}}
                            type="text" placeholder="Capacity" />
                    <select id="inputState" className={`form-control card-title ${operation==='add' ? '' : 'd-none'}`}   style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                        <option  selected >Type</option>
                        <option value='lecture hall'>Lecture hall</option>
                        <option value='lab'>Lab</option>
                        <option value='tutorial room'>Tutorial room</option>
                        <option value='office'>Office</option>
                                
                    </select>
                </div>
            </div>
            <div className="navigation-btns d-flex flex-row-reverse ">
                
                <button  type="submit" className={`btn  acceptedRequests mr-5 mb-2 ${operation==='edit' ? '' : 'd-none'}`}>Edit room</button>
                <button  type="submit" className={`btn  pendingRequests mr-5 mb-2 ${operation==='add' ? '' : 'd-none'}`}>Add room</button>
                <button  type="submit" className={`btn  rejectedRequests mr-5 mb-2 ${operation==='remove' ? '' : 'd-none'}`}>Remove room</button>
            </div>
        </form>
    );
};

export default AdminLocation;