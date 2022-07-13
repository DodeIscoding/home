import React, { useEffect, useState } from 'react';
import cn from "classnames";
import "../html/KakaoMap.css";
import img1 from "../pic/CCTV_img.png"

import { useLocation } from 'react-router-dom';

// 인포윈도우를 여는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, customOverlay) {
  return function () {
    customOverlay.setMap(map, marker);
  };
}

const { kakao } = window;

const MapContainer = (setAddress) => {
  const location = useLocation();
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.12, 129.1),
      level: 3
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 소통정보에서 작동함
    if (location.pathname == "/Communication") {
      console.log("Communication")
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
            position: coords,
            clickable: true
          });
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      })
    }
    // 현재 교통 상황을 보여줌
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    // cctv 위치를 마커로 표시
    if (location.pathname == "/CCTV") {
      console.log("CCTV")
      var position = [
        new kakao.maps.LatLng(35.11986697412261, 129.10041361171113),
        new kakao.maps.LatLng(35.12134515011343, 129.09870765459877),
        new kakao.maps.LatLng(35.11737292426001, 129.09937894654482),
      ];
      var iwContent = "",
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다;

      for (var i = 0; i < position.length; i++) {
        var marker = new kakao.maps.Marker({
          map: map,
          position: position[i]
        });
        // 인포윈도우를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          content: iwContent,
          removable: iwRemoveable
        });
        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, customOverlay));
        // kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      }


    }
    if (location.pathname == "/Parking") {
      console.log("Parking")
      var position = [
        new kakao.maps.LatLng(35.11887990573059, 129.09900085093426),
        new kakao.maps.LatLng(35.12041469908119, 129.09649568149626),
        new kakao.maps.LatLng(35.12130548352698, 129.102035432266),
      ];
      var iwContent =
        '<div class="wrap">' +
        '    <div class="info">' +
        '<div class="test_box">'+
' <div class="title">' +
'   <p class="test_box_title1">북부시장</p>' +
'   <div class="close" onclick="closeOverlay()" title="닫기"></div>'+
' </div>' +

' <div class="parking_date">' +
'   <div class="parking_divbox">' +
'     <p class="parking_date_text">운영요일</p>' +
'     <div class="parking_border"></div>' +
'     <p class="parking_date_number">평일+토요일+공휴일</p>' +
'   </div>' +
' </div>' +
' <div class="parking_clock">' +
'   <div class="parking_divbox">' +
'     <p class="parking_clock_text">운영시간</p>' +
'     <div class="parking_border"></div>' +
'     <p class="parking_clock_number">12:00 ~ 24:00</p>' +
'     </div>' +
'   </div>' +
' </div>'+
'</div>'+
        '    </div>' +
        '</div>';
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다;
      for (var i = 0; i < position.length; i++) {
        var marker = new kakao.maps.Marker({
          map: map,
          position: position[i]
        });
        // 인포윈도우를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          position: marker.getPosition(),
          content: iwContent,

        });
        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, customOverlay));
      }
      function closeOverlay() {
        customOverlay.setMap(null);
      }      
    }
  });


  return (
    <div id="map">
      <div className={cn("MapContainer")} id="myMap">
      </div>
    </div>
  );

}

export default MapContainer;