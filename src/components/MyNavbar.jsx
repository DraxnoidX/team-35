import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faBell ,faBook,faCalendarAlt,faTasks, faUsers, faUserCog} from '@fortawesome/free-solid-svg-icons';
import logo from './guc_logo.png';

//import Auth from '../Auth';
import { Link,NavLink } from 'react-router-dom';

export const MyNavbar =(props) =>{
  function destroyToken(){
    window.localStorage.clear(); //clear all localstorage
    window.localStorage.removeItem("token"); //remove one item
    window.location.reload(false);
  }
  return(
  <nav className="navbar navbar-expand-lg navbar-light mb-5">
    <div className='container'>
      <Link className="navbar-brand" to='/'><span className='logoBackGround pt-5 px-2'><img  src={logo} alt='GUC logo' width="150" height="60"/></span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
        <li className={`nav-item ${props.user.type!=='Staff Member' ? '' : 'd-none'}`}> 
            <NavLink activeClassName="selected" className="nav-link " to='/Admin'><FontAwesomeIcon icon={faUserCog} /><span className='pl-2'>Admin</span></NavLink>
          </li>
          <li className="nav-item "> 
            <NavLink activeClassName="selected" className="nav-link " to='/Staff'><FontAwesomeIcon icon={faUsers} /><span className='pl-2'>Staff</span></NavLink>
          </li>
          <li className="nav-item "> 
            <NavLink activeClassName="selected" className="nav-link " to='/Schedule'><FontAwesomeIcon icon={faCalendarAlt} /><span className='pl-2'>Schedule</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="selected" className="nav-link" to='/Requests'><FontAwesomeIcon icon={faTasks} /><span className='pl-2'>Requests</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="selected" className="nav-link" to='/Courses' exact><FontAwesomeIcon icon={faBook} /><span className='pl-2'>Courses</span></NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link  to="#" className="nav-link " id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faBell}  /><span className='pl-2'>Notifications</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
              {
                (props.notifications.length ===0) ? <Link to="" className="dropdown-item" >you have no notifications</Link>
                : props.notifications.map(notification =>  <Link  to="" className="dropdown-item" >{notification.title}</Link>)
              }
              
            </div>
          </li>
          {/* <li className="nav-item ">
              <Auth/>
          </li> */}
          <li className="nav-item dropdown">
            <Link  to="#" className="nav-link "  id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faUser}  />
              <span className='pl-2'>GUC\{props.user.type}\{props.user.username}</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
              <button className="dropdown-item" >Sign in</button>
              <button onClick={destroyToken} className="dropdown-item" >Log out</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
};

export default MyNavbar;