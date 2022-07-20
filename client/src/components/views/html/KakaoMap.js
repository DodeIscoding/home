import React, { useEffect, useState } from 'react';
import cn from "classnames";
import "../html/KakaoMap.css";

import { useLocation } from 'react-router-dom';

const { kakao } = window;

const MapContainer = (setAddress) => {
  const location = useLocation();
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(35.947276159041486, 126.95951173241967),
      level: 3
    };
    // 지도를 생성합니다.
    const map = new kakao.maps.Map(container, options);
    // 소통정보에서 작동함
    if (location.pathname == "/Communication") {
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
      var positions = [
        {
          content:
            '<div class="wrap">' +
            '    <div class="info">' +
            '       <div class="test_box">' +
            '           <div class="title">' +
            '               <p class="test_box_title1">상공회의소 사거리</p>' +
            '           </div>' +
            '        </div>' +
            ' <img class="test_img" src="https://ifh.cc/g/CX1Khf.jpg"/> '+
            '    </div>' +
            '</div>',
          latlng: new kakao.maps.LatLng(35.94526280277953, 126.9557333595236),
        },
        {
          content:
          '<div class="wrap">' +
          '    <div class="info">' +
          '       <div class="test_box">' +
          '           <div class="title">' +
          '               <p class="test_box_title1">전북대오거리</p>' +
          '           </div>' +
          '        </div>' +
          ' <img class="test_img" src="https://ifh.cc/g/CX1Khf.jpg"/> '+
          '    </div>' +
          '</div>',
          latlng: new kakao.maps.LatLng(35.944263903603705, 126.9599455117176),
        },
        {
          content: 
          '<div class="wrap">' +
          '    <div class="info">' +
          '       <div class="test_box">' +
          '           <div class="title">' +
          '               <p class="test_box_title1">동부시장오거리</p>' +
          '           </div>' +
          '        </div>' +
          ' <img class="test_img" src="https://ifh.cc/g/CX1Khf.jpg"/> '+
          '    </div>' +
          '</div>',
          latlng: new kakao.maps.LatLng(35.94588809638791, 126.96631763093687),
        }
      ];

      for (var i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng // 마커의 위치
        });

        // 마커에 표시할 인포윈도우를 생성합니다 
        var customOverlay = new kakao.maps.CustomOverlay({
          position: marker.getPosition(),
          content: positions[i].content // 인포윈도우에 표시할 내용
        });

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, customOverlay));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(customOverlay));
      }
      function makeOverListener(map, marker, customOverlay) {
        return function () {
          customOverlay.setMap(map, marker);
        };
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
      function makeOutListener(customOverlay) {
        return function () {
          customOverlay.setMap(null);
        };
      }
    }




















    if (location.pathname == "/Parking") {
      var position = [
        {
          content: '<div class="wrap">' +
            '    <div class="info">' +
            '<div class="test_box">' +
            ' <div class="title">' +
            '   <p class="test_box_title1">익산시청</p>' +
            ' </div>' +
            ' <div class="test_box_text_box">' +
            '   <div class="parking_number">' +
            '     <div class="parking_divbox">' +
            '       <p class="parking_num_text">주차구획</p>' +
            '       <div class="parking_border"></div>' +
            '       <p class="parking_num_number">131</p>' +
            '     </div>' +
            '   </div>' +
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
            ' </div>' +
            '</div>' +
            '    </div>' +
            '</div>',
          latlng: new kakao.maps.LatLng(35.94798962269014, 126.95728909353772),
        },
        {
          content: '<div class="wrap">' +
            '    <div class="info">' +
            '<div class="test_box">' +
            ' <div class="title">' +
            '   <p class="test_box_title1">익산시청제2청사</p>' +
            ' </div>' +
            ' <div class="test_box_text_box">' +
            '   <div class="parking_number">' +
            '     <div class="parking_divbox">' +
            '       <p class="parking_num_text">주차구획</p>' +
            '       <div class="parking_border"></div>' +
            '       <p class="parking_num_number">131</p>' +
            '     </div>' +
            '   </div>' +
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
            ' </div>' +
            '</div>' +
            '    </div>' +
            '</div>',
          latlng: new kakao.maps.LatLng(35.94728306615589, 126.9599523006708),
        },
        {
          content: '<div class="wrap">' +
            '    <div class="info">' +
            '<div class="test_box">' +
            ' <div class="title">' +
            '   <p class="test_box_title1">익산남중동우체국</p>' +
            ' </div>' +
            ' <div class="test_box_text_box">' +
            '   <div class="parking_number">' +
            '     <div class="parking_divbox">' +
            '       <p class="parking_num_text">주차구획</p>' +
            '       <div class="parking_border"></div>' +
            '       <p class="parking_num_number">131</p>' +
            '     </div>' +
            '   </div>' +
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
            ' </div>' +
            '</div>' +
            '    </div>' +
            '</div>',
          latlng: new kakao.maps.LatLng(35.95003124629052, 126.95817471073751),
        }
      ];
      for (var i = 0; i < position.length; i++) {
        var marker = new kakao.maps.Marker({
          map: map,
          position: position[i].latlng
        });
        // 인포윈도우를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
          position: marker.getPosition(),
          content: position[i].content
        });
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, customOverlay));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(customOverlay));
      }
    }
  });
  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
  function makeOverListener(map, marker, customOverlay) {
    return function () {
      customOverlay.setMap(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  function makeOutListener(customOverlay) {
    return function () {
      customOverlay.setMap(null);
    };
  }

  return (
    <div id="map">
      <div className={cn("MapContainer")} id="myMap">
      </div>
    </div>

  );

}

export default MapContainer;