import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faBell ,faBook,faCalendarAlt,faTasks, faUsers} from '@fortawesome/free-solid-svg-icons';
import logo from './guc_logo.png';
//import Auth from '../Auth';
import { Link,NavLink } from 'react-router-dom';

export const MyNavbar =({notifications}) =>(
  <nav className="navbar navbar-expand-lg navbar-light mb-5">
    <div className='container'>
      <Link className="navbar-brand" to='/'><span className='logoBackGround pt-5 px-2'><img  src={logo} alt='GUC logo' width="150" height="60"/></span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
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
            <Link activeClassName="selected" className="nav-link " id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faBell}  /><span className='pl-2'>Notifications</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {
                (notifications.length ===0) ? <Link className="dropdown-item" >you have no notifications</Link>
                : notifications.map(notification =>  <Link className="dropdown-item" >{notification.title}</Link>)
              }
              
            </div>
          </li>
          {/* <li className="nav-item ">
              <Auth/>
          </li> */}
          <li className="nav-item dropdown">
            <Link className="nav-link "  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faUser}  /><span className='pl-2'>GUC\UserType\UserName</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to='/'>Sign in</Link>
              <Link className="dropdown-item" to='/'>Log out</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default MyNavbar;