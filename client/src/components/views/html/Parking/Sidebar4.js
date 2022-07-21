import React, { useEffect, useState } from 'react'
import "../../html/move.css"
import arrow from "../../pic/arrow.svg"
import bar4 from "./Sidebar4.module.css"
import { move, search_on1, search_on2, input, output } from '../../js/back'
import Axios from 'axios'

export default function Sidebar4() {
    const [Address, setAddres] = useState()
    useEffect(() => {
        Axios.get("http://localhost:4000/address_list", {})
            .then((res) => {
                const { data } = res;
                setAddres(data.splice(0,100))
            })
    }, [])

    return (
        <div className={bar4.body_c}>
            <div id="body_but_box" className={bar4.body_but_box}>
                <div className={bar4.body_b}>
                    <div className={bar4.main}>
                        <div className={bar4.main_box}>
                            <div className={bar4.title_1_box} />
                            <p className={bar4.communication_info}>주차장 정보</p>
                        </div>
                    </div>
                    <div className={bar4.search_box}>
                        {/* 검색 선택창 */}
                        <div className={bar4.search_main}>
                            <div className={bar4.search_menu}>
                                <button id="simple_search" onClick={search_on1} className={bar4.simple_search}>간편검색</button>
                                <button id="area_search" onClick={search_on2} className={bar4.area_search}>지역검색</button>
                            </div>
                        </div>
                        <div className={bar4.search_box_1} />
                        {/* 검색창 */}
                        <div className={bar4.search}>
                            <div className={bar4.search_1}>
                                <p className={bar4.search_text}>도로명 <input onChange={input} id="input" className={bar4.search_input} type="text" maxLength={16} /></p>
                                <button onClick={output} className={bar4.search_button}>검색</button>
                            </div>
                        </div>
                    </div>
                    <div className={bar4.search_result}>
                        <div className={bar4.street}>
                            <div className={bar4.scroll}>
                                {Address && Address.map((element) => {
                                    return [
                                        <div className={bar4.address}>
                                            <p className={bar4.address_address}>익산시청 <br />제2청사</p>
                                            <div className={bar4.address_list}>
                                                <p className={bar4.address_address_1}>{element.도로명}</p> {/* 도로명 뒤에 건물번호가 있어야하는데 못찾음*/}
                                            </div>
                                        </div>
                                    ]
                                }
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div className={bar4.but_box}>
                    <button id={1} className={bar4.slide_button} onClick={move}>
                        <img id="slide_but_img" src={arrow} className={bar4.slide_but_img} />
                    </button>
                </div>
            </div>
        </div>
    )
}