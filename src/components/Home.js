import React from "react";
import {Button} from "antd";
import {useHistory} from "react-router-dom";
import XemHang from "./XemHang";

const Home = () => {
    const history = useHistory();

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-2">
                <div className={'d-flex justify-content-center'}>
                    <div className={'mr-5'}>
                        <p><b>Tham gia hội nhóm Zalo</b></p>
                        <a target={"_blank"} href={'https://www.facebook.com/groups/checovuive?gidzl=JdwW2sKOjsHDOgG8RmAqPK1XfWPq0RLbLspq1ojUipW4EwbMUWwpE5Gyg5OgN-ixL3_nLc8QL29QPHcqPW'}>
                            <img width={50} height={50} src="./fb2.png" alt=""/>
                        </a>
                    </div>
                    <div>
                        <p><b>Tham gia hội nhóm Facebookk</b></p>
                        <a target={"_blank"} href={'https://zalo.me/g/yscvjc094'}>
                            <img width={50} height={50} src="./Logo%20Zalo%20Arc.png" alt=""/>
                        </a>
                    </div>

                </div>
            </div>
            <div className="col-10">
                <div  className={'text-center mt-5'}>
                    <XemHang />
                </div>
            </div>
        </div>



    </div>
  );
};

export default Home;
