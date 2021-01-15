import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

async function loginUser(credentials) {
    console.log(credentials);
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => {           
        //console.log(data.json());
        //console.log(data.text()); 
        //JSON.parse(data); 
        return data.json()})
        
    
}

export function Login({ setToken }){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        //onsole.log(token);
        setToken(token);
        
        history.push('/');window.location.reload(false);
    }
    return(
        <div className="container ">
            <div className="card login-card  mx-auto my-5">
                <h5 className="card-header text-center">Log in</h5>
                <div className="card-body ">
                    <form className="text-center mx-auto" onSubmit={handleSubmit}>
                        <h5 className={`card-title my-4 `}>
                            <span className="login ">
                                <input className="form-control " onChange={e => setEmail(e.target.value)} type="text" placeholder="email"/> 
                            </span>   
                        </h5>
                        <h5 className={`card-title my-4`}>
                            <span className="login">
                                <input className="form-control" onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/> 
                            </span>   
                        </h5>
                        <span className="btns d-flex flex-row-reverse ">
                            <button type="submit" className={`btn  login-btn mr-2 `}>Login</button>
                        </span>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login;