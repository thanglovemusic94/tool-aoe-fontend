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
        <div className={'mb-5'}>
            <div className={'text-center'}>
                <Button onClick={onSubmit} disabled={buttonDisable} className={'btn btn-danger btn-sm mb-5'}>Lưu Thay Đổi</Button>
            </div>

            {
                data.length > 0 ? data.map((item, index) => {
                    return (
                        <Row key={index} className={'justify-content-center'}>
                            <Col xs={{span: 12}} md={{span: 2}}>
                                <b>{item.inGame}</b>
                            </Col>
                            <Col xs={{span: 1}} md={{span: 2}}>
                                <InputNumber
                                    step={0.1}
                                    min={0}
                                    max={10}
                                    style={{
                                        margin: '0 16px',
                                    }}
                                    value={item.point}
                                    onChange={(value) => onChange(value, index)}
                                />
                            </Col>
                            <Col xs={{span: 18}} md={{span: 15}} >
                                <Slider
                                    reverse={true}
                                    dots={true}
                                    step={0.1}
                                    min={0}
                                    max={10}
                                    onChange={(value) => onChange(value, index)}
                                    value={item.point}
                                />
                            </Col>

                        </Row>
                    )
                }) : <></>

            }

        </div>
    )
}

export default ThaoTacTay