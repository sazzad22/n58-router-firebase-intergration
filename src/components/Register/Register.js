import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='form-container'>
            <form className='form' action="">
            <h1>Register</h1>
                <input type="text" placeholder='Your Name' />
                
                <input type="text" placeholder='Email' />
                
                <input type="password" placeholder='Password' />
                <input type="submit" name="button" id="" />
            </form>
        </div>
    );
};

export default Register;