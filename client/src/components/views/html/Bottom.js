import React from 'react'
import "./Bottom.css"
import { Link } from 'react-router-dom'

export default function Bottom() {
    const selectList = [

        {  
            number: 1,
            address: "https://www.iksan.go.kr/index.iksan?menuCd=DOM_000002017000000000",
            name: "익산시청"
        },
        {
            number: 2,
            address: "https://www.police.go.kr/index.do",
            name: "경찰청"
        },
        {
            number: 3,
            address: "https://www.tago.go.kr/",
            name: "TAGO"
        },
        {
            number: 4,
            address: "http://www.molit.go.kr/portal.do",
            name: "국토교통부"
        },
        {
            number: 5,
            address: "https://www.koroad.or.kr/",
            name: "도로교통공단"
        },
        {
            number: 6,
            address: "https://www.ex.co.kr/",
            name: "한국도로공사"
        },
        {
            number: 7,
            address: "https://www.tbn.or.kr/",
            name: "TBN전북교통방송"
        },
        {
            number: 8,
            address: "https://www.its.go.kr/",
            name: "국가교통정보"
        },
    ];
    const handleSelect = (e) => {
        window.open(e.target.value)
    }

    return (
        <div className="bottom">
            <div className="bottom-menu">
                {/* 위치랑 전화번호 */}
                <div className="company-information">
                    <div className="company-information-list">
                        <div className="company">전라북도 익산 무왕로2길 414</div>
                        <div className="company">대표전화 (063)859-4541</div>
                        <div className="company">Copyright(c) 2022 IKSANCITY All rights reserved</div>
                    </div>
                </div>
                {/* 모니터링단홈페이지 */}
                <div className="mon_dec_box">
                    <div className="monitoring">
                        <div className="monitoring-1">
                            <Link to="/" className="bottom-menu-1">모니터링단홈페이지</Link>
                            </div>
                        </div>
                    {/* 교통불편민원신고 */}
                    <div className="declaration">
                        <a href="http://www.molit.go.kr/irocm/USR/WPGE0201/m_15604/DTL.jsp" target="_blank" className="bottom-menu-1">교통불편민원신고</a>
                    </div>
                </div>
                {/* 관련사이트 목록 */}
                <div className="Related-sites">
                    <select name="url" id="select" className="select" onChange={handleSelect} style={{ paddingRight: '20px' }}>
                        <option value="none" disabled selected>관련사이트</option>
                        {selectList.map((item) => (
                            <option value={item.address} key={item.number}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}