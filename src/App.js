import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, useLocation} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import "./demo.css";
import "./demo";


import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import TheLayout from "./components/layout/TheLayout";


const App = () => {


    const [showUserBoard, setShowUserBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

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


            <div >
                <Switch>
                    {/*<Route*/}
                    {/*    path="/roadApi"*/}
                    {/*    component={RoadSearchPopup}*/}
                    {/*    exact*/}
                    {/*/>*/}
                    <Route path="/" render={props => <TheLayout {...props}/>}/>
                    {/*<Route path="/dang-nhap" element={Register} />*/}
                    {/*<Route path="/dang-ki" element={<Login />} />*/}
                </Switch>
            </div>

            {/*<AuthVerify logOut={logOut}/>*/}
        </div>
    );
};

export default App;
