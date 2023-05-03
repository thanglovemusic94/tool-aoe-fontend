import {Tabs} from "antd";
import ThaoTacTay from "./type/ThaoTacTay";
import {useState} from "react";

const ChamDiem = () => {

    const [key, setkey] = useState('THAO_TAC_TAY')
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
        }
    ];
  return (
      <>
          <Tabs defaultActiveKey={key} items={items} onChange={onChange} centered={true} />
      </>
  )
}

export default ChamDiem