import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import ChamDiem from "./components/ChamDiem";
import MaGT from "./components/MaGT";
import User from "./components/User";
import DiemTrungBinhItem from "./components/DiemTrungBinhItem";
import DiemTrungBinh from "./components/DiemTrungBinh";

const App = () => {


  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log("user", currentUser)

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowUserBoard(true)
    } else {
      setShowUserBoard(false)
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Đế Chế Cỏ Lịch Sự
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Xem Hạng
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/diem-trung-binh"} className="nav-link">
              Điểm Trung Bình
            </Link>
          </li>
          {
              currentUser &&
              <li className="nav-item">
                <Link to={"/cham-diem"} className="nav-link">
                  Chấm Điểm
                </Link>
              </li>
          }

          {
              currentUser && currentUser.roles?.indexOf('ROLE_ADMIN') != -1 &&
             <>
               <li className="nav-item">
                 <Link to={"/quan-ly-magt"} className="nav-link">
                   Quản lý mã giới thiệu
                 </Link>
               </li>

               <li className="nav-item">
                 <Link to={"/quan-ly-user"} className="nav-link">
                   Quản lý Người Dùng
                 </Link>
               </li>

             </>

          }

        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                Đăng Xuất
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Đăng Nhập
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"}  className="nav-link">
                Đăng Ký
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container-fluid-sm mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cham-diem" element={<ChamDiem />} />
          <Route path="/quan-ly-magt" element={<MaGT />} />
          <Route path="/quan-ly-user" element={<User />} />
          <Route path="/diem-trung-binh" element={<DiemTrungBinh />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
