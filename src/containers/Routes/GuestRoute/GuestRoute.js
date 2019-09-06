import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import authenticationService from '../../../services/authenticationService';
import { mainUrl } from '../../../constants'

const GuestRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (
        authenticationService.isAuthenticated() 
            ? <Redirect to={mainUrl} />
            : <Component {...props} />
    )} />
}

export default GuestRoute;

