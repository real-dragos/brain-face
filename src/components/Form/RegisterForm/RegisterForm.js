import React, {Component} from 'react';
import styles from './RegisterForm.module.css';
import authenticationService from '../../../services/authenticationService';
import { emailData, passwordData, nameData, mainUrl } from '../../../constants';
import {withRouter} from 'react-router-dom';
import Form from '../Form';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                fullname: {...nameData},
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
        await authenticationService.register(results.fullname.value, results.email.value, results.password.value);
        if(authenticationService.isAuthenticated()){
            this.props.history.push(mainUrl);
        }
    }

    render(){
        const title = 'Register';
        const buttonText = 'Register';
        return (
            <Form className={styles['loginForm']} inputs={this.state.inputs} title={title} buttonText={buttonText} onSubmit={this.onSubmit} changeHandler={this.changeValueHandler}/>
        )
    }
    
}

export default withRouter(RegisterForm);