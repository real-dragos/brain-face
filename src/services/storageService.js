

class StorageService {
    constructor(){
        this.storage = window.localStorage;
    }

    setItem(key, value){
        this.storage.setItem(key, value);
        
    }

    getItem(key){
        const value = this.storage.getItem(key);
        return value;
    }

    hasItem(key){
        const value = this.storage.getItem(key);
        return (value !== undefined && value !== null);
    }

    removeItem(key){
        this.storage.removeItem(key);
    }
}

const storageService = new StorageService();

export default storageService;