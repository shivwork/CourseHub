import React, { PureComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styling/style.css';
import { Container, Card, InputGroup, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Styling/login.css';



const Login = (props) => {
    const { loginTypeHandler } = props;
    const history = useHistory();

    const submitHandler = (e) => {
        history.push('/dashboard');
    }

    const inputChangeHandler = (e, inputType) => {
        console.log('%cShivTest e.target.value :->', 'color: blue', e.target.value);
    }

    return (
        <div className="login-container">
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="Email" onChange={(e) => inputChangeHandler(e, 'email')} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" onChange={(e) => inputChangeHandler(e, 'password')} />
                    </Col>
                </Form.Group>
                <Col md={{ span: 8, offset: 4 }}>
                    <Button style={{ backgroundColor: '#0062cc' }} block size="sm" onClick={(e) => submitHandler(e)} >
                        {/* <Link to="/dashboard" className="login-button">Login</Link> */}
                        Login
                    </Button>
                    <p className="login-type-text">Sign in using Phone <span className="email-login-button" onClick={(e) => loginTypeHandler(e, 'phone')}>click here</span>  </p>
                </Col>
            </Form>
        </div>
    )
}

export default Login;