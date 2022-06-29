import Header1 from "../html/main/Header1"
import Sidebar1 from "../html/main/Sidebar1"
import Bottom from "../html/Bottom"
import Map from "../html/KakaoMap"
import React from 'react'


export default function Main() {
    return (
        <div>
        <Map></Map>
        <Header1></Header1>
        <Sidebar1></Sidebar1>
        <Bottom></Bottom>
        </div>
    );
}