import React, { Component } from 'react';
import styles from './AuthenticationPage.module.css'
import LoginForm from '../../components/Form/LoginForm/LoginForm';
import RegisterForm from '../../components/Form/RegisterForm/RegisterForm';


class AuthenticationPage extends Component {

    constructor() {
        super();
        this.state = {
            selectedForm: 'login'
        }
    }

    toggleSelectionHandler = (newValue) => {
        if(this.state.selectedForm !== newValue){
            this.setState({
                selectedForm: newValue
            })
        }
    }

    render() {
        let loginStyle = '';
        let registerStyle = '';
        if(this.state.selectedForm === 'login'){
            loginStyle = styles['selected'];
        }
        else{
            registerStyle = styles['selected'];
        }
        return (
            <div className='center'>
                <div className={styles['AuthenticationPage']}>
                    <div className={styles['form-tabs']}>
                        <div className={loginStyle} onClick={()=>this.toggleSelectionHandler('login')}>Login</div>
                        <div className={registerStyle} onClick={()=>this.toggleSelectionHandler('register')}>Register</div>
                    </div>
                    <div className={styles['form-wrapper']}>
                        {this.state.selectedForm === 'login'
                        ? <LoginForm />
                        : <RegisterForm />}
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthenticationPage;