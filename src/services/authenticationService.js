import axios from 'axios';
import { loginUrl, registerUrl } from '../endpoints';
import storageService from './storageService';
import {tokenName} from '../constants';


class AuthenticationService {

    isAuthenticated() {
        return storageService.hasItem(tokenName);
    }

    logout() {
        storageService.removeItem(tokenName);
    }

    login(email, password) {
        if (!email || !password) {
            return;
        }
        const body = {
            email: email,
            password: password
        }
        return axios.post(loginUrl, body)
            .then((res) => { 
                const {token} = res.data;
                storageService.setItem(tokenName, token);
            })
            .catch(err => console.log(err));
        
    }

    register(name, email, password) {
        if (!name || !email || !password) {
            return;
        }
        const body = {
            name: name,
            email: email,
            password: password
        }
        return axios.post(registerUrl, body)
            .then((res) => { 
                const {token} = res.data;
                storageService.setItem(tokenName, token);
            })
            .catch(err => console.log(err));
    }
}

const authService = new AuthenticationService();

export default authService;