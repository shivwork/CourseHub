import React, { PureComponent } from 'react';
import Login from '../Components/Login';
import PhoneLogin from '../Components/PhoneLogin';

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isPhoneLogin: false
        }
    }

    loginTypeHandler = (e, loginType) => {
        e.preventDefault();
        this.setState({
            isPhoneLogin: loginType === 'phone'
        })
    }

    loginHandler = () => {

    };

    render() {
        const { isPhoneLogin } = this.state;

        return (
            <PhoneLogin loginTypeHandler={this.loginTypeHandler} />

        )
    }
}

export default LoginContainer;