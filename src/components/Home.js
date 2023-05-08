import React, {useEffect, useState} from "react";

import UserService from "../services/user.service";
import {Badge, Button, Space, Table, Tag} from "antd";
import {Link} from "react-router-dom";
import {LocalStorageManager} from "../common/LocalStorageManager";

const Home = () => {
    const columns = [
        {
            title: 'Vị Trí Top',
            dataIndex: 'rank',
            key: 'rank',
            render: (text) => <b>{text}</b>,
        },
        {
            title: 'Hạng',
            dataIndex: 'hang',
            key: 'hang',
            render: (text) => {
                if (text === 'A') {
                    return <Tag color={'red'}>A</Tag>
                }else if (text === 'B'){
                    return <Tag color={'success'}>B</Tag>
                }else if (text === 'C'){
                    return <Tag color={'cyan'}>C</Tag>
                }else if (text === 'D'){
                    return <Tag color={'purple'}>D</Tag>
                }else return <Tag color={'default'}>{`chưa được tính hạng`}</Tag>
            },
        },
        {
            title: 'In Game',
            dataIndex: 'inGame',
            key: 'inGame',
            render: (text) => <b>{text}</b>,
        },
        {
            title: 'Nick Zalo',
            dataIndex: 'nickZalo',
            key: 'nickZalo',
            render: (text) => <b>{text}</b>,
        },
        {
            title: 'Tổng Điểm = (Điểm Trung Bình Các Tiêu Chí)',
            dataIndex: 'diemtrungbinh',
            key: 'diemtrungbinh',
            render: (text)  => <b>{text}</b>
        },
        // ,
        // {
        //     title: 'Xem chi tiết ',
        //     key: 'xemchitiet',
        //     render: (text)  => <Space size="middle">
        //         <Button size={'small'} type="primary">Xem chi tiết</Button>
        //     </Space>
        // }

    ];
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState({
        page: 0,
        size: 10,
        // sort: ['id,DESC']
    });


    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <Link>Trang trước</Link>;
        }
        if (type === 'next') {
            return <Link>Trang tiếp Theo</Link>;
        }
        return originalElement;
    };
    const onChange = (page) => {
        setPaging({...paging, page: page-1})
    };
    const onShowSizeChange = (current, pageSize) => {
        setPaging({...paging, page: current-1, size: pageSize});
    };

    useEffect(() => {
        UserService.getAll(paging).then(
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
    }, [paging]);

  return (
    <div className="container">
        {
            data &&
            <Table bordered rowKey={obj => obj.user_review_id} columns={columns} dataSource={data?.content} pagination={{
                position: ["bottomCenter"],
                itemRender: itemRender,
                current: paging.page + 1,
                pageSize: paging.size,
                total: data?.totalElements,
                onShowSizeChange: onShowSizeChange,
                pageSizeOptions: [10, 20, 50, 100, 200],
                onChange: (e) => onChange(e),
                showSizeChanger: true
            }} />
        }

    </div>
  );
};

export default Home;
