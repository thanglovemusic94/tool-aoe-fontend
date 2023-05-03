import {Button, Col, InputNumber, Row, Slider} from "antd";
import {useEffect, useState} from "react";
import UserService from "../../services/user.service";

const ThaoTacTay = ({type}) => {
    const [data, setData] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(true)
    const [listIndex, setListIndex] = useState([]);
    const [refresh, setFresh] = useState(false)
    const onChange = (newValue, index) => {
        data[index].point = newValue;
        setData([...data]);
        listIndex.push(index)
        setButtonDisable(false);
    };

    const onSubmit = () => {
        const newList = Array.from(new Set(listIndex));
        const newListData = data.filter((value, index) => {
            if (newList.indexOf(index) != -1){
                return value;
            }
        })

        UserService.saveReview(newListData).then(
            (response) => {
                setListIndex([])
                setFresh(!refresh)
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
        // dung khi call api luu success setListIndex([]);
    };

    useEffect(() => {
    UserService.getUserReview(type).then(
        (response) => {
            setData(response.data);
        },
        (error) => {
            const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();

        }
    );
    }, [refresh]);
    return (
        <>
            <div className={'text-center'}>
                <Button onClick={onSubmit} disabled={buttonDisable} className={'btn btn-danger btn-sm'}>Lưu Thay Đổi</Button>
            </div>

            {
                data.length > 0 ? data.map((item, index) => {
                    return (
                        <Row key={index} className={'justify-content-center'}>
                            <Col span={3}>
                                <b>{item.inGame}</b>
                            </Col>
                            <Col span={6}>
                                <Slider
                                    min={1}
                                    max={10}
                                    onChange={(value) => onChange(value, index)}
                                    value={item.point}
                                />
                            </Col>
                            <Col span={3}>
                                <InputNumber
                                    min={1}
                                    max={10}
                                    style={{
                                        margin: '0 16px',
                                    }}
                                    value={item.point}
                                    onChange={(value) => onChange(value, index)}
                                />
                            </Col>
                        </Row>
                    )
                }) : <></>

            }

        </>
    )
}

export default ThaoTacTay