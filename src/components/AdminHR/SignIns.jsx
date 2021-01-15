import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SignIns = (props) =>(
    <div className="container  mt-5 table-responsive-sm table-responsive-md">
        {
        props.signins===undefined ?
        <h3 className='w-100'>The Sign System is currently empty</h3>
        :
        <table className="table table-bordered" >
            <thead>
                <tr>
                    <th className='header' scope="col">Staff ID</th>
                    <th className='header' scope="col">Days</th>
                    <th className='header' scope="col">hours</th>
                    <th className='header' scope="col">currentMonth</th>
                    <th className='header' scope="col">signInStamp</th>
                </tr>
            </thead>
            <tbody>
                {
                props.signins.map(signin => <tr>
                <th className='row-header' scope="row">{signin.staffId}</th>
                    <td className='text-center'>
                        {signin.days}
                    </td>
                    <td className='text-center'>
                        {signin.hours}
                    </td>
                    <td className='text-center'>
                        {signin.currentMonth}
                    </td>
                    <td className='text-center'>
                         {signin.signInStamp}
                    </td>
                </tr>)}
                
                
            </tbody>
        </table>}
    </div>
);

export default SignIns;