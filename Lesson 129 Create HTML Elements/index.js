var btnLast = document.getElementById('addLast');
var btnFirst = document.getElementById('addFirst');
var btnTask = document.getElementById('btnTask');
var list = document.getElementById('todo-list');



btnLast.addEventListener('click', function() {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode('List Item ' + (list.childElementCount + 1))
    newListElement.appendChild(textNode);
    newListElement.id = 'item' + (list.childElementCount + 1);
    console.log(newListElement);

    list.appendChild(newListElement);
});
btnFirst.addEventListener('click', function() {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode('List Item ' + (list.childElementCount + 1))
    newListElement.appendChild(textNode);
    newListElement.id = 'item' + (list.childElementCount + 1);
    console.log(newListElement);

    var first = list.firstElementChild;
    list.insertBefore(newListElement, first);
});

var input = document.getElementById('task');

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});

btnTask.addEventListener('click', addListItem);

function addListItem() {
    var newListElement = document.createElement('li');
    input = document.getElementById('task').value;
    if (input !== undefined && input !== null && input !== '') {
        input = input[0].toUpperCase() + input.slice(1).toLowerCase();
        var textNode = document.createTextNode(input);
        newListElement.appendChild(textNode);
        newListElement.id = 'item' + (list.childElementCount + 1);
        console.log(newListElement);

        list.appendChild(newListElement);

    } else {
        alert('Enter valid Value');
    }
    document.getElementById('task').value = '';
}