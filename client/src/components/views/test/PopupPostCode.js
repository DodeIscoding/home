import React, { useState,  } from 'react';
import DaumPostcode from "react-daum-postcode";
import KakaoMap from "../html/KakaoMap"

const PopupPostCode = ({ setAddressCount,setAddress }) => {
  const [fullAddressname, setFullAddressname] = useState();

  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)

    setFullAddressname(fullAddress);
  }
  
  // 검색하면 뜨는 총검색수랑 검색한 곳
  const handleAddress = (data1) =>{
    let address_number = data1.count
    let search_address = data1.q
    setAddressCount(address_number)
    setAddress(search_address)
  }


  const postCodeStyle = {
    display: "block",
    position: "absolute",
    width: "365px",
    height: "560px",
  };

  return (
    <div>
      <KakaoMap setAddress={fullAddressname} />
      <DaumPostcode style={postCodeStyle}  onSearch={handleAddress} onComplete={handlePostCode} autoClose={false} />
    </div>
  )
}

export default PopupPostCode;