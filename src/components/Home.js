import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import {Space, Table, Tag} from "antd";

const Home = () => {
    const columns = [
        {
            title: 'Vị Trí Top',
            dataIndex: 'rank',
            key: 'rank',
            render: (text) => <b>{text}</b>,
        },
        {
            title: 'In Game',
            dataIndex: 'inGame',
            key: 'inGame',
            render: (text) => <b>{text}</b>,
        },
        {
            title: 'Điểm Trung Bình',
            dataIndex: 'diemtrungbinh',
            key: 'diemtrungbinh',
            render: (text) => <b>{text}</b>,
        },

    ];
    const [data, setData] = useState([])

    useEffect(() => {
        UserService.getAll().then(
            (response) => {
                setData(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
    }, []);

  return (
    <div className="container">
        {
            data.length > 0 &&
            <Table columns={columns} dataSource={data} />
        }

    </div>
  );
};

export default Home;
