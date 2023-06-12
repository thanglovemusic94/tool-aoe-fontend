import {Timeline} from "antd";
import {ClockCircleOutlined, DingtalkOutlined} from "@ant-design/icons";

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
                                            <li className={'font-weight-bold'}>21h - TEAM 7 vs TEAM 8</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>14/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 1 vs TEAM 2</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 3 vs TEAM 4</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 7 vs TEAM 6</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>15/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>21h - TEAM 5 vs TEAM 6</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>16/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 9 vs TEAM 10</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 11 vs TEAM 12</li>
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
                                            <li className={'font-weight-bold'}>20h - TEAM 1 vs TEAM 3</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 2 vs TEAM 4</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>18/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 6 vs TEAM 8</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 7 vs TEAM 5</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>19/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 9 vs TEAM 11</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 10 vs TEAM 12</li>
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
                                            <li className={'font-weight-bold'}>20h - TEAM 1 vs TEAM 4</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 2 vs TEAM 3</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>21/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>21h - TEAM 5 vs TEAM 8</li>
                                        </ul>
                                    </>
                                },
                                {
                                    dot: <ClockCircleOutlined style={{ fontSize: '18px' }} />,
                                    children: <>
                                        <h5>22/06/2023</h5>
                                        <ul>
                                            <li className={'font-weight-bold'}>20h - TEAM 9 vs TEAM 12</li>
                                            <li className={'font-weight-bold'}>21h - TEAM 10 vs TEAM 11</li>
                                        </ul>
                                    </>
                                }

                            ]}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h4 className={'text-center'}>Luật Chơi</h4>
                <p>Team4v4 Shang h&#7895;n m&atilde; kh&ocirc;ng th&agrave;nh ch&ograve;i.</p>

                <p>&#272;&#7901;i 3 ch&#7881; &#273;&#432;&#7907;c ph&eacute;p &#273;&aacute;nh Cung R &#7903; nh&agrave; BA ho&#7863;c X&#7885;c &#273;&#417;n ( Ng&#7921;a R) &#7903; nh&agrave; BL. l&ecirc;n 4 &#273;&#432;&#7907;c &#273;&aacute;nh c&aacute;c th&#7875; lo&#7841;i qu&acirc;n kh&aacute;c.</p>

                <p>C&aacute;c gamers c&#7911;a nh&oacute;m &#273;&atilde; &#273;&#259;ng k&yacute; tr&ecirc;n website v&agrave; &#273;&#432;&#7907;c &iacute;t nh&#7845;t 10 ng&#432;&#7901;i ch&#7845;m &#273;i&#7875;m tr&ecirc;n BXH &#273;&#432;&#7907;c quy&#7873;n tham gia.</p>

                <p>Gi&#7843;i c&oacute; 12 TEAM (48 Gamers) thi &#273;&#7845;u, &#273;&#432;&#7907;c chia th&agrave;nh 3 B&#7842;NG A B C.</p>

                <p>- V&ograve;ng B&#7843;ng : C&aacute;c &#273;&#7897;i thi &#273;&#7845;u v&ograve;ng tr&ograve;n t&iacute;nh &#273;i&#7875;m, M&#7895;i c&#7863;p &#273;&#7845;u s&#7869; &#273;&aacute;nh t&#7893;ng c&#7897;ng 4 Tr&#7853;n (04 game), &#273;&#7897;i th&#7855;ng &#273;&#432;&#7907;c 3 &#273;i&#7875;m, h&ograve;a ( 2-2) &#273;&#432;&#7907;c 1 &#273;i&#7875;m, thua 0 &#273;i&#7875;m.</p>

                <p>Ch&#7885;n ra &#273;&#7897;i nh&#7845;t nh&igrave; b&#7843;ng, c&ugrave;ng 2 &#273;&#7897;i v&#7883; tr&iacute; th&#7913; 3 c&oacute; th&agrave;nh t&iacute;ch t&#7889;t nh&#7845;t l&#7885;t v&agrave;o v&ograve;ng t&#7913; k&#7871;t.</p>

                <p>- V&ograve;ng T&#7913; k&#7871;t : Th&#7875; th&#7913;c ch&#7841;m 4 8 &#273;&#7897;i l&#7885;t v&agrave;o v&ograve;ng t&#7913; k&#7871;t s&#7869; b&#7889;c th&#259;m c&aacute;c c&#7863;p &#273;&#7845;u. ( Livestream b&#7889;c th&#259;m c&#7863;p &#273;&#7845;u t&#7913; k&#7871;t di&#7877;n ra v&agrave;o ng&agrave;y 21h ng&agrave;y 23/06/2023)</p>

                <p>T&#7913; K&#7871;t 1 : Di&#7877;n ra v&agrave;o 21h ng&agrave;y 24/06</p>

                <p>T&#7913; K&#7871;t 2 : Di&#7877;n ra v&agrave;o 21h ng&agrave;y 25/06</p>

                <p>T&#7913; K&#7871;t 3 : Di&#7877;n ra v&agrave;o 21h ng&agrave;y 26/06</p>

                <p>T&#7913; K&#7871;t 4 : Di&#7877;n ra v&agrave;o 21h ng&agrave;y 27/06</p>

                <p>- V&ograve;ng B&aacute;n k&#7871;t : Th&#7875; th&#7913;c ch&#7841;m 4</p>

                <p>B&aacute;n k&#7871;t 1 : &#273;&#7897;i th&#7855;ng T&#7913; k&#7871;t 1 vs &#273;&#7897;i th&#7855;ng T&#7913; k&#7871;t 2 Di&#7877;n ra v&agrave;o 21h ng&agrave;y 29/06</p>

                <p>B&aacute;n k&#7871;t 2 : &#273;&#7897;i th&#7855;ng T&#7913; k&#7871;t 3 vs &#273;&#7897;i th&#7855;ng T&#7913; k&#7871;t 4 Di&#7877;n ra v&agrave;o 21h ng&agrave;y 30/06</p>

                <p>- V&ograve;ng Chung k&#7871;t : 2 &#273;&#7897;i th&#7855;ng &#7903; B&aacute;n k&#7871;t thi &#273;&#7845;u ch&#7841;m 5 ch&#7885;n ra &#273;&#7897;i v&ocirc; &#273;&#7883;ch</p>

                <p>Di&#7877;n ra v&agrave;o 21h ch&#7911; nh&#7853;t ng&agrave;y 02/07/2023.</p>

                <p>&#272;&#7863;c bi&#7879;t tr&#7853;n Chung k&#7871;t s&#7869; &#273;&#432;&#7907;c BLV M&#7841;nh V&ocirc; T&igrave;nh b&igrave;nh lu&#7853;n tr&#7921;c ti&#7871;p tr&ecirc;n fanpage BLV M&#7841;nh V&ocirc; T&igrave;nh ( Page &#272;&#7871; Ch&#7871; chuy&ecirc;n LIVE k&egrave;o thi &#273;&#7845;u Vi&#7879;t Trung &#273;&#7881;nh cao)</p>
            </div>
            <div>
                <h4 className={'text-center'}>Kết Quả Thi Đấu Đang Cập Nhật ...</h4>
            </div>

        </>
    )
}

export default LichThiDau