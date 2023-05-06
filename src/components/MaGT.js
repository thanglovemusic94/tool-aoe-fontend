import {Button, Space, Table, Tag} from "antd";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../services/user.service";
import LoadingIcon from "antd/es/button/LoadingIcon";

const MaGT = () => {
    const columns = [
        {
            title: 'Mã giới thiệu',
            dataIndex: 'code',
            key: 'code',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Hiệu Lực',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                if (status === 'HET_HIEU_LUC'){
                    return <Tag color={'red'}> hết hiệu lực </Tag>
                }else {
                    return <Tag color={'green-inverse'}> còn hiệu lực </Tag>
                }
            }
        },
        {
            title: 'Chú Thích',
            dataIndex: 'note',
            key: 'note',
            render: (text) => {
                if (text){
                    return  <b>{text}</b>
                }else {
                    return  "chưa ai dùng";
                }
            }
        },

    ];
    const [data, setData] = useState(null);
    const [paging, setPaging] = useState({
        page: 0,
        size: 10,
        sort: ['status,DESC', 'id,DESC']
    });

    const [loadings, setLoadings] = useState(false);


    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <Link>Trang trước</Link>;
        }
        if (type === 'next') {
            return <Link>Trang tiếp Theo</Link>;
        }
        return originalElement;
    };
    const onChange = (page) => {
        setPaging({...paging, page: page-1})
    };
    const onCickAddCode = () => {
        setLoadings(true);
        setTimeout(() => {
            UserService.createNewMaGT().then(r => {
                setLoadings(false);
                setPaging({...paging})
            }).catch(reason => {setLoadings(false);})
        }, 6000);
    };
    const onShowSizeChange = (current, pageSize) => {
        setPaging({...paging, page: current-1, size: pageSize});
    };

    useEffect(() => {
        UserService.getAllMaGT(paging).then(
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

    return (
        <div className="container">
            <div> <Button className={"btn-primary btn-sm text-white mb-3"}  loading={loadings} onClick={onCickAddCode} icon={<LoadingIcon />}>Tạo Mã Mới</Button></div>
            {
                data &&
                <Table rowKey={obj => obj.user_review_id} columns={columns} dataSource={data?.content} pagination={{
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
    );
}

export default MaGT