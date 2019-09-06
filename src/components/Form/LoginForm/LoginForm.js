import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import authenticationService from '../../../services/authenticationService';
import { withRouter } from 'react-router-dom';
import { emailData, passwordData, mainUrl } from '../../../constants';
import Form from '../Form';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                email: { ...emailData },
                password: { ...passwordData }
            }
        }
    }

    changeValueHandler = (event, key) => {
        const inputsCopy = { ...this.state.inputs };
        inputsCopy[key].value = event.target.value;;
        this.setState({
            inputs: inputsCopy
        })
    }

    onSubmit = async (results, event) => {
        event.preventDefault();
        await authenticationService.login(results.email.value, results.password.value);
        if (authenticationService.isAuthenticated()) {
            this.props.history.push(mainUrl);
        }
    }
    
    render() {
        const title = 'Login';
        const buttonText = 'Login';
        return (
            <Form className={styles['loginForm']} inputs={this.state.inputs} title={title} buttonText={buttonText} onSubmit={this.onSubmit} changeHandler={this.changeValueHandler}/>
        )
    }
}

export default withRouter(LoginForm);