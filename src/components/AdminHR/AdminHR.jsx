import React ,{useState} from 'react';
import AdminLocation from './AdminLocation';
import AdminFaculty from './AdminFaculty';
import AdminDepartment from './AdminDepartment';
import AdminCourse from './AdminCourse';
import AdminStaff from './AdminStaff';
import AdminMissingDays from './AdminMissingDays';
import SignIns from './SignIns';


export function AdminHR(props){
    const [formTypeSelected , setFormTypeSelected] = useState({ type  : "default"});
    
    const formTypeSelectedhandleChange = e => {
        setFormTypeSelected(e.target.value);
        //console.log(formTypeSelected);
    }
    return (
    <div className="container">
        <div className={`admin-body `} >
                <div className="card " >
                        <h5 className="card-header " >
                            <div className="header-select">
                                <select id="inputState" onChange={formTypeSelectedhandleChange} className="form-control "  style={{fontSize : '1.2rem' , fontWeight : '600'}}>
                                    <option value='default'>Admin functionalty </option>
                                    <option value='location'>Location functionalities</option>
                                    <option value='faculty'>Faculty functionalities</option>
                                    <option value='department'>Department functionalities</option>
                                    <option value='course'>Course functionalities</option>
                                    <option value='staff'>Staff functionalities</option>
                                    <option value='attendance'>Attendance record</option>
                                    <option value='missingHours'>Missing hours/days</option>
                                </select>
                            </div>

                        </h5>
                        <div className="card-body container">
                            <div className={`${formTypeSelected==='location' ? '' : 'd-none'}  `}>
                                <AdminLocation rooms={props.rooms}/>
                            </div>
                            <div className={`${formTypeSelected==='faculty' ? '' : 'd-none'}  `}>
                                <AdminFaculty  faculties={props.faculties}/>
                            </div>
                            <div className={`${formTypeSelected==='department' ? '' : 'd-none'}  `}>
                                <AdminDepartment departments={props.departments}  faculties={props.faculties}/>
                            </div>
                            <div className={`${formTypeSelected==='course' ? '' : 'd-none'}  `}>
                                <AdminCourse   departments={props.departments}  courses={props.courses} faculties={props.faculties}/>
                            </div>
                            <div className={`${formTypeSelected==='staff' ? '' : 'd-none'}  `}>
                                <AdminStaff  
                                            departments={props.departments}  
                                            faculties={props.faculties}
                                            rooms={props.rooms} 
                                            users={props.users}/>
                            </div>
                            <div className={`${formTypeSelected==='missingHours' ? '' : 'd-none'}  `}>
                                <AdminMissingDays  
                                            users={props.users}/>
                            </div>
                            <div className={`${formTypeSelected==='attendance' ? '' : 'd-none'}  `}>
                                <SignIns    signIns={props.signins}
                                            users={props.users}/>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
    );
};

export default AdminHR;