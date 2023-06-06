import {Button, Popconfirm, Space, Table, Tag} from "antd";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../services/user.service";
import LoadingIcon from "antd/es/button/LoadingIcon";
import {DeleteOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage, setMessage} from "../actions/message";

const User = () => {
    const columns = [
        {
            title: 'Họ và tên',
            dataIndex: 'hovaten',
            key: 'hovaten',
            render: (text) => <b>{text}</b>
        },

        {
            title: 'Tên In Game',
            dataIndex: 'inGame',
            key: 'inGame',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Nick Zalo',
            dataIndex: 'nickZalo',
            key: 'nickZalo',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'sdt',
            key: 'sdt',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Nick Facebook',
            dataIndex: 'nickFb',
            key: 'nickFb',
            render: (text) => <b>{text}</b>
        },
        {
            title: ' ',
            key: '',
            // render: (text)  => <Space size="middle">
            //     <Button size={'small'}  type={"primary"}>Xóa</Button>
            // </Space>
            render: (_, record) =>
                data?.content?.length >= 1 ? (
                    <Popconfirm okType={"danger"}   title={() => {
                        return `Bạn có chắc chắn muốn xóa "  ${record.inGame} ", tất cả dữ liệu liên quan " ${record.inGame} " được xóa sạch?`
                    }}
                                onConfirm={() => onClickDelete(record.inGame)}
                    >
                        <Button  size={'small'}  type={"primary"} >Xóa</Button>
                    </Popconfirm>
                ) : null,
        }


    ];
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    console.log(message)
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState({
        page: 0,
        size: 50,
        // sort: ['status,DESC', 'id,DESC']
    });

    const onClickDelete = (in_Game) => {

            UserService.deleteUser(in_Game).then(r => {
                dispatch(setMessage(`Xóa ${in_Game} thành công`))
                setPaging({...paging})
                setTimeout(() => {
                    dispatch(clearMessage())
                }, 7000);
            }).catch(reason => {})
    }

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
        UserService.getAllUsers(paging).then(
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
            {message &&
                <div className="form-group">
                    <div className={ "alert alert-success" } role="alert">
                        {/*{message}*/}
                        {
                            message
                        }
                    </div>
                </div>
            }
            {
                data &&
                <Table className={'table-responsive-sm'} bordered rowKey={obj => obj.id} columns={columns} dataSource={data?.content} pagination={{
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
}

export default User