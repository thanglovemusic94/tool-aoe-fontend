import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://aoerank.ap-southeast-1.elasticbeanstalk.com/api/auth/review";
const API_URL2= "http://aoerank.ap-southeast-1.elasticbeanstalk.com/api/home";

const getAll = () => {
  return axios.get(API_URL2)
}

const getUserReview = (type) =>{
  return axios.get(API_URL+ "/user", {
    params: {
      type: type
    },
    headers: authHeader()
  });
}

const saveReview = (body) =>{
  return axios.post(API_URL+"/create", body, {
    headers: authHeader()
  });
}
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "token", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getUserReview,
  saveReview,
  getAll
};