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
    trs.setAttribute('id', 'colo' + trsCnt + 'tr')  //trs의 id 설정(colo1, colo2, colo3, ...)

    var toDoTxt = document.getElementById('whatToDo').value;  //입력받는 값

    /**
    아래처럼 HTML 템플릿 만들어서 innerHTML에 넣어주는 것도 좋은데
    var str = `
    <tr>
        <th>
            <input type='checkbox' id="checkbox_colo${trsCnt}" class="colo" onClick='reTxt(this.id, this.className)'/>
            
            이런 방식으로 백틱 + ${} 형태로 포매팅하면 더 읽기도 쉽고 작성도 빠름
            python f-string 생각하면 쉽게 
    `
    */
    var str = '';
    str += "<tr>";
    str += "<th><input type=" + "'checkbox' id=" + "checkbox_colo" + trsCnt + " class=" + "colo" + trsCnt + " onClick='reTxt(this.id, this.className)'/>";  //onclick으로 글씨 변경 넣어보자
    str += "</th>" + "<td id=" + "colo" + trsCnt + "whatToDo" + ">" + toDoTxt + "</td>";
    str += "</tr>"
    str += "<button id=" + "colo" + trsCnt + " onclick=" + "delDivById(this.id)>X</button>";

    trs.innerHTML = str;
    field.appendChild(trs);
}

var calledId;
function delDivById(clicked_id) {
    calledId = clicked_id + 'tr';
    field.removeChild(document.getElementById(calledId));
}

var tarId, tarTrId;
function chgTxt(curId, curClass) {
    tarId = curId;  //바꾸고자 하는 id
    tarTrId = curClass +'tr';  //colo + trsCnt + tr(colo1tr)

    //var isChecked = document.getElementById(tarId).checked;
    
    var colNum;
    var trsLen = document.getElementsByClassName('colo').length;
    
    for(var i = 1; i < trsLen + 1; i++) {  //몇 번째 tr인지 찾기
        var checkStr = 'colo' + i + 'tr';
        if(checkStr == tarTrId) {
            colNum = i;
            break;
        }
    }

    var checkedStr = '';
    checkedStr += "<tr>";
    checkedStr += "<th><input type=" + "'checkbox' id=" + tarId + "class=" + curClass + " onClick='reTxt(this.id, this.class)'/>";  //onclick으로 글씨 변경 넣어보자
    checkedStr += "</th>" + "<td id=" + curClass + "whatToDo>" + "Returned" + "</td>";
    checkedStr += "</tr>"
    checkedStr += "<button id=" + curClass + " onclick=" + "delDivById(this.id)>X</button>";  //"Done"


    var toDel = document.getElementById('colo' + colNum + 'tr');
    //if(isChecked == true) {  //chekcbox를 체크하는 경우
        toDel.innerHTML = checkedStr;
    //}
    /*
    if(isChecked == false) {
        toDel.innerHTML = "returnStr";
    }*/
    //자신보다 위에 있는 항목이 삭제되면 Done이 동작하지 않는다.
}

function reTxt(curId, curClass) {
    tarId = curId;  //바꾸고자 하는 id
    tarTrId = curClass +'tr';  //colo + trsCnt + tr(colo1tr)

    //var isChecked = document.getElementById(tarId).checked;
    
    var colNum;
    var trsLen = document.getElementsByClassName('colo').length;
    
    for(var i = 1; i < trsLen + 1; i++) {  //몇 번째 tr인지 찾기
        var checkStr = 'colo' + i + 'tr';
        if(checkStr == tarTrId) {
            colNum = i;
            break;
        }
    }

    var returnStr = '';
    returnStr += "<tr>";
    returnStr += "<th><input type=" + "'checkbox' id=" + tarId + " class=" + curClass + " onClick='chgTxt(this.id, this.className)' checked/>";  //onclick으로 글씨 변경 넣어보자
    returnStr += "</th>" + "<td id=" + curClass + "whatToDo" + ">" + "Done" + "</td>";
    returnStr += "</tr>"
    returnStr += "<button id=" + curClass + " onclick=" + "delDivById(this.id)>X</button>";

    var toDel = document.getElementById('colo' + colNum + 'tr');
    toDel.innerHTML = returnStr;
}
