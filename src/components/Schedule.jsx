import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Schedule = () =>(
    <div className="container  mt-5 table-responsive-sm table-responsive-md">
        <table className="table table-bordered" >
            <thead>
                <tr>
                    <th className='header' scope="col">Day/Slot</th>
                    <th className='header' scope="col">1st</th>
                    <th className='header' scope="col">2nd</th>
                    <th className='header' scope="col">3rd</th>
                    <th className='header' scope="col">4th</th>
                    <th className='header' scope="col">5th</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='row-header' scope="row">Saturday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Sunday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Monday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Tuesday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Wednesday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Thursday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Schedule;