import React from 'react'
import arrow from "../../pic/arrow.svg"
import bar1 from "./Sidebar1.module.css"
import "../../html/move.css"
import { move } from '../../js/back'
import { Link } from 'react-router-dom'

export default function Sidebar1() {
    return (
            <div className={bar1.body_c}>
                <div id="body_but_box" className={bar1.body_but_box}>
                    <div className={bar1.body_b}>
                        {/* 주요 지체정보 */}
                        <div className={bar1.title}>
                            <div className={bar1.title_1_box} />
                            <p className={bar1.title_1}>주요 지체정보</p>
                        </div>
                        {/* 주소 */}
                        <div className={bar1.address}>
                            <div className={bar1.scroll}>
                                <div className={bar1.address_list}>
                                    <div className={bar1.address_box}>
                                        <div className={bar1.address_list_box}>
                                            <div className={bar1.state}>
                                                <div className={bar1.state_box_1}>
                                                    <p className={bar1.state_name_1}>정체</p>
                                                </div>
                                            </div>
                                            <p className={bar1.address_name}>안덕원로</p>
                                        </div>
                                        <div className={bar1.address_list_box2}>
                                            <p className={bar1.road_address_1}>[기린로4가~ 전북광장]</p>
                                            <p className={bar1.road_address}>10km/h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={bar1.address_list}>
                                    <div className={bar1.address_box}>
                                        <div className={bar1.address_list_box}>
                                            <div className={bar1.state}>
                                                <div className={bar1.state_box_1}>
                                                    <p className={bar1.state_name_1}>정체</p>
                                                </div>
                                            </div>
                                            <p className={bar1.address_name}>안덕원로</p>
                                        </div>
                                        <div className={bar1.address_list_box2}>
                                            <p className={bar1.road_address_1}>[기린로4가~ 전북광장]</p>
                                            <p className={bar1.road_address}>10km/h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={bar1.address_list}>
                                    <div className={bar1.address_box}>
                                        <div className={bar1.address_list_box}>
                                            <div className={bar1.state}>
                                                <div className={bar1.state_box_1}>
                                                    <p className={bar1.state_name_1}>정체</p>
                                                </div>
                                            </div>
                                            <p className={bar1.address_name}>안덕원로</p>
                                        </div>
                                        <div className={bar1.address_list_box2}>
                                            <p className={bar1.road_address_1}>[기린로4가~ 전북광장]</p>
                                            <p className={bar1.road_address}>10km/h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={bar1.address_list}>
                                    <div className={bar1.address_box}>
                                        <div className={bar1.address_list_box}>
                                            <div className={bar1.state}>
                                                <div className={bar1.state_box_1}>
                                                    <p className={bar1.state_name_1}>정체</p>
                                                </div>
                                            </div>
                                            <p className={bar1.address_name}>안덕원로</p>
                                        </div>
                                        <div className={bar1.address_list_box2}>
                                            <p className={bar1.road_address_1}>[기린로4가~ 전북광장]</p>
                                            <p className={bar1.road_address}>10km/h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 공지사항 */}
                        <div className={bar1.announcement}>
                            <div className={bar1.announcemen_box} />
                            <p className={bar1.title_2}>공지사항</p>
                        </div>
                        {/* 공지사항 내용 */}
                        <div className={bar1.Contents}>
                        <Link to="">
                            <div>
                                <div className={bar1.Contents_box}>
                                    <p className={bar1.Contents_text}>익산시 교통정보센터에서 알립니다. </p>
                                    <p className={bar1.Contents_date}>22-03-12</p>
                                </div>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className={bar1.but_box}>
                        <button id={1} className={bar1.slide_button} onClick={move}>
                            <img id="slide_but_img" src={arrow} className={bar1.slide_but_img} />
                        </button>
                    </div>
                </div>
            </div>
    )
}