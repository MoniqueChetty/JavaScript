var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');

var currentInputValue = '';

inputBox.addEventListener('input', function(e) {
    currentInputValue = e.target.value;
});

inputBox.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addListItem();

    }
});

function createNewNode() {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);

    return newListElement;
}

function addListItem() {
    if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        var newListElement = createNewNode();
        list.appendChild(newListElement);
        console.log(list.childElementCount)
    }
}
btnUpdate.addEventListener('click', function() {
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement)
})