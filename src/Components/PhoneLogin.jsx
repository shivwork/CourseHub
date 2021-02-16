import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

import '../Styling/login.css';

const PhoneLogin = (props) => {
    const { loginTypeHandler } = props;

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
                    <Button block size="sm" >Submit</Button>
                    <p>Sign in using Email <span className="email-login-button" onClick={(e) => loginTypeHandler(e, 'email')}>click here</span>  </p>
                </Col>
            </Form>
        </div>
    )
}

export default PhoneLogin;