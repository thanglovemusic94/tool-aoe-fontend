import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {register} from "../actions/auth";
import {useHistory} from "react-router-dom";

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

const vnickZalo = (value) => {
  if (value.length == 0) {
    return (
        <div className="alert alert-danger" role="alert">
          Nick Zalo không được để trống
        </div>
    );
  }
};

const vhovaten = (value) => {

  if (value.length == 0) {
    return (
        <div className="alert alert-danger" role="alert">
          Họ và tên không được để trống
        </div>
    );
  }
};

const vSdt = (value) => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9]|01[2|6|8|9])+([0-9]{8})\b/g;
  console.log(value.match(regexPhoneNumber))
  if (value.match(regexPhoneNumber) === false) {
    return (
        <div className="alert alert-danger" role="alert">
          Số điện thoại chưa đúng định dạng
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
  const [nickZalo, setNickZalo] = useState("");
  const [nickFb, setNickFb] = useState("");
  const [hovaten, setHovaten] = useState("");
  const [sdt, setSdt] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const history = useHistory()

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

  const onChangeNickZalo = (e) => {
    const nickZalo = e.target.value;
    setNickZalo(nickZalo);
  };

  const onChangeNickFb = (e) => {
    const nickFb = e.target.value;
    setNickFb(nickFb);
  };
  const onChangeSdt = (e) => {
    const sdt = e.target.value;
    setSdt(sdt);
  };

  const onChangeHovaten = (e) => {
    const ht = e.target.value;
    setHovaten(ht);
  };


  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(nickZalo, nickFb, sdt, hovaten, inGame, password, magt))
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
              <div  className="form-group">
                <label htmlFor="hovaten">Họ và Tên <span className={'text-danger'}>*</span></label>
                <Input
                    type="text"
                    className="form-control"
                    name="hovaten"
                    value={hovaten}
                    onChange={onChangeHovaten}
                    validations={[required, vhovaten]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sdt">Số Điện Thoại <span className={'text-danger'}>*</span></label>
                <Input
                    type="text"
                    className="form-control"
                    name="sdt"
                    value={sdt}
                    onChange={onChangeSdt}
                    validations={[required, vSdt]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inGame">inGame <span className={'text-danger'}>*</span></label>
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
                <label htmlFor="password">Mật Khẩu <span className={'text-danger'}>*</span></label>
                <Input
                    type="text"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="magt">Mã giới Thiệu <span className={'text-danger'}>*</span></label>
                <Input
                    placeholder={"Hỏi admin nhóm để lấy mã"}
                    type="text"
                    className="form-control"
                    name="magt"
                    value={magt}
                    onChange={onChangeMagt}
                    validations={[required, vMagt]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nickZalo">Nick Zalo</label>
                <Input
                    type="text"
                    className="form-control"
                    name="nickZalo"
                    value={nickZalo}
                    onChange={onChangeNickZalo}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nickFb">Nick Facebook </label>
                <Input
                    type="text"
                    className="form-control"
                    name="nickFb"
                    value={nickFb}
                    onChange={onChangeNickFb}
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
