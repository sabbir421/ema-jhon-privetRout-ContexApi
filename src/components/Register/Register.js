import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>create account</h2>
                <form onSubmit='' action="">
                    <input type="text" placeholder='email' /> <br />
                    <input type="password"  placeholder='password'/> <br />
                    <input type="password"  placeholder='again password'/> <br />
                    <input type="submit" />
                </form>
                <p>alredy have an account <Link to='/login'>Login</Link></p>
                <button className='btn-regular'>log in with google</button>
            </div>
        </div>
    );
};

export default Register;