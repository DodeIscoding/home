import React from 'react'
import "./Bottom.css"
import { Link } from 'react-router-dom'

export default function Bottom() {



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
                        <select name="company-list" id="select" className="select" onChange="window.open(value,sel_val())" style={{ paddingRight: '20px' }}>
                            <option value="none" disabled selected>관련사이트</option>
                            <option value="https://www.iksan.go.kr/index.iksan?menuCd=DOM_000002017000000000">익산시</option>
                            <option value="https://www.police.go.kr/index.do">경찰청</option>
                            <option value="https://www.tago.go.kr/">TAGO</option>
                            <option value="http://www.molit.go.kr/portal.do">국토교통부</option>
                            <option value="https://www.koroad.or.kr/">도로교통공단</option>
                            <option value="https://www.ex.co.kr/">한국도로공사</option>
                            <option value="https://www.tbn.or.kr/">TBN전북교통방송</option>
                            <option value="https://www.its.go.kr/">국가교통정보</option>
                        </select>
                    </div>
                </div>
            </div>
    )
}