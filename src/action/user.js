export function setEmailPasswordForLogin(payload) {
    console.log(payload);
    return {
        type: 'SET_EMAIL_PASSWORD',
        payload
    };
}

export function loggedIn() {
    return {
        type: 'LOGGED_IN',
    };
}

export function loggedOut() {
    return {
        type: 'LOGGED_OUT',
    };
}