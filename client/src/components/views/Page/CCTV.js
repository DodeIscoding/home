import Header3 from "../html/CCTV/Header3"
import Sidebar3 from "../html/CCTV/Sidebar3"
import Bottom from "../html/Bottom"
import Map from "../html/KakaoMap"
import Mini from "../html/CCTV/mini_state3"
import React from 'react'
import Map_state from "../html/Map_state"


export default function CCTV() {
    return (
        <div>
        <Map></Map>
        <Map_state></Map_state>
        <Header3></Header3>
        <Mini/>
        <Sidebar3></Sidebar3>
        <Bottom></Bottom>
        </div>
    );
}