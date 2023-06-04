import {Collapse, theme} from "antd";
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
        </Collapse>
    );
}
export default ModalThongTinGiai