import {stringify} from "../util/QueryUtil";
import API from "../util/ApiUtils";



const API_URL_AUTH= "/auth";

const getAll = (paging) => {
  return API.get("/home", {params: paging, paramsSerializer: paging => stringify(paging)})
}

const getDiemTrungBinh = (user_review_id) => {
  return API.get("/home/diemtrungbinh", {params: {user_review_id: user_review_id}})
}

// const getAlDiemTrungBinh = (type, paging) => {
//   return axios.get(API_URL+"/home/diemtrungbinh", {params: {type, ...paging}, paramsSerializer: paging => stringify(paging)})
// }

const getAllMaGT = (paging) => {
  return API.get(API_URL_AUTH+"/admin/magt", {
    params: paging,
    paramsSerializer: paging => stringify(paging)
  })
}

const getAllUsers = (paging) => {
  return API.get(API_URL_AUTH+"/admin/users", {
    params: paging,
    paramsSerializer: paging => stringify(paging),
  })
}

const deleteUser = (in_game) => {
  return API.delete(API_URL_AUTH+"/admin/user/" + in_game)
}

const createNewMaGT = () => {
  return API.post(API_URL_AUTH+"/admin/magt", null)
}

const getUserReview = (type) =>{
  return API.get(API_URL_AUTH+ "/user", {
    params: {
      type: type
    }});
}

const saveReview = (body) =>{
  return API.post(API_URL_AUTH+"/review", body);
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
