import React, { useEffect, useState } from 'react';
import './Post.css';
import { Link } from "react-router-dom"
import Axios from "axios";
import { useHistory } from 'react-router-dom';

const PostView = (props) => { 
  let history = useHistory();
    const [ data, setData ] = useState();
    const [pageNumber,setPageNumber] = useState();

    useEffect(()=>{
        Axios.get("http://localhost:4000/list", {})
        .then((res) => {
            setData(res.data)
        })
        const { idx } = props.match.params;
        setPageNumber(idx - 1)
    },[])
    console.log(pageNumber)

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ?  (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data[pageNumber].idx }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data[pageNumber].title }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data[pageNumber].new_time }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    data[pageNumber].content
                  }
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
         <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default PostView;