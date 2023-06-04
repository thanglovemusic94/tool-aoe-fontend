import React, {useEffect, useState} from "react";

import {useHistory} from "react-router-dom";
import XemHang from "../XemHang";
import {Button, Form, Input, Modal} from "antd";
import {useSelector} from "react-redux";
import EventService from "../../services/event.service";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ModalThongTinGiai from "./ModalThongTinGiai";

const Home = () => {
    const history = useHistory();
    const { isLoggedIn } = useSelector(state => state.auth);
    const dangkygiaidau = (eventData) => {
        console.log(eventData.eventCode)
        if (isLoggedIn){
            EventService.registerGiaiDau(eventData.eventCode).then(res =>{
                if (res.status == 200){
                    history.push("/danh-sach-dang-ky-giai", {statusDk: true, id: eventData.id})
                }
            }).catch(err => console.log(err))
        }else {
            history.push("/login", {checkDKGiai: true, eventCode: eventData.eventCode, id: eventData.id})
        }
    }

    const [dataEventNew, setDataEventNew] = useState(null);
    useEffect(() => {
        EventService.getEventNew().then(
            (response) => {
                setDataEventNew(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(dataEventNew)
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
                <div className={'d-flex justify-content-center'}>
                    <div className={'mr-5'}>
                        <p><b>Tham gia hội nhóm Zalo</b></p>
                        <a target={"_blank"} href={'https://www.facebook.com/groups/checovuive?gidzl=JdwW2sKOjsHDOgG8RmAqPK1XfWPq0RLbLspq1ojUipW4EwbMUWwpE5Gyg5OgN-ixL3_nLc8QL29QPHcqPW'}>
                            <img width={50} height={50} src="./fb2.png" alt=""/>
                        </a>
                    </div>
                    <div>
                        <p><b>Tham gia hội nhóm Facebookk</b></p>
                        <a target={"_blank"} href={'https://zalo.me/g/yscvjc094'}>
                            <img width={50} height={50} src="./Logo%20Zalo%20Arc.png" alt=""/>
                        </a>
                    </div>

                </div>
                <div className={'py-3 mt-3 text-center text-danger border border-1 border-danger' }>
                    <h3>Thông tin các giải đấu</h3>
                    {dataEventNew ?
                        <h4>
                            {dataEventNew.title}
                            <div>
                                <button className={'btn btn-sm btn-info w-75 mt-3'} onClick={()=>setIsModalOpen(true)}>Thông tin chi tết giải</button>
                                <Modal centered width={1000} title="Thông tin giải đấu"  open={isModalOpen}  onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)} >
                                    <ModalThongTinGiai data={dataEventNew} />
                                </Modal>

                            </div>
                            <div>
                                <button className={'btn btn-sm btn-info w-75 mt-3'} onClick={()=>dangkygiaidau(dataEventNew)}>Đăng Ký</button>
                            </div>
                            <div>
                                <button className={'btn btn-sm btn-success w-75 mt-3'} onClick={()=>history.push('/danh-sach-dang-ky-giai', {...dataEventNew})}>Danh Sách Đăng Ký</button>
                            </div>
                        </h4>:

                        <>chưa có giải đấu nào</>

                    }



                </div>
            </div>
            <div className="col-10">
                <div  className={'text-center mt-5'}>
                    <XemHang />
                </div>
            </div>
        </div>



    </div>
  );
};

export default Home;
