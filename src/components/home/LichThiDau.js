import {Timeline} from "antd";
import {ClockCircleOutlined, DingtalkOutlined} from "@ant-design/icons";
import KetQua from "./KetQua";


const LichThiDau = () =>{
    return (
        <>  <div className={'container'}>
               <div className="row">
                   <div className="col-10 mx-auto">
                       <h3 className={'mb-5 text-center'}>Bảng Xếp Hạng Giải Đấu</h3>

                   </div>
                   <div>
                       <img  className={'img-fluid'} src="/bangxephang.png" alt=""/>
                       {/*<div className="table-responsive">*/}
                       {/*<table className="table font-weight-bold">*/}
                       {/*    <thead>*/}
                       {/*    <tr>*/}
                       {/*        <th scope="col"></th>*/}
                       {/*        <th scope="col"></th>*/}
                       {/*        <th scope="col">Hạng A</th>*/}
                       {/*        <th scope="col">Hạng B</th>*/}
                       {/*        <th scope="col">Hạng C</th>*/}
                       {/*        <th scope="col">Hạng D</th>*/}
                       {/*    </tr>*/}
                       {/*    </thead>*/}
                       {/*    <tbody>*/}
                       {/*    <tr>*/}
                       {/*        <th scope="row" rowSpan={3}>Bảng A</th>*/}
                       {/*        <td>TEAM 1</td>*/}
                       {/*        <td>Thanh-Tran</td>*/}
                       {/*        <td>Slpm</td>*/}
                       {/*        <td>ChipChip_hp</td>*/}
                       {/*        <td>VN_TIEU_T_VUONG</td>*/}

                       {/*    </tr>*/}
                       {/*    <tr>*/}
                       {/*        <td>TEAM 2</td>*/}
                       {/*        <td>THUONG_tin</td>*/}
                       {/*        <td>ROSE_MESSENGER</td>*/}
                       {/*        <td>BN_KHA_BANH</td>*/}
                       {/*        <td>Pep</td>*/}
                       {/*    </tr>*/}

                       {/*    </tbody>*/}
                       {/*</table>*/}
                       {/*</div>*/}
                   </div>
               </div>
            </div>
            <h3 className={'my-5 text-center'}>Lịch Thi Đấu Vòng Bảng</h3>
            <div className={'container'}>
                <div className="row">
                    <div className="col-sm-10 col-md-4 mx-auto">
                        <Timeline
                            items={[
                                {
                                    dot: <DingtalkOutlined style={{ fontSize: '30px', transform: "scale(-1, 1);" }} className={'text-danger'} />,
                                    children: <>
                                        <h4>Lượt 1</h4>

                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>13/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>21h - TEAM 7 vs TEAM 8 - (2 - 2)</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>14/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h30h - TEAM 3 vs TEAM 4 - (0 - 4)</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 8 vs TEAM 6 - (3 - 1)</li>
                                            <li className={'font-weight-bold'}>20h30h - TEAM 10 vs TEAM 11 - (0- 4)</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>15/06/2023</h5>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>16/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>21h - TEAM 11 vs TEAM 12 (2- 2)</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 2 vs TEAM 3 (3-1)</li>
                                        </ul>
                                    </>
                                }
                            ]}
                        />
                    </div>
                    <div className="col-sm-10 col-md-4 mx-auto">
                        <Timeline
                            items={[
                                {
                                    dot: <DingtalkOutlined style={{ fontSize: '30px' }} className={'text-danger'} />,
                                    children: <>
                                        <h4>Lượt 2</h4>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>17/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 1 vs TEAM 3 (4-0 - team 3 có thành viên không thi đấu)</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>18/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'} >20h - TEAM 7 vs TEAM 6 ( 4 - 0 )</li>
                                            <li className={'font-weight-bold'} >20h - TEAM 2 vs TEAM 1 ( 4 - 0)</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>19/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 9 vs TEAM 11 (0 - 4)</li>
                                            <li className={'font-weight-bold'}>20h30 - TEAM 2 vs TEAM 4 (0 - 4)</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 10 vs TEAM 12 (1 - 3)</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 7 vs TEAM 5 (4 - 0)</li>
                                        </ul>
                                    </>
                                }

                            ]}
                        />
                    </div>
                    <div className="col-sm-10 col-md-4 mx-auto">
                        <Timeline
                            items={[
                                {
                                    dot: <DingtalkOutlined style={{ fontSize: '30px' }} className={'text-danger'} />,
                                    children: <>
                                        <h4>Lượt 3</h4>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>20/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 1 vs TEAM 4 (2 - 2)</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>21/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>21h - TEAM 5 vs TEAM 8 (1 - 3)</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 9 vs TEAM 10 (0 - 4)</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>22/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 9 vs TEAM 12 (0 - 4)</li>
                                            <li className={'font-weight-bold'}>20h - TEAM 5 vs TEAM 6</li>
                                        </ul>
                                    </>
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div>
                <h4 className={'text-center mb-5'}>Kết Quả Thi Đấu Cập Nhật ngày hôm qua 18/06</h4>
                <KetQua />
            </div>

        </>
    )
}

export default LichThiDau