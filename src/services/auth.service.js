import axios from "axios";


const API_URL = "http://aoerank.ap-southeast-1.elasticbeanstalk.com/api/auth/";

const register = (inGame, password) => {
  return axios.post(API_URL + "signup", {
    inGame,
    password,
  });
};

const login = (inGame, password) => {
  return axios
    .post(API_URL + "signin", {
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
