import React, {useState} from "react";
import UserService from "../services/user.service";
import {Button, Popconfirm, Space, Table, Tag} from "antd";
import ThaoTacTay from "./type/ThaoTacTay";

const DiemTrungBinhDetail = ({data}) => {
    const columnsDetail  =  [

        {
            title: 'Tiêu Chí',
            dataIndex: 'type',
            key: 'type',
            render: (text) => {
                if (text === 'THAO_TAC_TAY') {
                    return "Thao Tác Tay"
                }else if (text === 'EP_DOI'){
                    return "Ép Đời"
                }else if (text === 'PHAT_TRIEN'){
                    return "Phát Triển"
                }else if (text === 'THU_NHA'){
                    return "Thủ Nhà"
                }else if (text === 'CHIEN_THUAT'){
                    return "Chiến Thuật"
                }else if (text === 'DIEU_R'){
                    return "Điều R"
                }else if (text === 'DI_QUAN'){
                    return "Đi Quân"
                }
            },
        },
        {
            title: 'Số Người Đánh Giá',
            dataIndex: 'soNguoiDanhGia',
            key: 'soNguoiDanhGia',
            render: (text) => <b>{text}</b>,
        },
        {
            title: 'Điểm Trung Bình',
            dataIndex: 'diemtrungbinh',
            key: 'diemtrungbinh',
            render: (text) => <b>{text}</b>,
        }
    ]
    const [detail, setDetail] = useState([]);
    const showDetail = (id) => {


        UserService.getDiemTrungBinh(id).then(
            (response) => {
                setDetail(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
        console.log(id)
    }

    return (
        <>


                <Popconfirm
                    placement="right"
                    showCancel={false}
                    icon={<></>}
                    title={()=> <div className={'text-center'}><b className={'text-danger '}>{data.inGame} ____  {data.hang} ____ {data.diemtrungbinh}</b></div>}
                    description={()=> detail.length > 0 &&
                        <Table className={'table-responsive-sm'} pagination={false} bordered rowKey={detail.user_review_id} columns={columnsDetail} dataSource={detail} />
                    }
                >
                    <Space size="middle">
                        <Button size={'small'} type="primary" onClick={()=>showDetail(data.user_review_id)}>Xem chi tiết</Button>
                    </Space>
                </Popconfirm>


        </>
    )
}

export default DiemTrungBinhDetail