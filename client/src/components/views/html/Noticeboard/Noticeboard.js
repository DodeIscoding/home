import React, { useEffect, useState, Component } from 'react';
import { re, add, add1, cancel } from "../../js/back"
import "./Notice.css";
import Axios, { post } from "axios";
import { useHistory } from "react-router-dom"
import ReactHtmlParser from "react-html-parser"
export default function Noticeboard() {



    const [TitleValue, setTitleValue] = useState("")
    const [ContentValue, setContentValue] = useState("")
    const [viewContent, setViewContent] = useState([]);

    const submitTest = () => {
        document.querySelector(".lll").classList.remove("display-off");
        document.getElementById("addlist").classList.add("display-off")
        document.getElementById("addlist").classList.remove("poi")
        Axios.post("http://localhost:4000/add",
            {
                title: TitleValue,
                name: ContentValue,
            }).then((response) => {
                console.log(response)
            })
        setTitleValue("")
        setContentValue("")
    };
    let boarddata;
    let board_name;
    let board_content;
    let board_title;
    let board_idx;
    useEffect(() => {
        Axios.get("http://localhost:4000/list", {})
            .then((res) => {
                const { data } = res;
                setViewContent(data)
                console.log(viewContent)
            })
    }, [])

    const cancel = () => {
        document.querySelector(".lll").classList.remove("display-off");
        document.getElementById("addlist").classList.add("display-off")
        document.getElementById("addlist").classList.remove("poi")
        setTitleValue("")
        setContentValue("")
    }
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    };
    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    };
    return (
        <>
            <div className="lll">
                <div className="body-2">
                    <div className="main-box">
                        <div className="title-1-box" />
                        <p className="communication-info">공지사항</p>
                    </div>
                    <div className="total-search">
                        <div className="total-box">
                            <p className="total">총</p>
                            <p id="total_number" className="total-number">0</p>
                            <p className="total-gun">건</p>
                        </div>
                        <div className="search-a">
                            <input type="text" id="text" placeholder="검색어를 입력해주세요" />
                            <button className='button' onClick={add1}>추가</button>
                            <button className='button'>검색</button>
                        </div>
                    </div>
                    <div className="not">
                        <div className="lkj">
                            <div className="num">번호</div>
                            <div className="noticetitle">제목</div>
                            <div className="writer">작성자</div>
                            <div className="time">작성일</div>
                            <div className="view">조회수</div>
                        </div>
                        <div id="list" className="lkj-under">
                            {viewContent.map(element =>
                                <div className='div1-'>
                                    <div>

                                    </div>
                                    <h2>{element.title}</h2>
                                </div>
                            )}
                        </div>
                        <form className="rebox">
                            {/* <input onchange="re1()" class="reinput"type="text" id="reid" placeholder="삭제할 번호를 입력해주세요."> */}
                            <button onClick={re} className='button' type="reset">삭제</button>
                        </form>
                        <div className="next">
                            <div className="prev2">
                                &lt;&lt;</div>
                            <div className="prev">
                                &lt;</div>
                            <div className="num1">1</div>
                            <div className="num2">2</div>
                            <div className="num3">3</div>
                            <div className="num4">4</div>
                            <div className="num5">5</div>
                            <div className="next1">&gt;</div>
                            <div className="next2">&gt;&gt;</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="addlist" className="display-off">
                <div className="announce">공지사항 </div>
                <div className="tittle">제목
                    <input onChange={onTitleChange} value={TitleValue} type="text" name="title" id="tittle" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </div>
                <div className="aaa">내용
                    <input onChange={onContentChange} value={ContentValue} name='content' type="text" id="add" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </div>
                <div className="button_box">
                    <button onClick={submitTest} id="save" className="button">저장</button>
                    <button onClick={cancel} className="button">취소</button>
                </div>
            </div>
        </>
    )
}
