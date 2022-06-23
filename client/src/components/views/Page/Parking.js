import Header4 from "../html/a_Parking/Header4"
import Sidebar4 from "../html/a_Parking/Sidebar4"
import Bottom from "../html/Bottom"
import Map from "../html/KakaoMap"
import Mini from "../html/a_Parking/mini_state4"
import React from 'react'


export default function Parking() {
    return (
        <div>
        <Map></Map>
        <Header4></Header4>
        <Mini/>
        <Sidebar4></Sidebar4>
        <Bottom></Bottom>
        </div>
    );
}