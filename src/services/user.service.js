import axios from "axios";
import authHeader from "./auth-header";
import {stringify} from "../util/QueryUtil";

//const API_URL = "http://localhost:8080/api";
const API_URL = "http://toolaoe.ap-southeast-1.elasticbeanstalk.com/api";
const API_URL_AUTH= API_URL + "/auth";


const getAll = (paging) => {
  return axios.get(API_URL+"/home", {params: paging, paramsSerializer: paging => stringify(paging)})
}

const getDiemTrungBinh = (user_review_id) => {
  return axios.get(API_URL+"/home/diemtrungbinh", {params: {user_review_id: user_review_id}})
}

// const getAlDiemTrungBinh = (type, paging) => {
//   return axios.get(API_URL+"/home/diemtrungbinh", {params: {type, ...paging}, paramsSerializer: paging => stringify(paging)})
// }

const getAllMaGT = (paging) => {
  return axios.get(API_URL_AUTH+"/admin/magt", {
    params: paging,
    paramsSerializer: paging => stringify(paging),
    headers: authHeader()
  })
}

const getAllUsers = (paging) => {
  return axios.get(API_URL_AUTH+"/admin/users", {
    params: paging,
    paramsSerializer: paging => stringify(paging),
    headers: authHeader()
  })
}

const deleteUser = (in_game) => {
  return axios.delete(API_URL_AUTH+"/admin/user/" + in_game, {
    headers: authHeader()
  })
}

const createNewMaGT = () => {
  return axios.post(API_URL_AUTH+"/admin/magt", null, {
    headers: authHeader()
  })
}

const getUserReview = (type) =>{
  return axios.get(API_URL_AUTH+ "/user", {
    params: {
      type: type
    },
    headers: authHeader()
  });
}

const saveReview = (body) =>{
  return axios.post(API_URL_AUTH+"/review", body, {
    headers: authHeader()
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // getAlDiemTrungBinh,
  getDiemTrungBinh,
  deleteUser,
  getAllUsers,
  createNewMaGT,
  getAllMaGT,
  getUserReview,
  saveReview,
  getAll
}
