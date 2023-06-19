import {Table} from "antd";

const KetQua = () =>{
    const columns = [
        {
            title: 'Bảng',
            dataIndex: 'bang',
            key: 'bang',
        },
        {
            title: 'Team',
            dataIndex: 'team',
            key: 'team',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số trận đã chơi',
            dataIndex: 'dd',
            key: 'dd',
            sorter: (a, b) => a.dd - b.dd,
        },
        {
            title: 'Thắng',
            dataIndex: 'thang',
            key: 'thang',

            //sorter: (a, b) => a.diem - b.diem,
        },
        {
            title: 'Hòa',
            dataIndex: 'hoa',
            key: 'hoa',
        },
        {
            title: 'Thua',
            dataIndex: 'thua',
            key: 'thua',
            sorter: (a, b) => a.thua - b.thua,
        },
        {
            title: 'Số trận thắng',
            dataIndex: 'st',
            key: 'st',
            sorter: (a, b) => a.st - b.st,
            //defaultSortOrder: "descend",
            // sorter: (a, b) => {
            //     return 1;
            // }
        },
        {
            title: 'Số trận thua',
            dataIndex: 'stt',
            key: 'stt',
            sorter: (a, b) => a.stt - b.stt,
        },
        {
            title: 'Hiệu số',
            dataIndex: 'hs',
            key: 'hs',
            render: (_, { st, stt}) =>
            {
                return <b > {st - stt} </b>
            }
        },
        {
            title: 'Điểm',
            dataIndex: 'diem',
            key: 'diem',
            //defaultSortOrder: 'descend',
            // sortDirections: ['descend'],
            // sortDirections: ['ascend'],
            //sorter: (a, b) => a.diem - b.diem,
            render: (_, { thang, thua, hoa }) =>
            {
                return <b > {thang*3 + hoa*1 - thua*0} </b>
            }
        },

    ];
    const data = [
        {
            key: '1',
            bang: 'A',
            team: 'TEAM 1',
            thang: 1,
            hoa: 0,
            thua: 0,
            st: 4,
            stt: 0,
            dd: 1,
        },
        {
            key: '2',
            bang: 'A',
            team: 'TEAM 2',
            thang: 1,
            hoa: 0,
            thua: 0,
            st: 3,
            stt: 1,
            dd: 1,
        },
        {
            key: '3',
            bang: 'A',
            team: 'TEAM 3',
            thang: 0,
            hoa: 0,
            thua: 1+1+1,
            st: 0+1+0,
            stt: 4+3+4,
            dd: 1+1+1,
        },
        {
            key: '4',
            bang: 'A',
            team: 'TEAM 4',
            thang: 1,
            hoa: 0,
            thua: 0,
            st: 4,
            stt: 0,
            dd: 1,
        },
        {
            key: '5',
            bang: 'B',
            team: 'TEAM 5',
            thang: 0,
            hoa: 0,
            thua: 0,
            st: 0,
            stt: 0,
            dd: 0,
        },
        {
            key: '6',
            bang: 'B',
            team: 'TEAM 6',
            thang: 0,
            hoa: 0,
            thua: 2,
            st: 1,
            stt: 3+4,
            dd: 2,
        },
        {
            key: '7',
            bang: 'B',
            team: 'TEAM 7',
            thang: 1,
            hoa: 1,
            thua: 0,
            st: 2+4,
            stt: 2+0,
            dd: 2,
        },
        {
            key: '8',
            bang: 'B',
            team: 'TEAM 8',
            thang: 1,
            hoa: 1,
            thua: 0,
            st: 2+3,
            stt: 2,
            dd: 2,
        },
        {
            key: '9',
            bang: 'C',
            team: 'TEAM 9',
            thang: 0,
            hoa: 0,
            thua: 0,
            st: 0,
            stt: 0,
            dd: 0,
        },
        {
            key: '10',
            bang: 'C',
            team: 'TEAM 10',
            thang: 0,
            hoa: 0,
            thua: 1,
            st: 0,
            stt: 4,
            dd: 1,
        },
        {
            key: '11',
            bang: 'C',
            team: 'TEAM 11',
            thang: 1,
            hoa: 1,
            thua: 0,
            st: 4+2,
            stt: 0+2,
            dd: 2,
        },
        {
            key: '12',
            bang: 'C',
            team: 'TEAM 12',
            thang: 0,
            hoa: 1,
            thua: 0,
            st: 2,
            stt: 2,
            dd: 1,
        },
    ];
    return (
        <>
            <Table rowKey={obj => obj.key} pagination={{
                position: ["bottomCenter"],
                pageSize: 20,
                pageSizeOptions: [10, 20, 50, 100, 200],
                showSizeChanger: true
            }} className={'font-weight-bold'} columns={columns} dataSource={data} />
        </>
    )
}

export default KetQua