import React, {useEffect, useMemo, useState} from "react";

import {useHistory} from "react-router-dom";
import XemHang from "../XemHang";
import {Modal, notification, Space} from "antd";
import {useSelector} from "react-redux";
import EventService from "../../services/event.service";
import ModalThongTinGiai from "./ModalThongTinGiai";


const Home = () => {
    const history = useHistory();
    const { isLoggedIn } = useSelector(state => state.auth);

    const Context = React.createContext({
        name: 'Default',
    });

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement, data) => {
        api.info({
            message: data,
            // description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
            placement,
        });
    };
    const contextValue = useMemo(
        () => ({
            name: 'Ant Design',
        }),
        [],
    );

    const dangkygiaidau = (eventData) => {
        console.log(eventData.eventCode)
        if (isLoggedIn){
            EventService.registerGiaiDau(eventData.eventCode).then(res =>{
                if (res.status == 200){
                    history.push("/danh-sach-dang-ky-giai", {statusDk: true, id: eventData.id})
                }
            }).catch(err => {
                if(err.response.status == 400){
                    // success(err.response.data);
                    openNotification('bottomLeft', err.response.data)
                }
            })
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
                <div className={'position-fixed '} style={{marginTop: "10px"}}>
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
                    <div >
                        <div  className={'py-3 mt-5 text-center block ' } style={{ minHeight: "300px", color: "red", backgroundImage: "url(" +`https://c4.wallpaperflare.com/wallpaper/71/307/812/age-of-empires-ii-hd-wallpaper-preview.jpg` +")", backgroundSize: "cover"}} >
                            <h3 className={'text-white NeonLightText'}>Thông tin các giải đấu</h3>
                            {dataEventNew ?
                                <h4 className={'NeonLightText'}>
                                    {dataEventNew.title}
                                    <div className={'w-50 mx-auto'}>
                                        <button className={'btn btn-sm btn-outline-danger NeonLightText a-button-effect  w-100 mt-3'} onClick={()=>setIsModalOpen(true)}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Thông tin chi tết giải
                                        </button>
                                        <Modal centered width={1000} title={()=><div className={'text-white NeonLightText'}>Thông tin giải đấu</div>}  open={isModalOpen}  onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)} >
                                            <ModalThongTinGiai data={dataEventNew} />
                                        </Modal>

                                    </div>

                                    <div className={'w-50 mx-auto'}>

                                        <Context.Provider value={contextValue}>
                                            {contextHolder}
                                            <button className={'btn btn-sm btn-outline-danger NeonLightText a-button-effect w-100 mt-3'} onClick={()=>dangkygiaidau(dataEventNew)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Đăng Ký
                                            </button>
                                        </Context.Provider>
                                    </div>
                                    <div className={'w-50 mx-auto'}>
                                        <button className={'btn btn-sm btn-outline-danger NeonLightText a-button-effect  w-100 mt-3'} onClick={()=>history.push('/danh-sach-dang-ky-giai', {...dataEventNew})}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Danh Sách Đăng Ký
                                        </button>
                                    </div>


                                    {/*<Panel header="Chuyển khoản - lệ phí tham gia giải đấu  " key="5" style={panelStyle}>*/}
                                    {/*    <Space direction="vertical" align="center">*/}
                                    {/*        <img width={200} height={300}  src="/bk.jpg"/>*/}

                                    {/*    </Space>*/}
                                    {/*</Panel>*/}
                                </h4>:

                                <div className={'text-white'}>chưa có giải đấu nào</div>

                            }



                        </div>

                        <div className={'mt-5'}>
                            {/*<iframe width="100%" height="200" src="https://www.youtube.com/embed/lscNSnlh3w4?controls=1&autoplay=1"*/}
                            {/*        allow='autoplay'*/}

                            {/*        allowFullScreen*/}

                            {/*></iframe>*/}

                        </div>
                    </div>
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
