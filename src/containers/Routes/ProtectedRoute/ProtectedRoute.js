import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import authService from '../../../services/authenticationService';
import { loginUrl } from '../../../constants'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (authService.isAuthenticated()) {
            return <Component {...props} />
        } else {
            return <Redirect to={loginUrl} />
        }
    }} />
}

export default ProtectedRoute;

