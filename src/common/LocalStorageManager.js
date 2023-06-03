export const sessionStorageManager = {
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
    sessionStorage.setItem(USER_TOKEN, token);
}

function getToken() {
    return JSON.parse(sessionStorage.getItem(USER_TOKEN));
}

function removeToken() {
    sessionStorage.removeItem(USER_TOKEN);
}










