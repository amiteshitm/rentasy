import api from '../api/index.js';
import { GET_USERDETAILS } from  "../api/apiEndPoint";

export const userDetails = () => async dispatch => {
    return new Promise((resolve, reject) => {
        api
            .get(GET_USERDETAILS)
            .then((response, error) => {
                dispatch(profile(response));
                resolve(response);
            })
            .catch(error => {
                dispatch(setLoadiing(false));
                reject(error);
            });
    });
};


export function setLoadiing(status) {
    return {
        status,
        type: 'SET_LOADING',
    };
}

export function profile(payload) {
    return {
        type: 'USER_LIST',
        data: payload,
    };
}
