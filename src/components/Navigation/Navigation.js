import React, { Component } from 'react';
import styles from './Navigation.module.css';
import { navigationDefaultScoll, loginUrl } from '../../constants';
import { Link } from "react-router-dom";
import authenticationService from '../../services/authenticationService';


class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler = () => {
        const currentScrollPos = window.pageYOffset;
        const scrolled = currentScrollPos > navigationDefaultScoll;

        if (scrolled !== this.state.scrolled) {
            this.setState({
                scrolled: scrolled
            });
        }
    }

    signOutHandler = () => {
        authenticationService.logout();
    }

    render() {
        const navigationStyles = [styles['navigation']];
        if (this.state.scrolled) {
            navigationStyles.push(styles['visible-nav'])
        }
        return (
            <div className={navigationStyles.join(' ')}>
                <ul>
                </ul>
                <ul>
                    <li className={styles['nav-item']}>
                        {authenticationService.isAuthenticated() ?
                            <Link to={loginUrl} onClick={this.signOutHandler} >Sign Out</Link> :
                           null
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;