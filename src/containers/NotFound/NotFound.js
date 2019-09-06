import React, { Component } from 'react';
import styles from './NotFound.module.css';
import { Redirect } from 'react-router-dom';

class NotFound extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        console.log(this.props.history.location)
        setTimeout(() =>
            this.setState({
                redirect: true
            }), 3000);
    }

    render() {
        return (
            this.state.redirect
                ? <Redirect to='' />
                : <div className={styles['NotFound']}>
                    <h1>The page you are looking for doesn't exist!</h1>
                    <h2>You will be redirected soon...</h2>
                </div>
        )
    }
}

export default NotFound;