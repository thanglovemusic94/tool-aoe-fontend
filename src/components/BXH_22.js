import {Table, Tag} from "antd";
import DiemTrungBinhDetail from "./DiemTrungBinhDetail";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../services/user.service";

const BXH_22 = () => {
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
                }else if (text === 'A-'){
                    return <Tag color={'red-inverse'}>A-</Tag>
                }else if (text === 'B'){
                    return <Tag color={'green'}>B</Tag>
                }else if (text === 'B-'){
                    return <Tag color={'green-inverse'}>B-</Tag>
                }else if (text === 'C'){
                    return <Tag color={'cyan'}>C</Tag>
                }else if (text === 'C-'){
                    return <Tag color={'cyan-inverse'}>C-</Tag>
                }else if (text === 'D'){
                    return <Tag color={'purple'}>D</Tag>
                }else if (text === 'D-'){
                    return <Tag color={'purple-inverse'}>D-</Tag>
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
            title: 'Tổng Điểm',
            dataIndex: 'diemtrungbinh',
            key: 'diemtrungbinh',
            render: (text)  => <b>{text}</b>,
            sorter: (a, b) => a.diemtrungbinh - b.diemtrungbinh,
            // sortOrder: sortedInfo.columnKey === 'diemtrungbinh' ? sortedInfo.order : null,
        },
        // {
        //     title: 'Số người chấm điểm',
        //     dataIndex: 'soNguoiChamDiem',
        //     key: 'soNguoiChamDiem',
        //     render: (text)  => <b className={'text-right'}>{text}</b>,
        // },
        {
            title: 'Xem chi tiết ',
            key: 'user_review_id',
            render: (data)  => <DiemTrungBinhDetail data={data} />,
        }
    ];
    const [data, setData] = useState(null);

    const [paging, setPaging] = useState({
        page: 0,
        size: 100,
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
        UserService.getAll(paging, "xh22").then(
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
            <h3 className={'text-center my-3'}>Bảng Xếp Hạng 22</h3>
            {
                data &&
                <Table  className={'table-responsive-sm'}  bordered rowKey={obj => obj.user_review_id} columns={columns} dataSource={data?.content} pagination={{
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
    )

}

export default BXH_22