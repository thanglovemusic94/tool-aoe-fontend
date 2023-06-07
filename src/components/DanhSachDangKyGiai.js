import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserService from "../services/user.service";
import {clearMessage, setMessage} from "../actions/message";
import {Select, Table, Tag} from "antd";
import {Link} from "react-router-dom";
import EventService from "../services/event.service";

const DanhSachDangKyGiai = (props) => {

    const statusDk = props.location.state?.statusDk
    const statusDk2 = props.location.state?.statusDk2

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (statusDk){
            dispatch(setMessage(`Đăng kí giải thành công`))
            setTimeout(() => {
                dispatch(clearMessage())
            }, 4000);
        }
        if (statusDk2){
            dispatch(setMessage(`Bạn đã đăng ký giải trước đó rồi`))
            setTimeout(() => {
                dispatch(clearMessage())
            }, 4000);
        }

    }, [statusDk]);



    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'In Game',
            dataIndex: 'inGame',
            key: 'inGame',
            render: (text) => <b>{text}</b>
        }, {
            title: 'Nick Zalo',
            dataIndex: 'nickZalo',
            key: 'nickZalo',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Đóng Tiền Tham Gia',
            dataIndex: 'statusDongTien',
            key: 'statusDongTien',
            render: (status) => {


                return (
                    <>
                        <Select
                            disabled
                            size={"small"}
                            defaultValue={status}
                            style={{ width: 120 }}
                            onChange={handleChange}
                            options={[
                                { value: false, label: 'chưa đóng'},
                                { value: true, label: 'đã đóng'  },
                            ]}
                        />
                    </>
                )
            }
        },
        {
            title: 'Số tiền đã đóng',
            dataIndex: 'daDong',
            key: 'daDong',
            render: (text) => {
                if (text == null || text == undefined){
                    return  <b></b>
                }else {
                    return  <b>{text}</b>
                }
            }
        },
        {
            title: 'Số tiền tài trợ',
            dataIndex: 'hoTroGiai',
            key: 'hoTroGiai',
            render: (text) => {
                if (text == null || text == undefined){
                    return  <b></b>
                }else {
                    return  <b>{text}</b>
                }
            }
        },

    ];
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState({
        page: 0,
        size: 50,
        sort: ['status,ASC', 'id,ASC']
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
        const idEvent = props.location.state?.id

        EventService.getAllRegisterGiaiDau(idEvent).then(
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
        <>
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

            <h3 className={'text-center'}>
                Danh sách đăng kí
            </h3>
            {
                data &&
                <Table className={'table-responsive-sm'} bordered rowKey={obj => obj.inGame} columns={columns} dataSource={data} pagination={{
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
        </>
    )

}

export default DanhSachDangKyGiai