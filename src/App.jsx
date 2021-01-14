import React ,{ Component, Fragment , useState, useEffect} from 'react';
import { Switch ,Route } from 'react-router-dom';
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
//import UserContext from './context/UserContext'

const BASE_URL ='https://localhost:8080';



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
    courses : [
      {
        id : 'CSEN701' ,
        name : 'Embded Systems',
        department : 'MET',
        
      },
      {
        id : 'CSEN702' ,
        name : 'Micro',
        department : 'MET',
        
      },
      {
        id : 'CSEN703' ,
        name : 'Analysis',
        department : 'MET',
        
      },
      {
        id : 'CSEN704' ,
        name : 'Advanced Computer lab',
        department : 'MET',
        schedule : [['Saturday',[{user:'Ahmed Adel' , roomID : 'H11', tutorialNumber : 'T24'},
                                  {user:'Nader' , roomID : 'H14', tutorialNumber : 'T21'},
                                  {user:'Mared' , roomID : 'H6', tutorialNumber : 'T33'}
                                ]
                              ,[
                                {user:'Ahmed Adel 2' , roomID : 'H11', tutorialNumber : 'T24'},
                                  {user:'Nader 2' , roomID : 'H14', tutorialNumber : 'T21'},
                                  {user:'Mared 2' , roomID : 'H6', tutorialNumber : 'T33'}
                              ],[],[],[]],
                    ['Sunday',[],[],[],[],[]],
                    ['Monday',[],[],[],[],[]],
                    ['Tuesday',[],[],[],[],[]],
                    ['Wednesday',[],[],[],[],[]],
                    ['Thursday',[],[],[],[],[]]
                  ]
        
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
    users : [
      {
        username : 'Slim',
        email : 'slim@guc',
        type : 'HOD',
        faculty : 'Engineering',
        department : 'MET',
        schedule :[
                    ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                    ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                    ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                  ]
       
      },
      {
        username : 'Hassan Soubra',
        email : 'soubra@guc',
        type : 'course instructor',
        faculty : 'Engineering',
        department : 'MET',
        schedule :[
                    ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                    ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                    ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                  ]
      },
      {
        username : 'Ahmed Adel',
        email : 'adel@guc',
        type : 'academic member',
        faculty : 'Engineering',
        department : 'MET',
        schedule :[
                    ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                    ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                    ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                  ]
      },
      {
        username : 'Adam Abas',
        email : 'abas@guc',
        type : 'HR',
        faculty : 'Engineering',
        department : 'MET',
        schedule :[
                    ['Saturday',null,null,null,null,null],['Sunday',null,null,null,null,null],
                    ['Monday',null,null,null,null,null],['Tuesday',null,null,null,null,null],
                    ['Wednesday',null,null,null,null,null],['Thursday',null,null,null,null,null]
                  ]
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
    requestTypeSelected :{ 
      type  : "default"
    },
    createRequestWindow : false
  };
  const acceptedRequests =state.myRequests.filter((request)=> (request.acceptanceStatus==='accepted'));
  const pendingRequests = state.myRequests.filter((request)=> (request.acceptanceStatus==='pending'));
  const rejectedRequests = state.myRequests.filter((request)=> (request.acceptanceStatus==='rejected'));
  const requestTypeSelectedhandleChange = e => {
    const requestTypeSelected = this.state.requestTypeSelected;
    requestTypeSelected.type = e.target.value;
    this.setState({requestTypeSelected});
  }
  const createRequestWindowOnClick = () =>{
    if(this.state.createRequestWindow){
      const createRequestWindow = !this.state.createRequestWindow;
      console.log(this.state.createRequestWindow);
      this.setState({createRequestWindow});
    }
    else{
      const createRequestWindow = !this.state.createRequestWindow;
      console.log(this.state.createRequestWindow);
      this.setState({createRequestWindow});
    }
    
  }
  // const [userData, setUserData] = useState({
  //   token : undefined,
  //   user : undefined,
  // });
  // useEffect(()=>{
  //   const logInChecker = async () =>{
  //     let token = localStorage.getItem('access-token');
  //     if(token===null){
  //       localStorage.setItem('access-token','');
  //       token ='';
  //     }
  //     const tokenResponse = await axios.post(BASE_URL+'/tokenIsValid',
  //                                             null,
  //                                             {headers : {'x-access-token' : token}}
  //                                           );
  //     if(tokenResponse.data){
  //       const userResponse = await axios.get(BASE_URL+'/',
  //                                         {headers : {'x-access-token' : token}}      
  //                                       );
  //       setUserData({
  //         token,
  //         user : userResponse.data
  //       });
  //     }
  //   }
  //   logInChecker();
  // },[])
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
        <Fragment>
          {/* <UserContext.Provider value={{userData, setUserData}}> */}
            <MyNavbar notifications={state.notifications}/>
            <Switch>
              
              <Route path="/" exact>
                <Profile token={token}/>
              </Route>
              {/* <Route path="/Login" exact>
                  <Login/>
              </Route> */}
              <Route path="/Courses" exact>
                  <Courses courses={state.courses}/>
              </Route>
              <Route path="/Courses/CourseSchedule" exact>
                  <CourseSchedule users={state.users} 
                                  rooms = {state.rooms} 
                                  testCourse={state.courses[3]}/>
              </Route>
              
              <Route path="/Schedule" exact>
                  <Schedule/>
              </Route>
              <Route path="/Requests" exact>
                  <Requests 
                          createRequestWindowOnClick={createRequestWindowOnClick}
                          createRequestWindow={state.createRequestWindow} 
                          requestTypeSelectedhandleChange={requestTypeSelectedhandleChange} 
                          requestTypeSelected={state.requestTypeSelected}/>
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
                  <Staff users={state.users}/>
              </Route>
            </Switch>
          {/* </UserContext.Provider> */}
        </Fragment>
      
  );
    
  
}

export default App;
