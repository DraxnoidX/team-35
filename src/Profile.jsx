import React from 'react';

export const  Profile =(props) =>(
    <div className="container ">
        <div class="card login-card w-100  mx-auto my-5">
            <h5 class="card-header ">{props.token.email}</h5>
            <div class="card-body text-center">
                <h5 className={`card-title my-4 `}>
                    User info   
                </h5>
            </div>
        </div>
    </div>
);

export default Profile;

