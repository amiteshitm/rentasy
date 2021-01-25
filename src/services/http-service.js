import axios from 'axios';

import CONSTANT from './../constants';

class HttpService {
    static get(url, header) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(`${CONSTANT.BASE_URL}${url}`, {
                    header
                });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }

    static post(url, body, header) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(`${CONSTANT.BASE_URL}${url}`, body, {
                    header
                });
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default HttpService;