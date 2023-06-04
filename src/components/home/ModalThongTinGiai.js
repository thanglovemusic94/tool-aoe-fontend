import {Collapse, Input, QRCode, Space, theme} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import React from "react";

const { Panel } = Collapse;

const  ModalThongTinGiai = ({data}) => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

 
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{
                background: token.colorBgContainer,
            }}
        >
            <Panel header="Tên giải đấu " key="1" style={panelStyle} >
                <p>{data.title}</p>
            </Panel>
            <Panel header="Thông tin chi tiết" key="2" style={panelStyle}>
                <div dangerouslySetInnerHTML={{__html: data.descriptionShort}}></div>
            </Panel>
            <Panel header="Luật chơi" key="3" style={panelStyle}>
                <div dangerouslySetInnerHTML={{__html: data.term}}></div>
            </Panel>
            <Panel header="Chú ý" key="4" style={panelStyle}>
                <div dangerouslySetInnerHTML={{__html: data.note}}></div>
            </Panel>
            <Panel header="Chuyển khoản - lệ phí tham gia giải đấu  " key="5" style={panelStyle}>
                <h5>Nội dung gửi: </h5>
                <h4 style={{color: "red"}}>Tên InGame - Tên Zalo</h4>
                <Space direction="vertical" align="center">
                    <img width={200} height={300}  src="/bk.jpg"/>

                </Space>
            </Panel>
        </Collapse>
    );
}
export default ModalThongTinGiai