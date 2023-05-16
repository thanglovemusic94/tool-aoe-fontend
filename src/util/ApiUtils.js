// import axios from "axios";
// import {stringify} from "./QueryUtil";
// import {sessionStorageManager} from "../common/sessionStorageManager";
//
// export const API = axios.create({
//     baseURL: 'http://localhost:8080/api',
//     responseType: "json",
//     paramsSerializer: params => stringify(params)
// })
//
// API.interceptors.request.use(
//     config => {
//         console.log("login api")
//         console.log(config)
//         const tokenString = sessionStorageManager.getPayloadToken()
//         if (tokenString) {
//             config.headers.Authorization = `Bearer ${tokenString}`;
//         }
//         return config;
//     },
//     error => Promise.reject(error)
// )
//
//
// API.interceptors.response.use(
//     response => {
//         return response
//     },
//     async (err) => {
//         if (err.response && err.response.status === 401) {
//             window.location.href = '/login';
//         }
//         return Promise.reject(err);
//     }
// )
//
//
//
