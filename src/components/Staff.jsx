import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import UserIcon from './user.svg';

export const Staff = (props) =>(
    <div className="container">
        <div className="row d-flex justify-content-around ">
            {(props.users.length==0) ? <div>No avilable users</div>
            : props.users.map(user=>
                <div className="col-xs-12 my-3">
                    <div class="card" style={{width: '18rem'}}>
                        <span className='logoBackGround pt-5 px-2'><img  src={UserIcon} alt='GUC logo' width="150" height="60"/></span>
                        <div class="card-body">
                            <h4 class="card-title">{user.username}</h4>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Email : </span>{user.email}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Type : </span>{user.type}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Faculty : </span>{user.faculty}</h5>
                            <h5 className="card-text"><span style={{color : '#008A62'}}>Department : </span>{user.department}</h5>
                        </div>
                    </div>
                </div>
            ) }
            
        </div>
    </div>
);

export default Staff;