import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';
import firebase from '../Utils/firebase';

import '../Styling/login.css';

const PhoneLogin = (props) => {
    const { loginTypeHandler } = props;

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
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Phone
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="number" placeholder="Phone" />
                    </Col>
                </Form.Group>
                <Col md={{ span: 8, offset: 4 }}>
                    <Button style={{ backgroundColor: '#0062cc' }} block size="sm" onClick={(e) => handlePhoneLogin(e)} >Submit</Button>
                    <label htmlFor=""></label>
                    <p>Sign in using Email <span className="email-login-button" onClick={(e) => loginTypeHandler(e, 'email')}>click here</span>  </p>
                </Col>
                <div id="recaptcha-container"></div>
            </Form>
        </div>
    )
}

export default PhoneLogin;