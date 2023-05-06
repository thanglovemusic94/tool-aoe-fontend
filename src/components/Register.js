import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {register} from "../actions/auth";
import {Link, useNavigate} from "react-router-dom";
import {setMessage} from "../actions/message";
import UserService from "../services/user.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Không được để trống
      </div>
    );
  }
};



const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Tên game phải dài từ 3 -> 20 kí tự
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Mật khẩu phải dài từ 6 -> 20 kí tự
      </div>
    );
  }
};

const vMagt = (value) => {
  if (value.length != 6) {
    return (
        <div className="alert alert-danger" role="alert">
          Mã giới thiệu phải đủ 6 kí tự
        </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [inGame, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [magt, setMagt] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate()

// refresh


  const onChangeUsername = (e) => {
    const inGame = e.target.value;
    setUsername(inGame);
  };


  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeMagt = (e) => {
    const magth = e.target.value;
    setMagt(magth);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(inGame, password, magt))
        .then((res) => {
          setSuccessful(true);
        })
        .catch((err) => {
          setSuccessful(false);
        });
    }
  };
  useEffect(() => {

  }, []);

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="/age-of-empire-de-che-24-12-2020-3.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <h3 className={'text-center'}>Đăng Ký</h3>
        <Form onSubmit={handleRegister} ref={form}>
          {successful == false && (
            <div>
              <div className="form-group">
                <label htmlFor="inGame">inGame</label>
                <Input
                  type="text"
                  className="form-control"
                  name="inGame"
                  value={inGame}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Mật Khẩu</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="magt">Mã giới Thiệu</label>
                <Input
                    type="text"
                    className="form-control"
                    name="magt"
                    value={magt}
                    onChange={onChangeMagt}
                    validations={[required, vMagt]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Đăng Ký</button>
              </div>
            </div>
          )}

          {message &&
              <div className="form-group">
                <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                  {/*{message}*/}
                  {
                    message
                  }
                </div>
              </div>
          }


          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
