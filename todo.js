let submit = document.getElementById('submit');
let addTask = document.getElementById('addTask');
let todoList = document.getElementById('todoList');
let doneList = document.getElementById('doneList');

let list = new Array();

submit.addEventListener('click', (event) => {
    if (addTask.value != '') {
        list.push(addTask.value);
        todoList.innerHTML += '<li id="' + (list.length - 1) + '"><button onclick="complete(' + (list.length - 1) + ')">' + addTask.value + '</button></li>';
        addTask.value = '';
    }


});

function complete(id) {
    doneList.innerHTML += '<li>' + list[id] + '</li>';
    document.getElementById(id).style.display = "none";
}