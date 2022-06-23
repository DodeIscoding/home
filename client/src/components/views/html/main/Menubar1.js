import React from 'react'
import "../main/Menubar1.css";
import Parking from "../../pic/parking-svgrepo-com.svg"
import cctvimg from "../../pic/cctv-svgrepo-com.svg"
import message from "../../pic/message-svgrepo-com.svg"
import traffic from "../../pic/traffic-light-svgrepo-com.svg"
import { Link } from 'react-router-dom'

export default function Menubar1() {
    return (
       <div className='menu_list'>
           <Link to="/Communication" className="menu_link">
                <div className='img_1'>
                    <img className="icon_img" src={traffic} art="traffic_icon" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className='menu_link_1'>소통정보</p>
                </div>
                <div className='menu_box1'>
                    <div className='menu_box2'></div> 
                </div>
           </Link>
           <Link to="/CCTV" className="menu_link">
           <div className='img_1'>
                    <img className="icon_img" src={cctvimg} art="cctvimg_icon" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className='menu_link_1'>CCTV</p>
                </div>
                <div className='menu_box1'>
                    <div className='menu_box2'></div> 
                </div>
            </Link>
            <Link to="/Parking" className="menu_link">
            <div className='img_1'>
                    <img className="icon_img" src={Parking}  art="Parking_icon" style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className='menu_link_1'>주차장 정보</p>
                </div>
                <div className='menu_box1'>
                    <div className='menu_box2'></div> 
                </div>
            </Link>
            <Link to="/Noticeboard" className="menu_link">
            <div className='img_1'>
                    <img className="icon_img" src={message} art="message_icon"  style={{width: '25px', height: '25px', marginLeft: '25px'}} />
                    <p className='menu_link_1'>공지사항</p>
                </div>
                <div className='menu_box1'>
                    <div className='menu_box2'></div> 
                </div>
            </Link>
       </div>
    );
}

