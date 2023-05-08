import ThaoTacTay from "./type/ThaoTacTay";
import {Tabs} from "antd";
import {useEffect, useState} from "react";
import DiemTrungBinhItem from "./DiemTrungBinhItem";
import UserService from "../services/user.service";

const DiemTrungBinh = () => {
    const [key, setkey] = useState('THAO_TAC_TAY')
    const onChange = (key) => {
        setkey(key)
    };
    const items = [
        {
            key: 'THAO_TAC_TAY',
            label: `TAO TÁC TAY`,
            children: <DiemTrungBinhItem type={key} />,
        },
        {
            key: 'EP_DOI',
            label: `ÉP ĐỜI`,
            children: <DiemTrungBinhItem type={key}/>,
        },
        {
            key: 'PHAT_TRIEN',
            label: `PHÁT TRIỂN`,
            children: <DiemTrungBinhItem type={"THAO_TAC_TAY"} />,
        },
        {
            key: 'THU_NHA',
            label: `THỦ NHÀ`,
            children: <DiemTrungBinhItem type={"THU_NHA"}/>,
        },
        {
            key: 'CHIEN_THUAT',
            label: `CHIẾN THUẬT`,
            children: <DiemTrungBinhItem type={"CHIEN_THUAT"}/>,
        },
        {
            key: 'DIEU_R',
            label: `ĐIỀU R`,
            children: <DiemTrungBinhItem type={"DIEU_R"} />,
        },
        {
            key: 'DI_QUAN',
            label: `ĐI QUÂN`,
            children: <DiemTrungBinhItem type={"DI_QUAN"}/>,
        }
    ];


    return (
        <>
            <Tabs  activeKey={key} items={items} onChange={onChange} centered={true} size={'large'} />
        </>
    )
}

export default DiemTrungBinh