//https://hianna.tistory.com/411
//https://stickode.tistory.com/160
//https://aboooks.tistory.com/59 table 태그 사용법

//가장 정확
//https://wikidocs.net/111736

function addDiv() {
    var trsCnt = document.getElementsByClassName('colo').length + 1;  //trs 카운트(만들어진 tr의 개수)

    var trs = document.createElement('tr');
    var field = document.getElementById('field');  //내용이 작성되는 공간

    trs.setAttribute('class', 'colo');  //colo라는 class를 생성한 후, trs의 class로 설정(새로 생성된 tr의 class = colo)
    trs.setAttribute('id', 'colo' + trsCnt)  //trs의 id 설정(colo1, colo2, colo3, ...)

    var toDoTxt = document.getElementById('whatToDo').value;

    var str = '';
    str += "<tr>";
    str += "<th><input type=" + "'checkbox' class=" + "colo" + trsCnt + " onClick='chgTxt(this.className)'/>";  //onclick으로 글씨 변경 넣어보자
    str += "</th>" + "<td>" + toDoTxt + "</td>";
    str += "</tr>"
    str += "<button id=" + "colo" + trsCnt + " onclick=" + "delDivById(this.id)" + ">X</button>";

    trs.innerHTML = str;
    field.appendChild(trs);
}

var calledId;
function delDivById(clicked_id) {
    calledId = clicked_id;
    field.removeChild(document.getElementById(calledId));
}

var txtClass;
function chgTxt(checkbox_class) {
    txtClass = checkbox_class;
    var trChangeId = txtClass;
    //var isChecked = document.getElementsByClassName(txtClass).checked;
    
    document.getElementById(trChangeId).innerText = "Done";
}