import React, {useEffect, useState} from "react";
import UserService from "../services/user.service";
import {Alert, Button, Col, InputNumber, Row, Slider, Table, Tag} from "antd";
import {Link} from "react-router-dom";

const DiemTrungBinhItem = ({type}) => {
    const columns = [
        {
            title: 'In Game',
            dataIndex: 'inGame',
            key: 'inGame',
            render: (text) => <b>{text}</b>,
            width: 200,
        },
        {
            title: 'Số người đánh giá',
            dataIndex: 'soNguoiDanhGia',
            key: 'soNguoiDanhGia',
            render: (text) => <b>{text}</b>,
            width: 200,
        },
        {
            title: 'Điểm Trung Bình',
            dataIndex: 'diemtrungbinh',
            key: 'diemtrungbinh',
            render: (item) => (
                <Row  className={'justify-content-center'}>

                    <Col span={6}>
                        <Slider
                            className={'tooltip.open'}
                            step={0.1}
                            railStyle={{color: "red", borderColor: "blue"}}
                            min={1}
                            max={10}
                            value={item}
                        />
                    </Col>
                    <Col span={2}>
                        <InputNumber

                            style={{
                                margin: '0 16px',
                            }}
                            value={item}
                        />
                    </Col>
                </Row>
            )
        }

    ];
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState({
        page: 0,
        size: 10
    });
    const onChange = (page) => {
        setPaging({...paging, page: page - 1})
    };

    console.log(data)

    const onShowSizeChange = (current, pageSize) => {
        setPaging({...paging, page: current-1, size: pageSize});
    };

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <Link>Trang trước</Link>;
        }
        if (type === 'next') {
            return <Link>Trang tiếp Theo</Link>;
        }
        return originalElement;
    };

    useEffect(() => {
        UserService.getAlDiemTrungBinh(type, paging).then(
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
        <div className={'container'}>
            {
                data ?
                    <Table bordered rowKey={obj => obj.user_review_id} columns={columns} dataSource={data?.content}
                           pagination={{
                               position: ["bottomCenter"],
                               itemRender: itemRender,
                               current: paging.page + 1,
                               pageSize: paging.size,
                               total: data?.totalElements,
                               onShowSizeChange: onShowSizeChange,
                               pageSizeOptions: [10, 20, 50, 100, 200],
                               onChange: (e) => onChange(e),
                               showSizeChanger: true
                           }}/> : <Row className={'justify-content-center'}><Alert className={'alert-info text-center'}
                                                                                   message={'Chưa có đánh giá nào'}></Alert></Row>
            }



        </div>
    )
}

export default DiemTrungBinhItem