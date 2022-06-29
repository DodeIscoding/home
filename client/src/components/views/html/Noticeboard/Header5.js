import React from 'react'
import "./Header5.css"
import ik from "../../pic/iksan.png"
import { Link } from 'react-router-dom'
import Menubar5 from './Menubar5'

export default function Header4() {
    return (
        <div className='Header'>
            <div className="iksan_img">
                <Link to="/" className="iksan_Link">
                    <div className="iksan_text_bundle">
                        <img src={ik} bordar={0} width={60} height={50} alt="" style={{ marginTop: '12px' }} />
                        <div className="iksan_text_box">
                            <p className="iksan_text">익산시교통정보센터</p>
                            <p className="iksan_text_eh">IKSAN City Traffic Imformation Center</p>
                        </div>
                    </div>
                </Link>
            </div>
            <Menubar5/>
        </div>
    );
}

