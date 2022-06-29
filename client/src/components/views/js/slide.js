// 클릭시 다른 곳에 펼쳐져 있는 지도 삭제을 위한 반복문
// CCTV 전용
let cctv_img_movearr = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_img_movearr.push("img-move" + i);
}
// 주차장 전용
let parking_img_movearr = new Array();
for (let i = 1; i <= 6; i++) {
    parking_img_movearr.push("  -move" + i);
}
// 클릭시 자신 빼고 나머지 색상 삭제을 위한 반복문
// CCTV 전용
let cctv_colorarr = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_colorarr.push("cctvon" + i);
}
let cctv_colorarr1 = new Array();
for (let i = 0; i <= 6; i++) {
    cctv_colorarr1.push("cctvon1-" + i);
}
// 주차장 전용
let parking_colorarr = new Array();
for (let i = 1; i <= 6; i++) {
    parking_colorarr.push("parkingon" + i);
}
let parking_colorarr1 = new Array();
for (let i = 1; i <= 6; i++) {
    parking_colorarr1.push("parking0-" + i);
}
// 누르면 들어감                    
function move() {
    document.querySelector(".slide-button").setAttribute("onclick", "move1()");
    document.querySelector(".body-but-box").classList.add("go");
    // document.querySelector(".body-a-1").classList.add("body-a-block")
    document.querySelector(".body-but-box").classList.remove("go-2");
    document.querySelector(".slide-but-img").classList.add("go-img");
    document.querySelector(".slide-but-img").classList.remove("go-img-1");


}
// 누르면 나옴

function move1() {
    document.querySelector(".slide-button").setAttribute("onclick", "move()");
    document.querySelector(".body-but-box").classList.add("go-2");
    // document.querySelector(".body-a-1").classList.remove("body-a-block")
    document.querySelector(".body-but-box").classList.remove("go");
    document.querySelector(".slide-but-img").classList.add("go-img-1");
    document.querySelector(".slide-but-img").classList.remove("go-img");

}

// CCTV 홈페이지에서 지도 위에 있는 버튼 클릭시 지도 펼쳐짐
function cctvon() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move0");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon0").classList.add("cctv-box-js");
    document.getElementById("cctvon1-0").classList.add("cctv-box-img-js");

}

function cctvon1() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move1");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon1").classList.add("cctv-box-js");
    document.getElementById("cctvon1-1").classList.add("cctv-box-img-js");
}

function cctvon2() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move2");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon2").classList.add("cctv-box-js");
    document.getElementById("cctvon1-2").classList.add("cctv-box-img-js");

}

function cctvon3() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move3");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon3").classList.add("cctv-box-js");
    document.getElementById("cctvon1-3").classList.add("cctv-box-img-js");
}

function cctvon4() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move4");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon4").classList.add("cctv-box-js");
    document.getElementById("cctvon1-4").classList.add("cctv-box-img-js");
}

function cctvon5() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move5");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon5").classList.add("cctv-box-js");
    document.getElementById("cctvon1-5").classList.add("cctv-box-img-js");
}

function cctvon6() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(cctv_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("img-move6");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("cctvon6").classList.add("cctv-box-js");
    document.getElementById("cctvon1-6").classList.add("cctv-box-img-js");
}

// 지도 밑에 있는 상태창 사라졌다 나오게하는것들
function off() {
    document.querySelector(".map-state").classList.add("off-1");
    document.querySelector(".on").classList.remove("on-display");
}

function on() {
    document.querySelector(".map-state").classList.remove("off-1");
    document.querySelector(".on").classList.add("on-display");
}

function testboxoff() {
    // cctv 켜져있는 버튼들 꺼짐
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr[color_remove]);
        address.classList.remove("cctv-box-js");
    }
    for (var color_remove = 0; color_remove <= 6; color_remove++) {
        let address = document.getElementById(cctv_colorarr1[color_remove]);
        address.classList.remove("cctv-box-img-js");
    }
    // 펼쳐져 있는 지도 X 누를 시 지도 삭제
    document.querySelector(".test-box").classList.add("test-display");
}

function testboxoff_parkingon() {
    // 주차장 켜져있는 버튼들 꺼짐
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 펼쳐져 있는 지도 X 누를 시 지도 삭제
    document.querySelector(".test-box").classList.add("test-display");
}
// 주차장 버튼들 
function parkingon1() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(parking_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("parking-move1");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("parkingon1").classList.add("parking-box-js");
    document.getElementById("parking0-1").classList.add("parking-box-img-js");
}

function parkingon2() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(parking_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("parking-move2");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("parkingon2").classList.add("parking-box-js");
    document.getElementById("parking0-2").classList.add("parking-box-img-js");
}

function parkingon3() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(parking_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("parking-move3");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("parkingon3").classList.add("parking-box-js");
    document.getElementById("parking0-3").classList.add("parking-box-img-js");
}

function parkingon4() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(parking_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("parking-move4");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("parkingon4").classList.add("parking-box-js");
    document.getElementById("parking0-4").classList.add("parking-box-img-js");
}

function parkingon5() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(parking_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("parking-move5");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("parkingon5").classList.add("parking-box-js");
    document.getElementById("parking0-5").classList.add("parking-box-img-js");
}

