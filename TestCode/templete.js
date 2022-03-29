//https://wikidocs.net/111736
//addEventListener 사용법, event 종류
//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/
//텍스트 변경
//https://www.delftstack.com/ko/howto/javascript/javascript-change-text/#javascript%EC%97%90%EC%84%9C-createtextnode-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9A%94%EC%86%8C%EC%9D%98-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B3%80%EA%B2%BD
//텍스트 스타일 변경
//https://www.daleseo.com/css-typography/
//virtual DOM
//https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Virtual-DOM/#_4-diff-%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7-%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%AD%E1%86%BC
let field = document.querySelector('#todo-list');  //to do list가 추가되는 곳

let newInput = document.querySelector('#new-todo-title');
newInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        addDiv();
    }
});

let newToDoList = [];  //입력받은 항목을 저장할 배열

function addDiv() {
    let cntDiv = document.getElementsByClassName('newDiv').length + 1;  //생성된 div의 개수
    
    let newDiv = document.createElement('div');  //새로운 ul 생성
    newDiv.setAttribute('class', 'newDiv');  //새로운 div의 class 지정
    newDiv.setAttribute('id', 'newDiv' + cntDiv);  //새로운 div의 id를 몇 번째 생성된 div인지로 지정

    let newToDo = document.querySelector('#new-todo-title').value;  //입력받는 to do
    newToDoList.push(newToDo);  //입력받은 항목을 배열에 저장

    var str = '';  //추가될 to do list의 content
    str += "<input id=" + "listCheckBox" + cntDiv + " onclick=" + "callChangeTxt(this.id)" + " type=" + "'checkbox'/>";  //체크 박스
    str += "<span id='addedToDoTxt'" + cntDiv + ">" + newToDo + "</span>";  //새로 입력받은 항목
    str += "<button class=" + "delBtn" + " id=" + "delBtn" + cntDiv + " onclick=" + "delDiv(this.id)" + ">X</button>";  //삭제 버튼

    newDiv.innerHTML = str;
    field.appendChild(newDiv);
}



function callChangeTxt(calledId) {
    let cnt;
    for(var i = 1; i < 10000; i++) {
        if('listCheckBox' + i === calledId) {
            cnt = i;
            break;
        }
    }
    
    let inputTxt = newToDoList[cnt - 1];

    let isChecked = document.getElementById('listCheckBox' + cnt).checked;//OK
    let txtToChange = document.getElementById('newDiv' + cnt);
    
    if(isChecked === true) {
        let newStr = '';  //추가될 to do list의 content
        newStr += "<input id=" + "listCheckBox" + cnt + " onclick=" + "callChangeTxt(this.id)" + " type=" + "'checkbox' checked/>";
        newStr += "<span style=" + "text-decoration: line-through;" + " id='addedToDoTxt'" + cnt + ">Done" + "</span>";
        newStr += "<button class=" + "delBtn" + " id=" + "delBtn" + cnt + " onclick=" + "delDiv(this.id)" + ">X</button>";
        txtToChange.innerHTML = newStr
    }

    if(isChecked === false) {
        let returnStr = '';  //추가될 to do list의 content
        returnStr += "<input id=" + "listCheckBox" + cnt + " onclick=" + "callChangeTxt(this.id)" + " type=" + "'checkbox'/>";
        returnStr += "<span id='addedToDoTxt'" + cnt + ">" + inputTxt + "</span>";
        returnStr += "<button class=" + "delBtn" + " id=" + "delBtn" + cnt + " onclick=" + "delDiv(this.id)" + ">X</button>";
        txtToChange.innerHTML = returnStr
    }
}

function delDiv(curId) {
    let delId;
    for(var i = 1; i < 10000; i++) {
        if('delBtn' + i === curId) {
            delId = i;
            break;
        }
    }
    field.removeChild(document.getElementById('newDiv' + delId));
}