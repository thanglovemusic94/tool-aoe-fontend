import React, {useEffect, useState} from 'react'
import TheHeader from './TheHeader'
import TheBody from './TheBody'
import TheFooter from './TheFooter'
import {useDispatch, useSelector} from 'react-redux'
import {Modal, Space} from "antd";
import {localStorageManager} from "../../common/LocalStorageManager";

export default function TheLayout() {
    // const [isLogined, setIsLogined] = useState(UserStorage.hasUserLocal())
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch()


    // check người dùng đã đóng tiền giải đấu với mã nào ? thì k hiển thị modal nữa

    const [isModalOpen2, setIsModalOpen2] = useState(sessionStorage.getItem('showM') ? false : true);
    console.log(isModalOpen2)
    const showModal2 = (id) => {
        setIsModalOpen2(true);
    };

    const handleOk2 = () => {
        setIsModalOpen2(false);
        sessionStorage.setItem("showM", false);
    };

    const handleCancel2 = () => {
        setIsModalOpen2(false);
        sessionStorage.setItem("showM", false);
    };


    return (
            <div>
                <TheHeader />
                <TheBody />
                <TheFooter />
                {/*<Modal centered={true} width={700} title={<h3 className={'text-center'}>Chuyển khoản - lệ phí tham gia giải đấu 50k/người</h3>} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>*/}
                {/*    <div className={'text-center'}>*/}
                {/*        <h5>Nội dung gửi: </h5>*/}
                {/*        <h4 style={{color: "red"}}>Tên InGame - Tên Zalo - Số tiền Tài trợ (nếu có)</h4>*/}
                {/*        <Space direction="vertical" align="center">*/}
                {/*            <img width={250} height={300}  src="/bk.jpg"/>*/}
                {/*        </Space>*/}
                {/*    </div>*/}
                {/*</Modal>*/}


                <Modal centered={true} width={500} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
                    <div className={'text-center'}>
                        <h1>Tài Trợ Giải Đấu 44 Hỗn Mã </h1>
                        <h5>Nội dung gửi:  <span style={{color: "red"}}>Tên InGame</span></h5>

                        <Space direction="vertical" align="center">
                            <img width={250} height={300}  src="/bk.jpg"/>
                        </Space>
                    </div>
                </Modal>
            </div>
    )
}
