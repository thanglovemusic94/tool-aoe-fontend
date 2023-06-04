export const localStorageManager = {
    setToken,
    getToken,
    removeToken,
    getPayloadToken

}

export const USER_TOKEN = "token"

function getPayloadToken() {
    return  getToken() ? getToken().token : null
}

function setToken(token) {
    localStorage.setItem(USER_TOKEN, token);
}

function getToken() {
    return JSON.parse(localStorage.getItem(USER_TOKEN));
}

function removeToken() {
    localStorage.removeItem(USER_TOKEN);
}










