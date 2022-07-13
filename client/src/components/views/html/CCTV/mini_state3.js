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
    </div>
  )
}
