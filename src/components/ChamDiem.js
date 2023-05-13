import {Col, Row, Tabs} from "antd";
import ThaoTacTay from "./type/ThaoTacTay";
import {useState} from "react";

const ChamDiem = () => {

    const [key, setkey] = useState('THAO_TAC_TAY')
    const [dataThaoTacTay, setDataThaoTacTay] = useState({})
    const [dataEpDoi, setDataEpDoi] = useState({})

    const onChange = (key) => {
        setkey(key)
    };
    const items = [
        {
            key: 'THAO_TAC_TAY',
            label: `TAO TÁC TAY`,
            children: <ThaoTacTay type={key} />,
        },
        {
            key: 'EP_DOI',
            label: `ÉP ĐỜI`,
            children: <ThaoTacTay type={key}/>,
        },
        {
            key: 'PHAT_TRIEN',
            label: `PHÁT TRIỂN`,
            children: <ThaoTacTay type={key} />,
        },
        {
            key: 'THU_NHA',
            label: `THỦ NHÀ`,
            children: <ThaoTacTay type={key}/>,
        },
        {
            key: 'CHIEN_THUAT',
            label: `CHIẾN THUẬT`,
            children: <ThaoTacTay type={key}/>,
        },
        {
            key: 'DIEU_R',
            label: `ĐIỀU R`,
            children: <ThaoTacTay type={key} />,
        },
        {
            key: 'DI_QUAN',
            label: `ĐI QUÂN`,
            children: <ThaoTacTay type={key}/>,
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

export default ChamDiem