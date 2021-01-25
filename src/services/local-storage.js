import axios from 'axios';

import CONSTANT from '../constants';

class LocalStorage {
    static get(key) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await localStorage.getItem(key)
                resolve(response ? JSON.parse(response): null);
            } catch (error) {
                reject(error);
            }
        });
    }

    static post(key, data) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await localStorage.setItem(key, JSON.stringify(data))
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default LocalStorage;