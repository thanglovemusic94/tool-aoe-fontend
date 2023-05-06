import axios from "axios";

const API_URL = "http://localhost:8080/api";
const API_URL_AUTH= API_URL + "/auth";

const register = (inGame, password, maGT) => {
  return axios.post(API_URL+"/signup", {
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
