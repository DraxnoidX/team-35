import React from 'react';
import UserIcon from './components/user.svg';

export const  Profile =(props) =>(
    <div className="container ">
        <div className="card login-card w-75  mx-auto my-5 ">
            <h5 className="card-header text-center py-3">{props.user.type}</h5>
            <div className="card-body ">
                <div className="d-flex justify-content-around">
                    <div className="col-xs-12 w-25">
                        <span className='logoBackGround pt-5 px-2'><img  src={UserIcon} alt='GUC logo' width="100" height="60"/></span>
                    </div>
                    <div className="col-xs-12 w-100">
                        <h4 className="card-title"><span style={{color : '#008A62'}}>Username : </span>{props.user.username}</h4>
                        <h5 className="card-text"><span style={{color : '#008A62'}}>Email : </span>{props.user.email}</h5>
                        <h5 className="card-text"><span style={{color : '#008A62'}}>Type : </span>{props.user.type}</h5>
                        <h5 className="card-text"><span style={{color : '#008A62'}}>Office : </span>{props.user.officeLocation}</h5>
                        <h5 className="card-text"><span style={{color : '#008A62'}}>Faculty : </span>{props.user.faculty}</h5>
                        <h5 className="card-text"><span style={{color : '#008A62'}}>Department : </span>{props.user.department}</h5>
                    </div>
                </div>

                
                
            </div>
        </div>
    </div>
);

export default Profile;

