import React from 'react'
import state from "./mini_state3.module.css"


export default function mini_state3() {
  return (
    <div className={state.mini_state}>
      <div className={state.mini_box}>
        <div className={state.mini_wait}>
          <p className={state.mini_wait_text}>지체</p>
        </div>
        <div className={state.mini_road}>
          <p className={state.mini_road_text}>인덕원로[기린로4가~전북광장]</p>
        </div>
        <div className={state.mini_km}>
          <p className={state.mini_km_text}>10Km/h</p>
        </div>
      </div>
      <div className={state.mini_info}>
        <div className={state.mini_good}>
          <p className={state.mini_good_text}>원활</p>
        </div>
        <div className={state.mini_wait_1}>
          <p className={state.mini_wait_text_1}>지체</p>
        </div>
        <div className={state.mini_stop}>
          <p className={state.mini_stop_text}>정체</p>
        </div>
        <div className={state.mini_no}>
          <p className={state.mini_no_text}>정보없음</p>
        </div>
      </div>
    </div>
  )
}
