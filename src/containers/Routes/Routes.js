import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { mainUrl, loginUrl } from '../../constants';
import MainPage from '../MainPage/MainPage';
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import GuestRoute from './GuestRoute/GuestRoute';
import NotFound from '../NotFound/NotFound';
import withNavigation from '../../hocs/withNavigation';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path="/" component={withNavigation(MainPage)} />
                <ProtectedRoute path={mainUrl} component={withNavigation(MainPage)} />
                <GuestRoute path={loginUrl} component={withNavigation(AuthenticationPage)} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>)
}

export default Routes;
