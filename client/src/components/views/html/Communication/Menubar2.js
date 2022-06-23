import React from "react"
import bar2 from"./Menubar2.module.css";
import Parking from "../../pic/parking-svgrepo-com.svg"
import cctvimg from "../../pic/cctv-svgrepo-com.svg"
import message from "../../pic/message-svgrepo-com.svg"
import traffic from "../../pic/traffic-light-svgrepo-com.svg"
import { Link } from "react-router-dom"

export default function Menubar2() {
    return (

        
       <div className= {bar2.menu_list} >
           <Link to="/Communication" className={bar2.menu_link_2}>
                <div className= {bar2.img_1} >
                    <img className={bar2.icon_img} src={traffic} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className={bar2.menu_link_1}>소통정보</p>
                </div>
                <div className={bar2.menu_box_3}>
                    <div className={bar2.menu_box2}></div> 
                </div>
           </Link>
           <Link to="/CCTV" className={bar2.menu_link}>
           <div className={bar2.img_1}>
                    <img className={bar2.icon_img} src={cctvimg} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className={bar2.menu_link_1}>CCTV</p>
                </div>
                <div className={bar2.menu_box1}>
                    <div className={bar2.menu_box2}></div> 
                </div>
            </Link>
            <Link to="/Parking" className={bar2.menu_link}>
            <div className={bar2.img_1}>
                    <img className={bar2.icon_img} src={Parking} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className={bar2.menu_link_1}>주차장 정보</p>
                </div>
                <div className={bar2.menu_box1}>
                    <div className={bar2.menu_box2}></div> 
                </div>
            </Link>
            <Link to="/Noticeboard" className={bar2.menu_link}>
            <div className={bar2.img_1}>
                    <img className={bar2.icon_img} src={message} style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className={bar2.menu_link_1}>공지사항</p>
                </div>
                <div className={bar2.menu_box1}>
                    <div className={bar2.menu_box2}></div> 
                </div>
            </Link>
       </div>
    );
}

