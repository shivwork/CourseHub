import React, { PureComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styling/style.css';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import '../Styling/login.css';



const Login = (props) => {
    const { loginTypeHandler } = props;
    const history = useHistory();

    const submitHandler = (e) => {
        // history.push('/dashboard');
    }

    const inputChangeHandler = (e, inputType) => {
        console.log('%cShivTest e.target.value :->', 'color: blue', e.target.value);
    }

    return (
        <div className="login-container">
            <TextField fullWidth id="standard-basic" label="Email" color="primary" />
            <br />
            <br />
            <TextField fullWidth id="standard-basic" label="Password" />
            <br />
            <br />
            <Button className="blue-button" fullWidth="true" variant="contained" style={{ backgroundColor: '#329BF7', color: 'white', fontWeight: '600' }} size="large" onClick={(e) => submitHandler(e)} >
                Login
            </Button>
            <p className="login-type-text">Sign in using Phone <span className="email-login-button" onClick={(e) => loginTypeHandler(e, 'phone')}>click here</span>  </p>
        </div>
    )
}

export default Login;