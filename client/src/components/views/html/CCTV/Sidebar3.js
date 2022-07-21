import React, { useEffect, useState } from 'react'
import "../move.css"
import arrow from "../../pic/arrow.svg"
import bar3 from "./Sidebar3.module.css"
import Axios from 'axios'
import { move, search_on1, search_on2, road_Selection_1, road_Selection_2, input, output } from '../../js/back'

export default function Sidebar3() {
    const [Address, setAddres] = useState()
    useEffect(() => { 
    Axios.get("http://localhost:4000/address_list", {})
        .then((res) => {
            const { data } = res;
            setAddres(data.splice(0,100))
        })
    },[])
    return (
        <div className={bar3.body_c}>
            <div id="body_but_box" className={bar3.body_but_box}>
                <div className={bar3.body_b}>
                    <div className={bar3.main}>
                        <div className={bar3.main_box}>
                            <div className={bar3.title_1_box} />
                            <p className={bar3.communication_info}>CCTV</p>
                        </div>
                    </div>
                    {/* 검색창 코드들 */}
                    <div id="search_box" className={bar3.search_box}>
                        {/* 검색 선택창 */}
                        <div className={bar3.search_main}>
                            <div className={bar3.search_menu}>
                                <button id="simple_search" onClick={search_on1} className={bar3.simple_search}>간편검색</button>
                                <button id="area_search" onClick={search_on2} className={bar3.area_search}>지역검색</button>
                            </div>
                        </div>
                        <div className={bar3.search_box_1} />
                        {/* 검색창 */}
                        <div className={bar3.search}>
                            <div className={bar3.search_1}>
                                <p className={bar3.search_text}>도로명 <input onChange={input} id="input" className={bar3.search_input} type="text" maxLength={16} /></p>
                                <div className={bar3.road_Selection}>
                                    <p id="search_text" className={bar3.search_text_2}>주요도로</p>
                                    <button onClick={road_Selection_1} className={bar3.road_Selection_1}>고속도로</button>
                                    <button onClick={road_Selection_2} className={bar3.road_Selection_2}>주요도로</button>
                                </div>
                                <button onClick={output} className={bar3.search_button}>검색</button>
                            </div>
                        </div>
                    </div>
                    {/* 검색 결과들 */}
                    <div className={bar3.search_result}>
                        <div className={bar3.street}>
                            <div className={bar3.scroll}>

                                {Address && Address.map((element) => {
                                    return [
                                        <div className={bar3.address}>
                                            <p className={bar3.address_address}>{element.도로명}</p>
                                            <div className={bar3.address_list}>
                                                <p className={bar3.address_addres_1}>평화동 시외버스터미널 앞</p>  {/* 위치 잡는 법을 모르기 때문에 일단 냅뒴*/}
                                                <p className={bar3.address_addres_2}>~동산동 동산교</p>
                                            </div>
                                        </div>
                                    ]
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={bar3.but_box}>
                    <button id={1} className={bar3.slide_button} onClick={move}>
                        <img id="slide_but_img" src={arrow} className={bar3.slide_but_img} />
                    </button>
                </div>
            </div>
        </div>
    )
}