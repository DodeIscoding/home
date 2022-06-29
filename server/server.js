const express = require('express');
const app = express();
var path = require('path');
const mysql = require('mysql');
const PORT = 4000;
const cors = require('cors');
const bodyParser = require("body-parser");


let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "qweasdqwe123",
    database: "sqldb"
});

app.listen(PORT, () => {
  //포트번호 3000으로 서버 구동
  console.log("서버 시작 주소: http:localhost:"+PORT);
});
app.get("/", (req, res) => {
  const sqlQuery = "  ";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
  });
});



app.get("/list", (req, res) => {
  const sqlQuery = "SELECT * FROM board;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/add" , (req,res) =>{
  const title = req.body.title;
  const content = req.body.name;
  const time = req.body.time1;
  const name = "관리자"
  db.query("INSERT INTO board (title,content,name,new_time) VALUES (?, ?, ?, ?)",
   [title, name, content, time], (error, result) => {  
  console.log(error)})
})