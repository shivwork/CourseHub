import React, { PureComponent } from 'react';
import Login from '../Components/Login';

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    loginHandler = () => {

    };

    render() {
        return (
            <Login />
        )
    }
}

export default LoginContainer;