import axios from "axios";
import {stringify} from "./QueryUtil";
import {localStorageManager} from "../common/LocalStorageManager";


export const API = axios.create({
    //baseURL: process.env.URL_API_ENDPOINT,
    //baseURL: `http://localhost:8080/api`,
    baseURL: `http://toolaoe.ap-southeast-1.elasticbeanstalk.com/api`,
    responseType: "json",
    paramsSerializer: params => stringify(params)
})

    API.interceptors.request.use(
    config => {
        const tokenString = localStorageManager.getPayloadToken();
        if (tokenString) {
            config.headers.Authorization = `Bearer ${tokenString}`;
        }
        return config;
    },
    error => Promise.reject(error))


API.interceptors.response.use(
    response => {
        return response
    },
    async (err) => {
        if (err.response && err.response.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
)



