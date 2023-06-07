import BangXepHang from "./BangXepHang";
import {Col, Row, Tabs} from "antd";
import {useState} from "react";

const XemHang = () => {
    const [key, setkey] = useState('BXH_44')
    const onChange = (key) => {
        setkey(key)
    };
    const items = [
        {
            key: 'BXH_44',
            label: `BXH 44`,
            children: <BangXepHang type={key} xh={'xh44'} />,
        },
        {
            key: 'BXH_SOLO',
            label: `BXH SOLO`,
            children: <BangXepHang type={key} xh={'solo'}/>,
        },
        {
            key: 'BXH_22',
            label: `BXH 22`,
            children: <BangXepHang type={key} xh={'xh22'}/>,
        },
        {
            key: 'BXH_CA_NHAN',
            label: `BXH Cá Nhân`,
            children: <BangXepHang type={key} xh={'null'} />,
        }

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

