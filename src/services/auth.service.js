
import {API} from "../util/ApiUtils";


const register = (nickZalo, nickFb, sdt, hovaten, inGame, password, maGT) => {
  return API.post("/signup", {
    nickZalo, nickFb, sdt, hovaten, inGame, password, maGT
  });
};

const login = (inGame, password) => {
  return API
    .post( "/signin", {
      inGame,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        sessionStorage.setItem("token", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  sessionStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
