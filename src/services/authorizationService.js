import axios from 'axios';
import { userUrl, imageUrl } from '../endpoints';
import { tokenName } from '../constants';
import storageService from './storageService';

class AuthorizationService {

    getToken() {
        const token = storageService.getItem(tokenName);
        return token;
    }

    updateImageScore(image) {
        return axios.put(imageUrl, { image: image }, { headers: { Authorization: `Bearer ${this.getToken()}` } })
            .catch((err) => {
                if (err.response.status === 500) {
                    storageService.removeItem(tokenName);
                    window.location.reload();
                } else {
                    console.log(err);
                }
            });
    }

    loadUserData(cb = null) {
        return axios.get(userUrl, { headers: { Authorization: `Bearer ${this.getToken()}` } })
            .catch((err) => {
                if (err.response.status === 500) {
                    storageService.removeItem(tokenName)
                    window.location.reload();
                } else {
                    console.log(err);
                }
            });
    }
}

const authorizationService = new AuthorizationService();
export default authorizationService;