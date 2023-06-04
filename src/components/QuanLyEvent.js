import {Modal, Popconfirm, Table} from "antd";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import EventService from "../services/event.service";
import {clearMessage, setMessage} from "../actions/message";
import {useDispatch, useSelector} from "react-redux";

import { Button, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const QuanLyEvent = () =>{


    const columns = [
        {
            title: 'Mã Sự Kiện',
            dataIndex: 'eventCode',
            key: 'eventCode',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Tên Sự Kiện',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <b>{text}</b>

        },

        {
            title: 'Chi tiết Sự Kiện',
            dataIndex: 'descriptionShort',
            key: 'descriptionShort',
            render: (text) => <div dangerouslySetInnerHTML={{__html: text}}></div>
        },

        {
            title: 'Chú Thích',
            dataIndex: 'note',
            key: 'note',
            render: (text) => <div dangerouslySetInnerHTML={{__html: text}}></div>
        },


        {
            title: 'Luật chơi',
            dataIndex: 'term',
            key: 'term',
            render: (text) => <div dangerouslySetInnerHTML={{__html: text}}></div>
        },

        {
            title: 'Ngày bắt đầu sự kiện',
            dataIndex: 'start',
            key: 'start',
            render: (text) => <b>{text}</b>
        },

        {
            title: 'Ngày kết thúc sự kiện',
            dataIndex: 'end',
            key: 'end',
            render: (text) => <b>{text}</b>
        },

        {
            title: 'Hành Động',
            render: (_, i) =>
                data?.content?.length >= 1 ? (
                    <Popconfirm okType={"danger"}   title={() => {
                        return `Bạn có chắc chắn muốn xóa sự kiện mã ${i.eventCode} này không`
                    }}
                                onConfirm={() => onClickDelete(i)}
                    >
                        <Button  size={'small'}  type={"primary"} >Xóa</Button>
                    </Popconfirm>
                ) : null,
        }


    ];
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const onClickDelete = (event) => {
        EventService.deleteEvent(event.id).then(r => {
            dispatch(setMessage(`Xóa sự kiện ${event.eventCode} thành công`))
            setPaging({...paging})
            setTimeout(() => {
                dispatch(clearMessage())
            }, 4000);
        }).catch(reason => {})
    }
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState({
        page: 0,
        size: 10,
        sort: ['id,DESC']
    });
    const onChange = (page) => {
        setPaging({...paging, page: page-1})
    };

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <Link>Trang trước</Link>;
        }
        if (type === 'next') {
            return <Link>Trang tiếp Theo</Link>;
        }
        return originalElement;
    };

    const onShowSizeChange = (current, pageSize) => {
        setPaging({...paging, page: current-1, size: pageSize});
    };
    useEffect(() => {
        EventService.getPageEvent(paging).then(
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
    }, [paging]);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataAdd, setDataAdd] = useState({})

    const saveData = (data) => {
        delete data.descriptionShort;
        delete data.term;
        delete data.note;

        const dataRegister = {...dataAdd, ...data}
        EventService.register(dataRegister).then(
            (response) => {
                console.log(response)
                setIsModalOpen(false)
                setPaging({...paging})
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

            }
        );
    }
    console.log(dataAdd)
    return (
        <>
            <div className="container">
                <h3 className={' text-center'}>Quản lý Event</h3>
                {message &&
                    <div className="form-group">
                        <div className={ "alert alert-success" } role="alert">
                            {/*{message}*/}
                            {
                                message
                            }
                        </div>
                    </div>
                }
                <div>
                    <h4>Danh sách event</h4>
                    <div className={'my-3'}>
                        <button type="button" className="btn btn-primary btn-sm" onClick={()=>setIsModalOpen(true)}>Thêm Sự kiện</button>

                        <Modal centered width={1000} title="Thêm sự kiện"  open={isModalOpen}  onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)} >
                            <Form
                                // onSubmitCapture={event => console.log(event)}
                                onFinish={data => saveData(data)}
                                name="wrap"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 20 }}
                                labelAlign="left"
                                labelWrap

                                colon={false}

                            >
                                <Form.Item
                                    label="Tên Sự Kiện"
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: "sự kiện không được để trống"
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>


                                <Form.Item
                                    label="Mô tả sự kiện "
                                    name="descriptionShort"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Mô tả sự kiện không được để trống"
                                        },
                                    ]}

                                >

                                        <CKEditor
                                            id={'descriptionShort'}
                                            editor={ ClassicEditor }
                                            // data="<p>Hello from CKEditor 5!</p>"
                                            // onReady={ editor => {
                                            //     // You can store the "editor" and use when it is needed.
                                            //     console.log( 'Editor is ready to use!', editor );
                                            // } }
                                            onChange={ ( event, editor ) => {
                                                const data = editor.getData();
                                                setDataAdd({...dataAdd, descriptionShort: data})
                                            } }

                                        />


                                </Form.Item>


                                <Form.Item
                                    label="Luật chơi"
                                    name="term"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Luật chơi không được để trống"
                                        },
                                    ]}
                                >

                                    <CKEditor
                                        id={'term'}
                                        editor={ ClassicEditor }
                                        // data="<p>Hello from CKEditor 5!</p>"
                                        // onReady={ editor => {
                                        //     // You can store the "editor" and use when it is needed.
                                        //     console.log( 'Editor is ready to use!', editor );
                                        // } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            setDataAdd({...dataAdd, term: data})
                                        } }

                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Chú thích"
                                    name="note"
                                >
                                    <CKEditor
                                        id={'note'}
                                        editor={ ClassicEditor }
                                        // data="<p>Hello from CKEditor 5!</p>"
                                        // onReady={ editor => {
                                        //     // You can store the "editor" and use when it is needed.
                                        //     console.log( 'Editor is ready to use!', editor );
                                        // } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            setDataAdd({...dataAdd, note: data})
                                        } }

                                    />
                                </Form.Item>

                                <Form.Item label=" ">
                                    <Button type="primary" htmlType="submit">
                                        Lưu dữ liệu
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                    {
                        data &&
                        <Table bordered rowKey={obj => obj.id} columns={columns} dataSource={data?.content} pagination={{
                            position: ["bottomCenter"],
                            itemRender: itemRender,
                            current: paging.page + 1,
                            pageSize: paging.size,
                            total: data?.totalElements,
                            onShowSizeChange: onShowSizeChange,
                            pageSizeOptions: [10, 20, 50, 100, 200],
                            onChange: (e) => onChange(e),
                            showSizeChanger: true
                        }} />
                    }
                </div>
            </div>
        </>
    )
}


export default QuanLyEvent