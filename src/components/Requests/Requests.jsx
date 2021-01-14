import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Requests = (props) =>(
    <Fragment>
        <div className="container ">
            <div className=' text-center'><button className={`btn create-new-request  mb-5 ${(props.createRequestWindow===true) ? 'd-none': ''}`} onClick={props.createRequestWindowOnClick}>Create Request</button></div>
            <div className="navigation-btns d-flex justify-content-around">
                
                <Link to="/AcceptedRequests" className="btn  acceptedRequests mb-5">Accepted Requests</Link>
                <Link to="/PendingRequests" className="btn  pendingRequests mb-5">Pending Requests</Link>
                <Link to="/RejectedRequests" className="btn  rejectedRequests mb-5">Rejected Requests</Link>
            </div>
            <div className={`create-req-body ${(props.createRequestWindow===true) ? '': 'd-none'}`} >
                <div className="card " >
                        <h5 className="card-header " >
                            <div className="header-select">
                                <select id="inputState"  className="form-control " onChange={props.requestTypeSelectedhandleChange} style={{fontSize : '1.2rem' , fontWeight : '600'}}>
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
                            <h5 className={`card-title ${(props.requestTypeSelected.type=='replacement') ? '' : 'd-none'}`}>
                                <select id="inputState" className='form-control'  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option selected >User name</option>
                                    <option>name1</option>
                                    <option>name2</option>
                                    <option>name3</option>
                                    <option>name4</option>
                                </select>
                            </h5>
                            <div className={`${(props.requestTypeSelected.type=='slotLink') ? '' : 'd-none'}`}>
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
                            <h5 className={`card-title ${(props.requestTypeSelected.type=='changeDayOff') ? '' : 'd-none'}`}>
                                <select id="inputState" className="form-control"  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option selected >New Day off</option>
                                    <option>name1</option>
                                    <option>name2</option>
                                    <option>name3</option>
                                    <option>name4</option>
                                </select>
                            </h5>
                            <h5 className={`card-title ${(props.requestTypeSelected.type=='maternityLeave') ? '' : 'd-none'}`}>
                                <span className="upload"><input class="form-control" type="text" placeholder="Please insert document link here"/> </span>   
                            </h5>
                            <h5 className={`card-title ${(props.requestTypeSelected.type=='sickLeave') ? '' : 'd-none'}`}>
                                <span className="upload"><input class="form-control" type="text" placeholder="Please insert document link here"/></span>   
                            </h5>
                            <div className="card-text">
                                <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                            </div>
                            <span className="btns d-flex flex-row-reverse ">
                                <button className="btn  reject mr-2" onClick={props.createRequestWindowOnClick}>Cancel</button>
                                <button className={`btn  accept mr-2 ${(props.requestTypeSelected.type=='default') ? 'd-none' : ''}`}>Send Request</button>
                                
                            </span>
                        </div>
                    </div>
            </div>
            <div className="received">
                <div className="row my-4">
                    <div className="col-xs-12 mx-4" style={{width:'100%'}}>
                        <div className="card" >
                            <h5 className="card-header ">RequestType</h5>
                            <div className="card-body">
                                <h5 className="card-title">From a User</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <span className="btns d-flex flex-row-reverse ">
                                    <a href="#" className="btn  reject mr-2">Reject</a>
                                    <a href="#" className="btn  accept mr-2">Accept</a>
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    </Fragment>
);