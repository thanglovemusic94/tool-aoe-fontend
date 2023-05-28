import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {clearMessage} from "../../actions/message";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth";
import EventBus from "../../common/EventBus";

const TheHeader = () => {

    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch()



    const [showUserBoard, setShowUserBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);

    console.log(currentUser)
    let location = useLocation();

    useEffect(() => {
        if (["/dang-nhap", "/dang-ki"].includes(location.pathname)) {
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
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to={"/"} className="navbar-brand">
                {/*<img width={50} src={"kiem1.svg"} color={"danger"}/>*/}
                🏆  𝒞𝒽ế 𝒞ỏ - 𝒱𝓊𝒾 𝒱ẻ - 𝐿ị𝒸𝒽 𝒮ự  🏆
            </Link>

            <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
                <ul className="navbar-nav mr-auto text-center">
                    <li className="nav-item ">
                        <Link to={"/home"} className="nav-link">
                            Trang Chủ
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
                        <div >
                            <li className="nav-item  d-inline-block">
                                <Link to={"/quan-ly-magt"} className="nav-link">
                                    Quản lý mã giới thiệu
                                </Link>
                            </li> _

                            <li  className="nav-item d-inline-block">
                                <Link to={"/quan-ly-user"} className="nav-link">
                                    Quản lý Người Dùng
                                </Link>
                            </li>

                        </div>

                    }


                </ul>

                {currentUser ?
                    <div className="navbar-nav text-center">
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
                    :

                    <div className="navbar-nav text-center">
                        <li className="nav-item d-inline my-3">
                            <Link to={"/login"} className="nav-link d-inline">
                                Đăng Nhập
                            </Link>
                        </li>

                        <li className="nav-item d-inline my-3">
                            <Link to={"/register"}  className="nav-link d-inline">
                                Đăng Ký
                            </Link>
                        </li>
                    </div>

                }

            </div>
        </nav>
    )
}

export default TheHeader
