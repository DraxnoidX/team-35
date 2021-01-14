import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const RejectedRequests =(props) =>(
    <Fragment>
        <div className="container">
            <div className="navigation-btns d-flex justify-content-around">
                <Link to="/AcceptedRequests" className="btn  acceptedRequests mb-5">Accepted Requests</Link>
                <Link to="/PendingRequests" className="btn  pendingRequests mb-5">Pending Requests</Link>
                <Link to="/Requests" className="btn  receivedRequests mb-5">Received Requests</Link>
            </div>
            <div className="row rejected">
                {
                    (props.myRequests.length==0) ? <div className='my-5' style={{fontSize : '1.2rem'}}>No requests here !!!</div>
                    : props.myRequests.map((request)=>(
                        <div className="col-xs-12 mx-4 my-3" style={{width:'100%'}}>
                            <div className="card " >
                                <h5 className="card-header-reject py-2 text-center">{request.requestType} <span className='pl-2'><FontAwesomeIcon icon={faTimes} /></span></h5>
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
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </Fragment>
);

export default RejectedRequests;