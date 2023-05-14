import axios from "axios";
import {stringify} from "./QueryUtil";
import {LocalStorageManager} from "../common/LocalStorageManager";
axios.interceptors.request.use(
    config => {
        if (process.env.NODE_ENV == 'development'){
            config.baseURL =  'http://localhost:8080/api';
        }else {
            config.baseURL = 'http://toolaoe.ap-southeast-1.elasticbeanstalk.com/api';
        }

        config.responseType = 'json';
        config.paramsSerializer = (params) => {
            return stringify(params)
        };


        const tokenString = LocalStorageManager.getPayloadToken()
        if (tokenString) {
            config.headers.Authorization = `Bearer ${tokenString}`;
        }
        return config;
    },
    error => Promise.reject(error)
)


axios.interceptors.response.use(
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

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};