function parkingon6() {
    // 클릭시 자신 빼고 나머지 색상 삭제
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr[color_remove]);
        address.classList.remove("parking-box-js");
    }
    for (var color_remove = 0; color_remove <= 5; color_remove++) {
        let address = document.getElementById(parking_colorarr1[color_remove]);
        address.classList.remove("parking-box-img-js");
    }
    // 클릭시 다른 곳에 펼쳐져 있는 지도 삭제
    let address = document.getElementById("test-box")
    for (var img_remove = 0; img_remove <= 6; img_remove++) {
        address.classList.remove(parking_img_movearr[img_remove]);
    }
    // 클릭시 이 버튼이 위치한 곳에 지도 나옴
    document.querySelector(".test-box").classList.add("test-display");
    document.querySelector(".test-box").classList.add("parking-move6");
    document.querySelector(".test-box").classList.remove("test-display");
    // 클릭시 색상 변경
    document.getElementById("parkingon6").classList.add("parking-box-js");
    document.getElementById("parking0-6").classList.add("parking-box-img-js");
}

function language1() {
    // 클릭시 글씨 색상 변함
    document.getElementById("kor").classList.add("Language-on");
    // 클릭시 다른 글씨 색상 삭제
    document.getElementById("English").classList.remove("Language-on");
    document.getElementById("China").classList.remove("Language-on");
    document.getElementById("Japan").classList.remove("Language-on");
}

function language2() {
    // 클릭시 글씨 색상 변함
    document.getElementById("English").classList.add("Language-on");
    // 클릭시 다른 글씨 색상 삭제
    document.getElementById("kor").classList.remove("Language-on");
    document.getElementById("China").classList.remove("Language-on");
    document.getElementById("Japan").classList.remove("Language-on");
}

function language3() {
    // 클릭시 글씨 색상 변함
    document.getElementById("China").classList.add("Language-on");
    // 클릭시 다른 글씨 색상 삭제
    document.getElementById("kor").classList.remove("Language-on");
    document.getElementById("English").classList.remove("Language-on");
    document.getElementById("Japan").classList.remove("Language-on");
}

function language4() {
    // 클릭시 글씨 색상 변함
    document.getElementById("Japan").classList.add("Language-on");
    // 클릭시 다른 글씨 색상 삭제
    document.getElementById("kor").classList.remove("Language-on");
    document.getElementById("China").classList.remove("Language-on");
    document.getElementById("English").classList.remove("Language-on");
}

function search_on1() {
    document.getElementById("simple-search").classList.add("simple-search")
    document.getElementById("simple-search").classList.remove("area-search")

    document.getElementById("area-search").classList.add("area-search")
    document.getElementById("area-search").classList.remove("simple-search")
}

function search_on2() {
    document.getElementById("area-search").classList.add("simple-search")
    document.getElementById("area-search").classList.remove("area-search")

    document.getElementById("simple-search").classList.add("area-search")
    document.getElementById("simple-search").classList.remove("simple-search")
}

function road_Selection_1() {
    let x = document.getElementsByClassName("search-text-2")[0];
    x.innerText = "고속도로";
}

function road_Selection_2() {
    let x = document.getElementsByClassName("search-text-2")[0];
    x.innerText = "주요도로";
}
var temp;

function input() {
    var input = document.getElementById("input").value;
    temp = input;
}

function output() {
    if (typeof temp == "undefined" || temp == null || temp == "") {
        alert("도로명 주소를 넣어주세요.");
        return;
    }
    document.getElementById("output").innerText = temp;
}

function sel_val() {
    var value = document.getElementById("select")
    var select_value = value.options[value.selectedIndex].id;
    if (select_value > 1) {
        value.value = "none"
    }
}
function add1() {
    document.querySelector(".lll").classList.add("display-off");

    document.getElementById("addlist").classList.remove("display-off")
    document.getElementById("addlist").classList.add("poi")
}
var number = 0;
var temp3;
var rediv;
function add(type) {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    number = number + 1;
    const newDiv1 = document.createElement('a');
    newDiv1.setAttribute('id', "div" + number);
    newDiv1.setAttribute('class', "mnb");
    newDiv1.setAttribute('href', "#");
    // list.appendChild(newDiv1);

    const newDiv3 = document.createElement('div');
    newDiv3.setAttribute('class', "num-1");
    const newText3 = document.createTextNode(number);
    newDiv3.appendChild(newText3);
    newDiv1.appendChild(newDiv3);

    const newDiv4 = document.createElement('div');
    newDiv4.setAttribute('class', "noticetitle-1");
    const newText4 = document.createTextNode(temp3);
    newDiv4.appendChild(newText4);
    newDiv1.appendChild(newDiv4);

    const newDiv5 = document.createElement('div');
    newDiv5.setAttribute('class', "writer-1");
    const newText5 = document.createTextNode("관리자");
    newDiv5.appendChild(newText5);
    newDiv1.appendChild(newDiv5);

    const newDiv6 = document.createElement('div');
    newDiv6.setAttribute('class', "time-1");
    const newText6 = document.createTextNode(year + '/' + month + '/' + date);
    newDiv6.appendChild(newText6);
    newDiv1.appendChild(newDiv6);

    const newDiv7 = document.createElement('div');
    newDiv7.setAttribute('class', "view-1");
    const newText7 = document.createTextNode(number);
    newDiv7.appendChild(newText7);
    newDiv1.appendChild(newDiv7);

    document.querySelector(".lll").classList.remove("display-off");
    document.getElementById("addlist").classList.add("display-off")
    document.getElementById("addlist").classList.remove("poi")
    document.getElementById("total_number").innerText = number;
    document.getElementById("tittle").value = null;
}

function add2() {
    var input3 = document.getElementById("tittle").value;
    temp3 = input3;
}
function re() {
    const div = document.getElementById("div" + number);
    div.remove();
    number = number - 1;
    document.getElementById("total_number").innerText = number;
}
function re1() {
    var input4 = document.getElementById("reid").value;
    rediv = input4;
}
function cancel() {
    document.querySelector(".lll").classList.remove("display-off");

    document.getElementById("addlist").classList.add("display-off")
    document.getElementById("addlist").classList.remove("poi")
}
