//https://wikidocs.net/111736
//addEventListener 사용법, event 종류
//https://kyounghwan01.github.io/blog/JS/JSbasic/addEventListener/
let newInput = document.querySelector('#new-todo-title');
newInput.addEventListener('keypress', (event)=> {
    if (event.keyCode === 13) { // key code of the keybord key
        event.preventDefault();
        alert("Enter");
    }
});

function addDiv() {
    let cntDiv = document.querySelector('.newDiv').length + 1;  //생성된 div의 개수

    let newDiv = document.createElement('div');  //새로운 div 생성
    newDiv.setAttribute('class', 'newDiv');  //새로운 div의 class 지정
    newDiv.setAttribute('id', 'newDiv' + cntDiv);  //새로운 div의 id를 몇 번째 생성된 div인지로 지정
    
    let field = document.querySelector('#todo-list');  //to do list가 추가되는 곳

    let newToDo = document.querySelector('#new-todo-title').value;  //입력받는 to do
    
    const str = '';  //추가될 to do list의 content
    str += "<input type= 'checkbox'/>";
    str += newToDo;
    str += "<button>X</button>";

    newDiv.innerHTML = str;
    field.appendChild(newDiv);
}