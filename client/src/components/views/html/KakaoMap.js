import React, { useEffect,useState } from 'react';
import cn from "classnames";
import "../html/KakaoMap.css";



const { kakao } = window;

const MapContainer = (setAddress) => {

  const parentFunction = (x) => {
    console.log(x);
  };
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다.
    const geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다..
    geocoder.addressSearch(setAddress.setAddress, function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {
  
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
      console.log(setAddress)
    })
  }, [setAddress]);

  return(
    <div id="map">
      <div className={cn("MapContainer")} id="myMap">
      </div>
    </div>
  );
}

export default MapContainer;