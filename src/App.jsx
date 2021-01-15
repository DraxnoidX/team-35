import React ,{ Component, Fragment , useState, useEffect} from 'react';
import { Switch ,Route,   useParams} from 'react-router-dom';
import Courses from './components/Courses/Courses';
import MyNavbar from './components/MyNavbar';
import { Requests } from './components/Requests/Requests';
import Schedule from './components/Schedule';
import AcceptedRequests from './components/Requests/AcceptedRequests';
import PendingRequests from './components/Requests/PendingRequests';
import RejectedRequests from './components/Requests/RejectedRequests';
import './styles/App.scss';
import  Staff  from './components/Staff';
import CourseSchedule from './components/Courses/CourseSchedule';
import axios from 'axios';
import Login from './Login';
import Profile from './Profile';
import useToken from './components/useToken';
import useID from './components/useID';
import { CircularProgressbar } from 'react-circular-progressbar';
import AdminHR from './components/AdminHR/AdminHR';
import AdminHOD from './components/AdminHOD/AdminHOD';
import AdminCI from './components/AdminCI';
import AStaffSchedule from './components/AStaffSchedule';
import StaffPerCourse from './components/StaffPerCourse';
//import UserContext from './context/UserContext'

const BASE_URL ='http://localhost:8080';



function App()  {
  const state ={
    notifications : [
      {
        link : '' ,
        title : 'req1',
        body : 'faksf;kjsddbfgvlgabblkvbbdlkzvbkljdfbvlkdzbvkl'
      },
      {
        link : '' ,
        title : 'req2',
        body : 'faksf;kjsddbfgvlgabblkvbbdlkzvbkljdfbvlkdzbvkl'
      },
      {
        link : '' ,
        title : 'req3',
        body : 'faksf;kjsddbfgvlgabblkvbbdlkzvbkljdfbvlkdzbvkl'
      },
      {
        link : '' ,
        title : 'req4',
        body : 'faksf;kjsddbfgvlgabblkvbbdlkzvbkljdfbvlkdzbvkl'
      }
      
    ],
    
    
    myRequests : [
      {
        staffId : 'User ID',
        replacementStaffId : 'Ahmed',
        repAcceptanceStatus : 'accepted',
        requestType : 'replacement',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'pending'

      },
      {
        staffId : 'User ID',
        requestType : 'changeDayOff',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'accepted',
        newDayOff : 'Saturday'
      },
      {
        staffId : 'User ID',
        requestType : 'slotLink',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'rejected',
        courseID:'CSEN704',
        roomNumber:'H11',
        tutorialNumber:'T24',
        day:'Monday',
        slot:'5th'
      },
      {
        staffId : 'User ID',
        requestType : 'accidentalLeave',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'pending',
        
      },
      {
        staffId : 'User ID',
        requestType : 'maternityLeave',
        documentLink : 'flbkgns;lnb;sbfsfnfbllsnknb',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'pending'
      },
      {
        staffId : 'User ID',
        requestType : 'sickLeave',
        documentLink : 'flbkgns;lnb;sbfsfnfbllsnknb',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'rejected'
      },
      {
        staffId : 'User ID',
        requestType : 'compensationLeave',
        reason : 'This message is displaying why the user needs this request and why would you accept/reject it',
        acceptanceStatus : 'accepted'
      }
    ],
      rooms :[
        {
          roomId : 'H1',
          schedule :[
                      ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                      ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                      ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                    ]
        },
        {
          roomId : 'H2',
          schedule :[
                      ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                      ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                      ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                    ]
        },
        {
          roomId : 'H3',
          schedule :[
                      ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                      ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                      ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                    ]
        }
      ],
    
  };
  
  
  const { token, setToken } = useToken();
  const { id, setID } = useID();
  //courses
  const [courses , setCourses] = useState();
  const getCourseData = ()=>{
    axios
        .get(BASE_URL+'/coursesList')
        .then(async res => {
            
          await setCourses(res.data);
            
          
        })
  }
  //user info
  const [user , setUser] = useState();
  const getUserData = ()=>{
    axios
        .get(BASE_URL+`/usersList/${id}`)
        .then(async res => {
            
          await setUser(res.data);
          //console.log(user);
          
        })
  }
  //other users
  const [staff , setStaff] = useState();
  const getStaffData = ()=>{
    axios
        .get(BASE_URL+'/usersList')
        .then(async res => {
            
          await setStaff(res.data);
          
          
        })
  }
  //rooms
  const [rooms , setRooms] = useState();
  const getRoomsData = ()=>{
    axios
        .get(BASE_URL+'/roomsList')
        .then(async res => {
            
          await setRooms(res.data);
            
          
        })
  }
  //faculties
  const [faculties , setFaculties] = useState();
  const getFacultiesData = ()=>{
    axios
        .get(BASE_URL+'/facultiesList')
        .then(async res => {
            
          await setFaculties(res.data);
            
          
        })
  }
  //departments
  const [departments , setDepartments] = useState();
  const getDepartmentsData = ()=>{
    axios
        .get(BASE_URL+'/departmentsList')
        .then(async res => {
            
          await setDepartments(res.data);
            
          
        })
  }
  //requests
  const [requests , setRequests] = useState();
  const getRequestsData = ()=>{
    axios
        .get(BASE_URL+'/requestsList')
        .then(async res => {
            
          await setRequests(res.data);
          
          
        })
  }
  //signin
  const [signins , setSignins] = useState();
  const getSigninsData = ()=>{
    axios
        .get(BASE_URL+'/requestsList')
        .then(async res => {
            
          await setSignins(res.data);
          
          
        })
  }
  let { uID } = useParams();
  let { courseID } = useParams();
  let acceptedRequests = state.myRequests.filter(r => r.acceptanceStatus==='accepted');
  let pendingRequests = state.myRequests.filter(r => r.acceptanceStatus==='pending');
  let rejectedRequests =state.myRequests.filter(r => r.acceptanceStatus==='rejected');
 
    
  //getCourseData();
  useEffect( () => {
    getCourseData();
    getStaffData();
    getRoomsData();
    getFacultiesData();
    getDepartmentsData();
    getUserData();
    getSigninsData();
   // test();
    // const test= staff.filter(s => s.id===uID);
    // console.log(test);
    //acceptedRequests =requests.filter((request)=> (request.acceptanceStatus==='accepted'));
    //pendingRequests = requests.filter((request)=> (request.acceptanceStatus==='pending'));
    //rejectedRequests = requests.filter((request)=> (request.acceptanceStatus==='rejected'));
    return () => {
      getCourseData();
      getStaffData();
      getRoomsData();
      getFacultiesData();
      getDepartmentsData();
      getUserData();
      getSigninsData();
     // test();
    }
  },[])
  

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
        <Fragment>
          {/* <UserContext.Provider value={{userData, setUserData}}> */}
            {user ? <MyNavbar setToken={setToken}  user={user} notifications={state.notifications}/> : <h1> <CircularProgressbar/> </h1>}
            <Switch>
              
              <Route path="/" exact>
                {user ? <Profile token={token} user={user}/> : <h1> <CircularProgressbar/> </h1>}
              </Route>
              <Route path="/Admin" exact>
                  {
                    user&&signins ?
                    <>
                      <div className={`${user.type==='HR' ? '' : 'd-none'} `}>
                        <AdminHR 
                              signins={signins}
                              users={staff}
                              departments={departments}
                              courses ={courses}
                              staff = {staff}
                              rooms={rooms} 
                              faculties={faculties}/>
                      </div>
                      <div className={`${user.type==='HOD' ? '' : 'd-none'} `}>
                        <AdminHOD 
                              users={staff.filter(u => u.department===user.department).map(user => user)}
                              courses={courses.filter(c => c.department ===user.department).map(course => course)}
                              department={user.department}/>
                      </div>
                      <div className={`${user.type==='Course Instructor' ? '' : 'd-none'} `}>
                        <AdminCI 
                              users={staff.filter(u => u.department===user.department).map(user => user)}
                              courses={courses.filter(c => c.department ===user.department).map(course => course)}
                              department={user.department}/>
                      </div>
                    </>
                    : <h1> <CircularProgressbar/> </h1>
                  }
              </Route>
              <Route path="/Courses" exact>
                  { courses ?  <Courses  courses={courses}/> : <h1> <CircularProgressbar/> </h1>}
              </Route>
              <Route path="/Courses/CourseSchedule/:courseID" exact>
                  {staff&&rooms&&courses ?<CourseSchedule 
                                  courses={courses}
                                  course={courses[0]}
                                  users={staff} 
                                  rooms = {rooms} /> : <h1> <CircularProgressbar/> </h1>}
              </Route>
              
              <Route path="/Schedule" exact>
                  {user ? <Schedule user={user} schedule={user.schedule}/> : <h1> <CircularProgressbar/> </h1>}
              </Route>
              <Route path='/Schedule/:uID' exact>
                {user ? <Schedule user={user} schedule={user.schedule}/> : <h1> <CircularProgressbar/> </h1>}
              </Route>
              <Route path="/Requests" exact>
                  <Requests myRequests={state.myRequests}/>
              </Route>
              <Route path="/AcceptedRequests" exact>
                  <AcceptedRequests myRequests={acceptedRequests}/>
              </Route>
              <Route path="/PendingRequests" exact>
                  <PendingRequests myRequests={pendingRequests}/>
              </Route>
              <Route path="/RejectedRequests" exact>
                  <RejectedRequests myRequests={rejectedRequests}/>
              </Route>
              <Route path="/Staff" exact>
                  { staff&&user ? <Staff 
                                        user={user}
                                        departments={departments}
                                        department ={user.department}
                                        courses={courses.filter(c => c.department ===user.department).map(course => course)}
                                        users={staff.filter(u => (u.department===user.department && u.id!==user.id)).map(user => user)}/> 
                                : <h1><CircularProgressbar/></h1>}
              </Route>
              <Route path="/StaffPerCourse" exact>
                  { staff&&user ? <StaffPerCourse
                                        user={user}
                                        departments={departments}
                                        department ={user.department}
                                        courses={courses.filter(c => c.department ===user.department).map(course => course)}
                                        users={staff.filter(u => (u.department===user.department && u.id!==user.id)).map(user => user)}/> 
                                : <h1><CircularProgressbar/></h1>}
              </Route>
            </Switch>
          {/* </UserContext.Provider> */}
        </Fragment>
      
  );
    
  
}

export default App;
