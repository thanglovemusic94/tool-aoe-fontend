export const LocalStorageManager = {
    setToken,
    getToken,
    removeToken,
    getPayloadToken

}

export const USER_TOKEN = "token"

function getPayloadToken() {
    return getToken().token
}

function setToken(token) {
    localStorage.setItem(USER_TOKEN, JSON.parse(token));
}

function getToken() {
    return localStorage.getItem(USER_TOKEN);
}

function removeToken() {
    localStorage.removeItem(USER_TOKEN);
}










