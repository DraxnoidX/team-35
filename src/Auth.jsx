// import React , {useContext} from 'react';
// import {Link, useHistory} from 'react-router-dom'; 
// import UserContext from './context/UserContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// export function Auth(){
//     const {userData, setUserData} = useContext(UserContext);

//     const history = useHistory();
    
//     const login =()=> history.push('/Login');
//     const logout =()=> {
//         setUserData({
//             token : undefined,
//             user : undefined
//         });
//         localStorage.setItem('access-token' , '');
//     };
//     const signin =()=> history.push('/Signin');
//     return(
//         <div>
//             {
//                 (userData.user) ?
//                 <>
//                     <Link className="nav-link "  id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         <FontAwesomeIcon icon={faUser}  /><span className='pl-2'>GUC\UserType\UserName</span>
//                     </Link>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                         <button className="dropdown-item btn nav-link" onClick={signin}>Sign in</button>
//                         <button className="dropdown-item btn nav-link" onClick={logout}>Log out</button>
//                     </div>
//                 </>
//                 :<button className='btn nav-link' onClick={login}>Log in</button>
//             }
//         </div>
//     );
// }

// export default Auth;