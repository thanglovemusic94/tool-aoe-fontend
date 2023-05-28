import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {login} from "../actions/auth";
import {setMessage} from "../actions/message";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Không Được Để Trống
      </div>
    );
  }
};

const Login = (props) => {
  const history = useHistory()
  const form = useRef();
  const checkBtn = useRef();

  const [inGame, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const inGame = e.target.value;
    setUsername(inGame);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  console.log(checkBtn.current.context._errors.length)
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(inGame, password))
        .then(() => {
          history.push("/cham-diem")
          window.location.reload();
        })
        .catch(() => {
          dispatch(setMessage("Lỗi, vui lòng đăng nhập lại "))

          setLoading(false);
        });
    } else {

      setLoading(false);
    }
  };

  if (isLoggedIn) {
    history.push("/profile")
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="/giphy.gif"
          alt="profile-img"
          className="profile-img-card"
        />
        <h3 className={'text-center'}>Đăng Nhập</h3>
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="inGame">InGame</label>
            <Input
              type="text"
              className="form-control"
              name="inGame"
              value={inGame}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật Khẩu</label>
            <Input
              type="text"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>


            <div className="form-group">


                {message &&
                    <>
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                    </>


                }

            </div>

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;
