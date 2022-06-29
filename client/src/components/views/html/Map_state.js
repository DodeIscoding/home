import React, { useEffect, useState } from 'react';
import map_state from "./Map_state.module.css"
import { on, off } from "../js/back"
import moment from 'moment';

export default function Map_state() {
    let timer = null;
    const [time, setTime] = useState(moment());

    useEffect(() => {
        timer = setInterval(() => { //timer 라는 변수에 인터벌 종료를 위해 저장  
            setTime(moment()); // 현재 시간 세팅 
        }, 1000); //1000ms = 1s 간 반복 
        return () => {
            clearInterval(timer); // 함수 언마운트시 clearInterval 
        };
    }, []);


    return (
        <div>
            <button className={map_state.on} onClick={on} id="map_state_on">↑</button>
            <div id="map_state_off" className={map_state.map_state}>
                <div className={map_state.map_date}>
                    <p className={map_state.map_date_text}>기준</p>
                    <p className={map_state.map_date_text_1}>{time.format('YYYY.MM.DD hh:mm:ss')}</p>
                    <button className={map_state.off} onClick={off} id="off">x</button>
                </div>
                <div className={map_state.info_color}>
                    <div className={map_state.good}>원활</div>
                    <div className={map_state.wait}>지체</div>
                    <div className={map_state.stop}>정체</div>
                    <div className={map_state.no}>정보없음</div>
                </div>
                <div className={map_state.map_state_text}>
                    <ul>
                        <li className={map_state.map_date_text}>등급별 툴팁으로 상세정보 확인이 가능합니다.<p />
                        </li>
                        <li className={map_state.map_date_text}>현장의 실제속도와는 차이가 있을 수 있습니다.<p />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}