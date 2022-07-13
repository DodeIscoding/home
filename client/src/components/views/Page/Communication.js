import React ,{ useState } from "react"
import Header2 from "../html/Communication/Header2"
import Sidebar2 from "../html/Communication/Sidebar2"
import Bottom from "../html/Bottom"
import Map from "../html/KakaoMap"
import Mini from "../html/Communication/Mini_state2"
import Map_state from "../html/Map_state"




export default function Communication() {
    return (
        <div>
        <Map />
        <Map_state/>
        <Header2/>
        <Mini/>
        <Sidebar2 />
        <Bottom/>
        </div>
    );
}