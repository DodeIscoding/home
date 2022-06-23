import React from "react";
import { post } from 'axios'
import { response } from "express";

class Boardadd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            name: ""
        }
    }
    addCustomer = () => {
        const url = "/list"
        const formData = new FormData();
        formData.append('title',this.state.title)
        formData.append('name',this.state.name)
        const config = {
            handers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url,formData,config);
    }
    handleForSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.Data)
            })
    }
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name]
        this.setState(nextState)
    }
    render() {
        return (
            <form onSubmit={this.handleForSubmit} id="addlist" className="display-off">
                <div className="announce">공지사항 </div>
                <div className="title">제목
                    <input onChange={this.handleValueChange} name="title" value={this.state.title} type="text" id="tittle" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </div>
                <div className="aaa">내용
                    <input onChange={this.handleValueChange} value={this.state.name} name='name' type="text" id="aaa" style={{ marginLeft: '20px', marginTop: '10px' }} />
                </div>
                <div className="button_box">
                    <button onClick={submitTest} id="save" className="save">저장</button>
                    <button className="cancel">취소</button>
                </div>
            </form>
        )
    }
}