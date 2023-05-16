import React, {useEffect, useState} from "react";

import UserService from "../services/user.service";
import {Badge, Button, Card, Col, Popconfirm, Row, Space, Table, Tag} from "antd";
import {Link, useNavigate} from "react-router-dom";
import DiemTrungBinhDetail from "./DiemTrungBinhDetail";

const Home = () => {
    let navigate = useNavigate();

  return (
    <div className="container">
        <div className={'d-flex justify-content-center'}>
            <div className={'mr-5'}>
                <p><b>Tham gia hội nhóm Zalo</b></p>
                <a target={"_blank"} href={'https://www.facebook.com/groups/checovuive?gidzl=JdwW2sKOjsHDOgG8RmAqPK1XfWPq0RLbLspq1ojUipW4EwbMUWwpE5Gyg5OgN-ixL3_nLc8QL29QPHcqPW'}>
                    <img width={100} height={100} src="./fb2.png" alt=""/>
                </a>
            </div>
            <div>
                <p><b>Tham gia hội nhóm Facebook</b></p>
                <a target={"_blank"} href={'https://zalo.me/g/yscvjc094'}>
                    <img width={100} height={100} src="./Logo%20Zalo%20Arc.png" alt=""/>
                </a>
            </div>

        </div>
        <div  className={'text-center mt-5'}>
            <Button onClick={()=>navigate('/xem-hang')} className={'bg-primary text-white'}>Xem Hạng</Button>
        </div>

    </div>
  );
};

export default Home;
