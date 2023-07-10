const input_ = document.getElementById('todoInput')
const list_ = document.getElementById("todoList");

function addTask() {
    if (input_.value === '') {
        alert('You must write a task !');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input_.value;
        list_.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input_.value = '';
    saveData();
}

list_.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem('data', list_.innerHTML)
}

function showTask() {
    list_.innerHTML = localStorage.getItem('data');
}

showTask();
