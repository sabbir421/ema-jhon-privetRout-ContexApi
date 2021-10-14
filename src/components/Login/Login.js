import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const{singinUsingGoogle}=useAuth();
    const location=useLocation()
    const history=useHistory()
    const redirect_uri=location.state?.from || '/shop' ;
    const handelGoogleSingin=()=>{
        singinUsingGoogle()
        .then(result=>{
            history.push(redirect_uri)
        })
    }
    return (
        <div>
            <div>
                <h2>Log in</h2>
                <form onSubmit='' action="">
                    <input type="text" placeholder='email' /> <br />
                    <input type="text" placeholder='password' /> <br />
                    <input type="submit" />
                </form>
                <p>new to ema-jhon <Link to='/register'>create account</Link> </p>
                <div>---------or----------</div>
                <button className='btn-regular' onClick={handelGoogleSingin}>google sing in</button>
            </div>
        </div>
    );
};

export default Login;