import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserService from "../services/user.service";
import {clearMessage, setMessage} from "../actions/message";
import {Badge, Button, Popconfirm, Select, Table, Tag} from "antd";
import {Link} from "react-router-dom";
import EventService from "../services/event.service";
import format from "../util/Format";

const DanhSachDangKyGiai = (props) => {
    const { user} = useSelector((state) => state.auth);
    const isAdmin = localStorage.getItem("role") ;
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

    const handleChange = (value, id) => {
        console.log(`selected ${value} - ${id}`);
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text) => <b>{text}</b>,
            sorter: (a, b) => a.stt - b.stt,
        },
        {
            title: 'Hạng 44',
            dataIndex: 'hang',
            key: 'hang',
            render: (text) => {
                if (text === 'A ') {
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
            sorter: (a, b) => {
                if (a.hang > b.hang) return -1;
                if (a.hang < b.hang) return 1;
                return 0;
            },
        },
        {
            title: 'Điểm Trung Bình',
            dataIndex: 'diemTrungBinh',
            key: 'diemTrungBinh',
            render: (text) => <b>{text}</b>,
            sorter: (a, b) => a.diemTrungBinh - b.diemTrungBinh,
        },
        {
            title: 'In Game',
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
            title: 'Số Điện Thoại',
            dataIndex: 'SDT',
            key: 'SDT',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Đóng Tiền Tham Gia',
            dataIndex: 'statusDongTien',
            key: 'statusDongTien',
            render: (_, record) =>
                <Select
                    bordered={false}
                    size={"small"}
                    defaultValue={record.statusDongTien}
                    style={{ width: 120 }}
                    disabled={(isAdmin && isAdmin === "ROLE_ADMIN") ? false : true}
                    onChange={(e) => handleChange(e, record.id)}
                    options={[
                        { value: 0, label: <span className={'badge badge-danger'}>chưa đóng</span>},
                        { value: 1, label: <span className={'badge badge-success'}>đã đóng</span>  },
                    ]}
                />,
            sorter: (a, b) => a.statusDongTien - b.statusDongTien,

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

    const [nhaTaiTro, setNhaTaiTro] = useState([]);
    const getNhaTaiTro = () =>{
        EventService.getNhaTaiTro().then(
            (response) => {
                setNhaTaiTro(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
    }
    const [tongTien, setTongTien] = useState();
    const getTongTien = () =>{
        EventService.getTongTien().then(
            (response) => {
                setTongTien(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
    }
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

        getTongTien();
        getNhaTaiTro()
    }, [paging]);

    console.log(tongTien)
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
            <div className={'d-flex justify-content-between'}>
                {tongTien &&
                    <ul className={'font-weight-bold '}>
                        <li >Tổng số tiền Đăng kí: <span className={'text-danger'}>{format.money(tongTien?.tongDaDongDong * 1000) } </span> </li>
                        <li>Tổng số tiền Tài Trợ:  <span className={'text-danger'}>{format.money(tongTien?.tongHoTroGiai * 1000) }</span> </li>
                        <li>Tổng: <span className={'text-danger'}>{format.money(tongTien?.tongTien * 1000) } </span> </li>
                    </ul>
                }



                        {nhaTaiTro.length &&
                          <div>
                                  <h4> Nhà tài trợ khác:</h4>
                                  <ul className={'font-weight-bold'}>

                                      {
                                          nhaTaiTro.map((v, i) =>  <li key={i}>{v.ten}<span className={'text-danger'}> :  {format.money(v.soTien*1000) } </span> </li>)
                                      }

                                  </ul>

                          </div>
                        }

            </div>
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