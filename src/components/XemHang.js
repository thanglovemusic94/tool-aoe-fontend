import ThaoTacTay from "./type/ThaoTacTay";
import BangXepHangCaNhan from "./BangXepHangCaNhan";
import {Col, Row, Tabs} from "antd";
import {useState} from "react";
import BXH_22 from "./BXH_22";
import BXH_44 from "./BXH_44";
import BXH_SOLO from "./BXH_SOLO";

const XemHang = () => {
    const [key, setkey] = useState('BXH_CA_NHAN')
    const onChange = (key) => {
        setkey(key)
    };
    const items = [
        {
            key: 'BXH_CA_NHAN',
            label: `BXH Cá Nhân`,
            children: <BangXepHangCaNhan  />,
        },
        {
            key: 'BXH_SOLO',
            label: `BXH SOLO`,
            children: <BXH_SOLO type={key}/>,
        },
        {
            key: 'BXH_22',
            label: `BXH 22`,
            children: <BXH_22 type={key}/>,
        },
        {
            key: 'BXH_44',
            label: `BXH 44`,
            children: <BXH_44 type={key} />,
        },


    ];
    return (
        <Row>
            <Col xs={{ span: 24}} md={{ span: 24}}>
                <Tabs defaultActiveKey={key} items={items} onChange={onChange} centered={true} size={'large'}
                      renderTabBar={(props, TabNavList) => (
                          <TabNavList {...props} mobile={false} />
                      )}
                >
                </Tabs>
            </Col>

        </Row>
    )
}
export default XemHang

