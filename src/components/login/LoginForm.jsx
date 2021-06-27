import React, { useState } from 'react';
import './LoginForm.scss';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = () => {
        console.log("Here on Submit");
        console.log('Email ', email);
        console.log('Pass ', password);
    }
    return (
        <div className='container'>
            <div className="form-container">
                <form action="#" onSubmit={onSubmitHandler}>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="placeholder" onChange={e => setPassword(e.target.value)}/>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
            <div className='overlay-container'>
                <div className='overlay'>
                    <div className='overlay-panel overlay-right'>
                        <h1>Welcome to: </h1>
                        <h2>AzulBlau</h2>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default LoginForm;