//https://wikidocs.net/111736
//addEventListener 사용법, event 종류
//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/
let field = document.querySelector('#todo-list');  //to do list가 추가되는 곳

let newInput = document.querySelector('#new-todo-title');
newInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        addDiv();
    }
});

function addDiv() {
    let cntDiv = document.getElementsByClassName('newDiv').length + 1;  //생성된 div의 개수
    
    let newDiv = document.createElement('div');  //새로운 ul 생성
    newDiv.setAttribute('class', 'newDiv');  //새로운 div의 class 지정
    newDiv.setAttribute('id', 'newDiv' + cntDiv);  //새로운 div의 id를 몇 번째 생성된 div인지로 지정

    let newToDo = document.querySelector('#new-todo-title').value;  //입력받는 to do
    
    var str = '';  //추가될 to do list의 content
    str += "<input type=" + "'checkbox'/>";  //체크 박스
    str += newToDo;  //새로 입력받은 항목
    str += "<button class=" + "delBtn" + " id=" + "delBtn" + cntDiv + " onclick=" + "delDiv(this.id)" + ">X</button>";  //삭제 버튼

    newDiv.innerHTML = str;
    field.appendChild(newDiv);
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