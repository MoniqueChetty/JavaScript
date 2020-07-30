var btnAddItem = document.getElementById('btnAddItem');
var btnUpdate = document.getElementById('btnUpdate');
var btnRemove = document.getElementById('btnRemove');
var list = document.getElementById('todo-list');
var input = document.getElementById('task');
var deleteIcon = document.getElementsByClassName('fa-trash')[0];
var li = document.getElementsByTagName('li');
var listSection = document.getElementById('listSection');
var listSectionChild = document.querySelector('#listSection li');
// var deleteIconList = document.querySelectorAll('fa-trash');

//btnAddItem add item to list with enter button
input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        addListItem();
    }
});
//btnAddItem add item to list with Button
btnAddItem.addEventListener('click', addListItem);

//Update First Item
btnUpdate.addEventListener('click', updateFirst);

//Remove Item
btnRemove.addEventListener('click', removeItem);

//Remove with icon
var items = document.querySelectorAll("#todo-list li"),
    tab = [],
    liIndex;

// first time to populate list
listSection.addEventListener('mouseover', function() {
    deleteItem();
});

// onclick to delete item
listSectionChild.addEventListener('click', function() {
    console.log('child')
    deleteItem();
});

function addListItem() {
    var newListElement2 = createNewNode();
    list.appendChild(newListElement2);
    document.getElementById('task').value = '';
}

function updateFirst() {
    var firstElement = list.firstElementChild;
    var newListElement3 = createNewNode();
    list.replaceChild(newListElement3, firstElement);
    document.getElementById('task').value = '';
}

function removeItem() {
    var lastElement = list.nth;
    if (lastElement != null) {
        list.removeChild(lastElement);
    } else {
        alert('All list items have been removed')
    }
}

function removeItem() {
    var lastElement = list.lastElementChild;
    if (lastElement != null) {
        list.removeChild(lastElement);
    } else {
        alert('All list items have been removed')
    }
}

function createNewNode() {
    var newListElement = document.createElement('li');
    input = document.getElementById('task').value;
    if (input !== undefined && input !== null && input !== '') {
        input = input[0].toUpperCase() + input.slice(1).toLowerCase();
        var textNode = document.createTextNode(input);
        var icon = deleteIcon.cloneNode(true);
        newListElement.appendChild(textNode);
        newListElement.append(icon);
        newListElement.id = 'item' + (list.childElementCount + 1);
        // console.log(newListElement);
        return newListElement;
    } else {
        alert('Enter valid Value');
    }
    document.setElementById('task').value = '';
}

function deleteItem() {
    items = document.querySelectorAll("#todo-list li"),
        tab = [],
        liIndex;
    for (let i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML)
            // console.log(tab);
    }
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            liIndex = tab.indexOf(this.innerHTML)
                // console.log(this.innerHTML + " Index = " + liIndex);
            list.removeChild(li[liIndex]);
        }
    }
}