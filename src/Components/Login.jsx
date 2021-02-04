import React, { PureComponent, useState } from 'react';
import '../Styling/style.css';
import { Container, Card, InputGroup, Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Styling/login.css';

const submitHandler = (e) => {
    console.log('%cShivTest Test :->', 'color: blue', e);
}

const inputChangeHandler = (e, inputType) => {
    console.log('%cShivTest e.target.value :->', 'color: blue', e.target.value);
}

const Login = () => (
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
                <Button block size="sm" onClick={(e) => submitHandler(e)} >
                    {/* shiv */}
                    <Link to="/dashboard" className="login-button">Login</Link>
                </Button>
            </Col>


        </Form>
    </div>
);

export default Login;