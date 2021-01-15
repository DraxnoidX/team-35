import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AStaffSchedule = (props) =>(
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
                    <td className='text-center' >{
                        props.schedule[0][1] ?
                        <div>
                            <span>{props.schedule[0][1].courseID}</span>
                            <br/>
                            <span>{props.schedule[0][1].tutorial}</span>
                            <br/>
                            <span>{props.schedule[0][1].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[0][2] ?
                        <div>
                            <span>{props.schedule[0][2].courseID}</span>
                            <br/>
                            <span>{props.schedule[0][2].tutorial}</span>
                            <br/>
                            <span>{props.schedule[0][2].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[0][3] ?
                        <div>
                            <span>{props.schedule[0][3].courseID}</span>
                            <br/>
                            <span>{props.schedule[0][3].tutorial}</span>
                            <br/>
                            <span>{props.schedule[0][3].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[0][4] ?
                        <div>
                            <span>{props.schedule[0][4].courseID}</span>
                            <br/>
                            <span>{props.schedule[0][4].tutorial}</span>
                            <br/>
                            <span>{props.schedule[0][4].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[0][5] ?
                        <div>
                            <span>{props.schedule[0][5].courseID}</span>
                            <br/>
                            <span>{props.schedule[0][5].tutorial}</span>
                            <br/>
                            <span>{props.schedule[0][5].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Sunday</th>
                    <td className='text-center'>{
                        props.schedule[1][1] ?
                        <div>
                            <span>{props.schedule[1][1].courseID}</span>
                            <br/>
                            <span>{props.schedule[1][1].tutorial}</span>
                            <br/>
                            <span>{props.schedule[1][1].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[1][2] ?
                        <div>
                            <span>{props.schedule[1][2].courseID}</span>
                            <br/>
                            <span>{props.schedule[1][2].tutorial}</span>
                            <br/>
                            <span>{props.schedule[1][2].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[1][3] ?
                        <div>
                            <span>{props.schedule[1][3].courseID}</span>
                            <br/>
                            <span>{props.schedule[1][3].tutorial}</span>
                            <br/>
                            <span>{props.schedule[1][3].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[1][4] ?
                        <div>
                            <span>{props.schedule[1][4].courseID}</span>
                            <br/>
                            <span>{props.schedule[1][4].tutorial}</span>
                            <br/>
                            <span>{props.schedule[1][4].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[1][5] ?
                        <div>
                            <span>{props.schedule[1][5].courseID}</span>
                            <br/>
                            <span>{props.schedule[1][5].tutorial}</span>
                            <br/>
                            <span>{props.schedule[1][5].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Monday</th>
                    <td className='text-center'>{
                        props.schedule[2][1] ?
                        <div>
                            <span>{props.schedule[2][1].courseID}</span>
                            <br/>
                            <span>{props.schedule[2][1].tutorial}</span>
                            <br/>
                            <span>{props.schedule[2][1].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[2][2] ?
                        <div>
                            <span>{props.schedule[2][2].courseID}</span>
                            <br/>
                            <span>{props.schedule[2][2].tutorial}</span>
                            <br/>
                            <span>{props.schedule[2][2].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[2][3] ?
                        <div>
                            <span>{props.schedule[2][3].courseID}</span>
                            <br/>
                            <span>{props.schedule[2][3].tutorial}</span>
                            <br/>
                            <span>{props.schedule[2][3].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[2][4] ?
                        <div>
                            <span>{props.schedule[2][4].courseID}</span>
                            <br/>
                            <span>{props.schedule[2][4].tutorial}</span>
                            <br/>
                            <span>{props.schedule[2][4].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[2][5] ?
                        <div>
                            <span>{props.schedule[2][5].courseID}</span>
                            <br/>
                            <span>{props.schedule[2][5].tutorial}</span>
                            <br/>
                            <span>{props.schedule[2][5].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Tuesday</th>
                    <td className='text-center'>{
                        props.schedule[3][1] ?
                        <div>
                            <span>{props.schedule[3][1].courseID}</span>
                            <br/>
                            <span>{props.schedule[3][1].tutorial}</span>
                            <br/>
                            <span>{props.schedule[3][1].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[3][2] ?
                        <div>
                            <span>{props.schedule[3][2].courseID}</span>
                            <br/>
                            <span>{props.schedule[3][2].tutorial}</span>
                            <br/>
                            <span>{props.schedule[3][2].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[3][3] ?
                        <div>
                            <span>{props.schedule[3][3].courseID}</span>
                            <br/>
                            <span>{props.schedule[3][3].tutorial}</span>
                            <br/>
                            <span>{props.schedule[3][3].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[3][4] ?
                        <div>
                            <span>{props.schedule[3][4].courseID}</span>
                            <br/>
                            <span>{props.schedule[3][4].tutorial}</span>
                            <br/>
                            <span>{props.schedule[3][4].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[3][5] ?
                        <div>
                            <span>{props.schedule[3][5].courseID}</span>
                            <br/>
                            <span>{props.schedule[3][5].tutorial}</span>
                            <br/>
                            <span>{props.schedule[3][5].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Wednesday</th>
                    <td className='text-center'>{
                        props.schedule[4][1] ?
                        <div>
                            <span>{props.schedule[4][1].courseID}</span>
                            <br/>
                            <span>{props.schedule[4][1].tutorial}</span>
                            <br/>
                            <span>{props.schedule[4][1].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[4][2] ?
                        <div>
                            <span>{props.schedule[4][2].courseID}</span>
                            <br/>
                            <span>{props.schedule[4][2].tutorial}</span>
                            <br/>
                            <span>{props.schedule[4][2].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[4][3] ?
                        <div>
                            <span>{props.schedule[4][3].courseID}</span>
                            <br/>
                            <span>{props.schedule[4][3].tutorial}</span>
                            <br/>
                            <span>{props.schedule[4][3].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[4][4] ?
                        <div>
                            <span>{props.schedule[4][4].courseID}</span>
                            <br/>
                            <span>{props.schedule[4][4].tutorial}</span>
                            <br/>
                            <span>{props.schedule[4][4].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[4][5] ?
                        <div>
                            <span>{props.schedule[4][5].courseID}</span>
                            <br/>
                            <span>{props.schedule[4][5].tutorial}</span>
                            <br/>
                            <span>{props.schedule[4][5].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                </tr>
                <tr>
                    <th className='row-header' scope="row">Thursday</th>
                    <td className='text-center'>{
                        props.schedule[5][1] ?
                        <div>
                            <span>{props.schedule[5][1].courseID}</span>
                            <br/>
                            <span>{props.schedule[5][1].tutorial}</span>
                            <br/>
                            <span>{props.schedule[5][1].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[5][2] ?
                        <div>
                            <span>{props.schedule[5][2].courseID}</span>
                            <br/>
                            <span>{props.schedule[5][2].tutorial}</span>
                            <br/>
                            <span>{props.schedule[5][2].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[5][3] ?
                        <div>
                            <span>{props.schedule[5][3].courseID}</span>
                            <br/>
                            <span>{props.schedule[5][3].tutorial}</span>
                            <br/>
                            <span>{props.schedule[5][3].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[5][4] ?
                        <div>
                            <span>{props.schedule[5][4].courseID}</span>
                            <br/>
                            <span>{props.schedule[5][4].tutorial}</span>
                            <br/>
                            <span>{props.schedule[5][4].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                    <td className='text-center'>{
                        props.schedule[5][5] ?
                        <div>
                            <span>{props.schedule[5][5].courseID}</span>
                            <br/>
                            <span>{props.schedule[5][5].tutorial}</span>
                            <br/>
                            <span>{props.schedule[5][5].roomNumber}</span>
                            <br/>
                        </div>
                        : <div></div>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default AStaffSchedule;