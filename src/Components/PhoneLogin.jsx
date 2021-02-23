import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from '../Utils/firebase';

import '../Styling/login.css';

const PhoneLogin = (props) => {
    const { loginTypeHandler } = props;
    const [phoneOtp, setPhoneOtp] = useState(false);
    console.log('%cShivTest phoneOtp :->', 'color: blue', phoneOtp);

    const handlePhoneLogin = (e) => {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        let number = '+919716020555';
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((fe) => {
            let code = prompt('Enter OTP', '');
            if (code == null) return;
            fe.confirm(code).then((res) => {
                console.log('%cShivTest res :->', 'color: blue', res);
                // useHistory.push('/dashboard');
                console.log('%cShivTest res.user :->', 'color: blue', res.user);
                document.querySelector('label').textContent = res.user.phoneNumber;
            }).catch((err) => {
                document.querySelector('label').textContent = 'Login Failed';
                console.log('%cShivTest err :->', 'color: blue', err);
            })
        })
    }

    return (
        <div className="login-container">
            <h5 className="login-title">ARAM ACADAMY</h5>
            {!phoneOtp ?
                <div>
                    <TextField fullWidth id="standard-basic" label="Phone Number" color="primary" />
                    <br />
                    <br />
                    <Button className="blue-button" fullWidth="true" variant="contained" style={{ backgroundColor: '#329BF7', color: 'white', fontWeight: '600' }} size="large" onClick={e => setPhoneOtp(true)} >
                        Login
                    </Button>
                </div>
                :
                <div>
                    <TextField fullWidth id="standard-basic" label="OTP" color="primary" />
                    <br />
                    <br />
                    <Button className="blue-button" fullWidth="true" variant="contained" style={{ backgroundColor: '#329BF7', color: 'white', fontWeight: '600' }} size="large" onClick={(e) => handlePhoneLogin(e)} >
                        Verify
                    </Button>
                    <br />
                    <br />
                    <Button color="primary" style={{ color: 'white', fontWeight: '600' }}>Resend</Button>
                </div>
            }
        </div>
    )
}

export default PhoneLogin;