import React, { useEffect, useState, Component } from 'react';
import { re, add, add1, cancel } from "../../js/back"
import "./Notice.css";
import Axios, { post } from "axios";
import { useHistory } from "react-router-dom"
import ReactHtmlParser from "react-html-parser"
import moment from 'moment';

export default function Noticeboard() {
    
    let timer = null;
    const [time, setTime] = useState(moment());

    useEffect(() => {
        timer = setInterval(() => { //timer 라는 변수에 인터벌 종료를 위해 저장  
            setTime(moment()); // 현재 시간 세팅 
        }, 1000); //1000ms = 1s 간 반복 
        return () => {
            clearInterval(timer); // 함수 언마운트시 clearInterval 
        };
    }, []);

    const new_time = time.format('YYYY.MM.DD');


    const [TitleValue, setTitleValue] = useState("")
    const [ContentValue, setContentValue] = useState("")
    const [idx,setidx] = useState()
    const [viewContent, setViewContent] = useState([]);
    const [count,setcount] = useState()

    let count_number = 0;
    const submitTest = () => {
        document.querySelector(".lll").classList.remove("display-off");
        document.getElementById("addlist").classList.add("display-off")
        document.getElementById("addlist").classList.remove("poi")
        count_number = count_number + 1;
        setcount(count_number)
        Axios.post("http://localhost:4000/add",
            {
                title: TitleValue,
                name: ContentValue,
                time1: new_time,

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
                boarddata = data
                for(var i=0;i< data.length; i++){
                setidx(data[i].idx)
                }
                setViewContent(data)
            })
    }, [count])


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
                            <p id="total_number" className="total-number">{idx}</p>
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
                                <div className='mnb'>
                                    <div className='num-1'>{element.idx}</div>
                                    <div className='noticetitle-1'>{element.title}</div>
                                    <div className='writer-1'>{element.name}</div>
                                    <div className='time-1'>{element.new_time}</div>
                                    <div className='view-1'></div>
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
