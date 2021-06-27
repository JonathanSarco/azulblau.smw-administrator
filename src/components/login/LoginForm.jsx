import React, { useState } from 'react';
import Logo from '../layout/logo/Logo';
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
            <div className='overlay-container'>
                <div className='overlay'>
                    <div className='overlay-panel overlay-left'>
                        <Logo />
                    </div>
                </div>
            </div>

            <div className="form-container">            
                <form action="#" onSubmit={onSubmitHandler}>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
  
        </div>
    );
}

export default LoginForm;