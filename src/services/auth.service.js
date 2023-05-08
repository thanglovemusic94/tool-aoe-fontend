import axios from "axios";

const API_URL = "http://toolaoe.ap-southeast-1.elasticbeanstalk.com/api";
const API_URL_AUTH= API_URL + "/auth";

const register = (nickZalo, inGame, password, maGT) => {
  return axios.post(API_URL+"/signup", {
    nickZalo,
    inGame,
    password,
    maGT
  });
};

const login = (inGame, password) => {
  return axios
    .post(API_URL + "/signin", {
      inGame,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
