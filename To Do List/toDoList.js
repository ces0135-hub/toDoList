//https://hianna.tistory.com/411
//https://stickode.tistory.com/160
//https://aboooks.tistory.com/59 table 태그 사용법

//가장 정확
//https://wikidocs.net/111736


function addDiv() {
    var trsCnt = document.getElementsByClassName('colo').length + 1;  //trs 카운트

    var trs = document.createElement('tr');
    var field = document.getElementById('field');

    trs.setAttribute('class', 'colo');  //colo라는 class를 생성한 후, trs의 class로 설정
    trs.setAttribute('id', 'colo' + trsCnt)  //trs의 id 설정(각각 다르게)

    var toDoTxt = document.getElementById('whatToDo').value;

    var str = '';
    str += "<tr>";
    str += "<th>(" + trsCnt + ")</th>" + "<td>" + toDoTxt + "</td>";
    str += "</tr>"

    trs.innerHTML = str;
    field.appendChild(trs);
}