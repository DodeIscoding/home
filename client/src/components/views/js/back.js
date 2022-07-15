
//홈페이지 이동 막기

// CCTV 전용
let cctv_img_movearr = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_img_movearr.push("img_move" + i);
}
// 주차장 전용
let parking_img_movearr = new Array();
for (let i = 1; i <= 6; i++) {
    parking_img_movearr.push("  _move" + i);
}
// 클릭시 자신 빼고 나머지 색상 삭제을 위한 반복문
// CCTV 전용
let cctv_colorarr = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_colorarr.push("cctvon" + i);
}
let cctv_colorarr1 = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_colorarr1.push("cctvon1_" + i);
}
// 주차장 전용
let parking_colorarr = new Array();
for (let i = 1; i <= 6; i++) {
    parking_colorarr.push("parkingon" + i);
}
let parking_colorarr1 = new Array();
for (let i = 1; i <= 6; i++) {
    parking_colorarr1.push("parking0_" + i);
}
let move_number = 0;



// CCTV
export const cctvon =() => {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move0");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon0").classList.add("cctv_box_js");
    document.getElementById("cctvon1_0").classList.add("cctv_box_img_js");

}
export const cctvon1 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move1");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon1").classList.add("cctv_box_js");
    document.getElementById("cctvon1_1").classList.add("cctv_box_img_js");
}
export const cctvon2 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move2");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon2").classList.add("cctv_box_js");
    document.getElementById("cctvon1_2").classList.add("cctv_box_img_js");
}
export const cctvon3 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move3");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon3").classList.add("cctv_box_js");
    document.getElementById("cctvon1_3").classList.add("cctv_box_img_js");
}
export const cctvon4 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move4");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon4").classList.add("cctv_box_js");
    document.getElementById("cctvon1_4").classList.add("cctv_box_img_js");
}
export const cctvon5 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move5");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon5").classList.add("cctv_box_js");
    document.getElementById("cctvon1_5").classList.add("cctv_box_img_js");
}
export const cctvon6 = () =>{
      // 클릭시 자신 빼고 나머지 색상 삭제
      for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv_box_js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv_box_img_js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test_box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test_box").classList.add("test_display");
    document.querySelector(".test_box").classList.add("img_move6");
    document.querySelector(".test_box").classList.remove("test_display");
    // 클릭시 색상 변경
    document.getElementById("cctvon6").classList.add("cctv_box_js");
    document.getElementById("cctvon1_6").classList.add("cctv_box_img_js");
}

export const off = () =>{
    document.getElementById("map_state_off").classList.add("off_1");
    document.getElementById("map_state_on").classList.add("on_display");
}
export const on = () => {
    document.getElementById("map_state_off").classList.remove("off_1");
    document.getElementById("map_state_on").classList.add("on_display");
}
export const move = () => {
    if(move_number == 0){
    document.getElementById("body_but_box").classList.add("go");
    document.getElementById("body_but_box").classList.remove("go_1");
    document.getElementById("slide_but_img").classList.add("go_img");
    document.getElementById("slide_but_img").classList.remove("go_img_1");
    move_number =+ 1;
    } else {
    document.getElementById("body_but_box").classList.add("go_1");
    document.getElementById("body_but_box").classList.remove("go");
    document.getElementById("slide_but_img").classList.add("go_img_1");
    document.getElementById("slide_but_img").classList.remove("go_img");
    move_number = 0
    }
}
export const road_Selection_1 = () => {
    let x = document.getElementById("search_text");
    x.innerText = "고속도로";
}
export const road_Selection_2 = () => {
    let x = document.getElementById("search_text");
    x.innerText = "주요도로";
}
export const testboxoff = () => {
// cctv 켜져있는 버튼들 꺼짐
for (var color_remove = 0; color_remove <= 6; color_remove++) {
    let address = document.getElementById(cctv_colorarr[color_remove]);
    address.classList.remove("cctv_box_js");
}
for (var color_remove = 0; color_remove <= 6; color_remove++) {
    let address = document.getElementById(cctv_colorarr1[color_remove]);
    address.classList.remove("cctv_box_img_js");
}
// 펼쳐져 있는 지도 X 누를 시 지도 삭제
document.querySelector(".test_box").classList.add("test_display");
}
var temp;
export const input = () => {
    var input = document.getElementById("input").value;
    temp = input;
}
export const output = () => {
    if (typeof temp == "undefined" || temp == null || temp == "") {
        alert("도로명 주소를 넣어주세요.");
        return;
    }
    document.getElementById("output").innerText = temp;
}
export const search_on1 = () => {
    document.getElementById("simple_search").classList.add("simple_search1")
    document.getElementById("simple_search").classList.remove("area_search1")

    document.getElementById("area_search").classList.add("area_search1")
    document.getElementById("area_search").classList.remove("simple_search1")
}
export const search_on2 = () => {
    document.getElementById("area_search").classList.add("simple_search1")
    document.getElementById("area_search").classList.remove("area_search1")

    document.getElementById("simple_search").classList.add("area_search1")
    document.getElementById("simple_search").classList.remove("simple_search1")
}
export const  add1 = () => {
    document.querySelector(".lll").classList.add("display-off");

    document.getElementById("addlist").classList.remove("display-off")
    document.getElementById("addlist").classList.add("poi")
}
var number = 0;
var temp3;
var rediv;
var list = document.getElementById("list");

export const  add2 = () => {
    var input3 = document.getElementById("tittle").value;
    temp3 = input3;
}
export const  re = () => {
    const div = document.getElementById("div" + number);
    div.remove();
    number = number - 1;
    document.getElementById("total_number").innerText = number;
}
export const  re1 = () => {
    var input4 = document.getElementById("reid").value;
    rediv = input4;
}



