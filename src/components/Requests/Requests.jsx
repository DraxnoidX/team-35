import React ,{useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function Requests(props){
    
    const [createRequestWindow , setCreateRequestWindow] = useState(false);
    const [requestTypeSelected , setRequestTypeSelected] = useState("default");
    const requestTypeSelectedhandleChange = e => {
        setRequestTypeSelected(e.target.value);
       // console.log(requestTypeSelected);
    }
    function altercCreateRequestWindow(){
        setCreateRequestWindow(window => !window);
    }
    
    return(
    <Fragment>
        <div className="container ">
            <div className=' text-center'><button className={`btn create-new-request  mb-5 ${(createRequestWindow===true) ? 'd-none': ''}`} onClick={altercCreateRequestWindow}>Create Request</button></div>
            <div className="navigation-btns d-flex justify-content-around">
                
                <Link to="/AcceptedRequests" className="btn  acceptedRequests mb-5">Accepted Requests</Link>
                <Link to="/PendingRequests" className="btn  pendingRequests mb-5">Pending Requests</Link>
                <Link to="/RejectedRequests" className="btn  rejectedRequests mb-5">Rejected Requests</Link>
            </div>
            <div className={`create-req-body ${(createRequestWindow===true) ? '': 'd-none'}`} >
                <div className="card " >
                        <h5 className="card-header " >
                            <div className="header-select">
                                <select id="inputState"  className="form-control " onChange={requestTypeSelectedhandleChange} style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option value='default'>RequestType</option>
                                    <option value='replacement'>Replacement</option>
                                    <option value='changeDayOff'>Change Day Off</option>
                                    <option value='slotLink'>Slot linking</option>
                                    <option value='accidentalLeave'>Accidental leave</option>
                                    <option value='maternityLeave'>Maternity leave</option>
                                    <option value='sickLeave'>Sick leave</option>
                                    <option value='compensationLeave'>Compensation leave</option>
                                </select>
                            </div>

                        </h5>
                        <div className="card-body">
                            <h5 className={`card-title ${(requestTypeSelected==='replacement') ? '' : 'd-none'}`}>
                                <select id="inputState" className='form-control'  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option selected >User name</option>
                                    <option>name1</option>
                                    <option>name2</option>
                                    <option>name3</option>
                                    <option>name4</option>
                                </select>
                            </h5>
                            <div className={`${(requestTypeSelected==='slotLink') ? '' : 'd-none'}`}>
                                <h5 className="card-title">
                                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Course ID</option>
                                        <option>name1</option>
                                        <option>name2</option>
                                        <option>name3</option>
                                        <option>name4</option>
                                    </select>
                                </h5>
                                <h5 className="card-title">
                                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Slot</option>
                                        <option>name1</option>
                                        <option>name2</option>
                                        <option>name3</option>
                                        <option>name4</option>
                                    </select>
                                </h5>
                                <h5 className="card-title">
                                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Tutorial</option>
                                        <option>name1</option>
                                        <option>name2</option>
                                        <option>name3</option>
                                        <option>name4</option>
                                    </select>
                                </h5>
                                <h5 className="card-title">
                                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Room</option>
                                        <option>name1</option>
                                        <option>name2</option>
                                        <option>name3</option>
                                        <option>name4</option>
                                    </select>
                                </h5>
                                <h5 className="card-title">
                                    <select id="inputState" className="form-control" style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                        <option selected >Day</option>
                                        <option>name1</option>
                                        <option>name2</option>
                                        <option>name3</option>
                                        <option>name4</option>
                                    </select>
                                </h5>
                            </div>
                            <h5 className={`card-title ${(requestTypeSelected==='changeDayOff') ? '' : 'd-none'}`}>
                                <select id="inputState" className="form-control"  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option selected >New Day off</option>
                                    <option>name1</option>
                                    <option>name2</option>
                                    <option>name3</option>
                                    <option>name4</option>
                                </select>
                            </h5>
                            <h5 className={`card-title ${(requestTypeSelected==='maternityLeave') ? '' : 'd-none'}`}>
                                <span className="upload"><input class="form-control" type="text" placeholder="Please insert document link here"/> </span>   
                            </h5>
                            <h5 className={`card-title ${(requestTypeSelected==='sickLeave') ? '' : 'd-none'}`}>
                                <span className="upload"><input class="form-control" type="text" placeholder="Please insert document link here"/></span>   
                            </h5>
                            <div className="card-text">
                                <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                            </div>
                            <span className="btns d-flex flex-row-reverse ">
                                <button className="btn  reject mr-2" onClick={altercCreateRequestWindow}>Cancel</button>
                                <button className={`btn  accept mr-2 ${(requestTypeSelected==='default') ? 'd-none' : ''}`}>Send Request</button>
                                
                            </span>
                        </div>
                    </div>
            </div>
            <div className="received">
                <div className="row my-4">
                {
                    (props.myRequests.length==0) ? <div className='my-5' style={{fontSize : '1.2rem'}}>No requests here !!!</div>
                    : props.myRequests.map((request)=>(
                        <div className="col-xs-12 mx-4 my-3" style={{width:'100%'}}>
                            <div className="card " >
                                <h5 className="card-header py-2 text-center">{request.requestType}<span className='pl-2'></span></h5>
                                <div className="card-body">
                                    <h5 className="card-title">{request.staffId}</h5>
                                    <div className={`replacement ${(request.requestType=='replacement') ? '' : 'd-none'}`}>
                                        <h5 className="card-title">Replaced with : {request.replacementStaffId}</h5>
                                        <h5 className="card-title">Member's acceptance status : {request.repAcceptanceStatus}</h5>
                                    </div>
                                    <div className={`replacement ${(request.requestType=='changeDayOff') ? '' : 'd-none'}`}>
                                        <h5 className="card-title">New day off : {request.newDayOff}</h5>
                                    </div>
                                    <div className={`slotLinking ${(request.requestType=='slotLink') ? '' : 'd-none'}`}>
                                        <h5 className="card-title">Course : {request.courseID}</h5>
                                        <h5 className="card-title">Room : {request.roomNumber}</h5>
                                        <h5 className="card-title">Tutorial : {request.tutorialNumber}</h5>
                                        <h5 className="card-title">Day : {request.day}</h5>
                                        <h5 className="card-title">Slot : {request.slot}</h5>
                                    </div>
                                    <div className={`replacement ${(request.requestType=='maternityLeave' 
                                                                                        || request.requestType=='sickLeave') ? '' : 'd-none'}`}>
                                        <h5 className="card-title">Document link : {request.documentLink}</h5>
                                    </div>
                                    
                                    <p className="card-text">{request.reason}</p>
                                    <span className="btns d-flex flex-row-reverse ">
                                        <button className="btn  reject mr-2">Reject</button>
                                        <button className="btn  accept mr-2">Accept</button>

                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            
        </div>


    </Fragment>)
};