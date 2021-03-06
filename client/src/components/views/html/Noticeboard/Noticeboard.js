import React, { useEffect, useState } from 'react';
import { re, add, add1, cancel } from "../../js/back"
import "./Notice.css";
import Axios    from "axios";
import { Link } from "react-router-dom"
import moment from 'moment';
import Pagination from "./Pagination"

 
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

    const [DBsearch, setDBsearch] = useState();
    const [TitleValue, setTitleValue] = useState("")
    const [ContentValue, setContentValue] = useState("")
    const [SearchValue, setSearchValue] = useState("")
    const [idx,setidx] = useState()
    const [viewContent, setViewContent] = useState([]);
    const [postsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = viewContent.slice(indexOfFirstPost, indexOfLastPost).reverse();
    

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const submitTest = () => {
        document.querySelector(".lll").classList.remove("display-off");
        document.getElementById("addlist").classList.add("display-off")
        document.getElementById("addlist").classList.remove("poi")
        Axios.post("http://localhost:4000/add",
            {   
                title: TitleValue,
                name: ContentValue,
                time1: new_time,

            }).then((response) => {
            })
        setTitleValue("")
        setContentValue("")

    };
    
    const getpost = () => {
        Axios.get("http://localhost:4000/list", {})
        .then((res) => {
            const { data } = res;
            for(var i=0; i< data.length; i++){
                setidx(data[i].idx)
            }
            setViewContent(data)
        })
    }


    useEffect(() => {
        getpost()
    }, [getpost])


    

    const search = () => {
        Axios.post("http://localhost:4000/search",
        {
            title_Search : SearchValue
        }).then((response) => {
            console.log(response)
        })
    }
    
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
    const onSearch = (event) => {
        setSearchValue(event.currentTarget.value)

    }

    
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
                            <input type="text" id="text" value={SearchValue} onChange={onSearch} placeholder="검색어를 입력해주세요" />
                            <button className='button' onClick={add1}>추가</button>
                            <button className='button' onClick={search}>검색</button>
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
                            
                            {currentPosts && currentPosts.map((element) =>
                                {   
                                    return [
                                    <div className='mnb' key={element.idx}>
                                    <div className='num-1' >{element.idx} </div>
                                    <Link to={`/postView/${element.idx}`} className='noticetitle-1'>{element.title}</Link>
                                    <div className='writer-1'>{element.name}</div>
                                    <div className='time-1'>{element.new_time}</div>
                                    <div className='view-1'></div>
                                    </div>
                                           ]
                                }
                            )}
                        </div>
                        <div className="next">
                            <Pagination postsPerPage={postsPerPage} totalPosts={viewContent.length}
                             currentPage={currentPage} paginate={paginate}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
            <div id="addlist" className="display-off">
                <div className="announce">공지사항 </div>
                <div className="tittle">제목
                    <input onChange={onTitleChange} placeholder="30자" value={TitleValue} type="textarea" name="title" id="tittle" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </div>
                <div className="aaa">내용
                    <textarea onChange={onContentChange} placeholder="500자 내" value={ContentValue} name='content' type="textarea" id="add" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </div>
                <div className="button_box">
                    <button onClick={submitTest} id="save" className="button">저장</button>
                    <button onClick={cancel} className="button">취소</button>
                </div>
            </div>
        </>
    )

    
}

