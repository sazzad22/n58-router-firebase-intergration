import React from 'react';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    console.log(user,signInWithGoogle);
    
    return (

        <div className='form-container'>
            <form className='form' action="">
                <h1>Login</h1>
                
                <input type="text" placeholder='Email' />
                
                <input type="password" placeholder='Password' />
                <input type="submit" name="button" id="" />
                <br />
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;