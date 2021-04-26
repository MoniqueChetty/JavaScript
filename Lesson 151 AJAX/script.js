$(document).ready(function() {
    console.log("DOM Tree ready");

    var list = $('#todo-list');
    var inputBox = $('#todo-input');
    var btnUpdate = document.getElementById('update-item');
    var todoCount = document.getElementById('todo-count');

    var currentInputValue = '';

    inputBox.on({
        'input': function(e) {
            console.log(e.target.value);
            currentInputValue = e.target.value;
        },
        'keyup': function(e) {
            if (e.keyCode === 13) {
                createTODOItemAtBackend();
            }
        }
    });

    function createNewNode() {
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(currentInputValue);
        newListElement.append(textNode);
        newListElement.id = "item" + (list.childElementCount + 1);
        return newListElement;
    }

    function clearInputData() {
        console.log('clear data')
        inputBox.val('');
        currentInputValue = '';
    }

    $('#add-item').click(createTODOItemAtBackend);

    btnUpdate.addEventListener('click', function() {
        var firstElement = list.firstElementChild;
        var newListElement = createTODODynamincally(firstElement.id, currentInputValue);

        list.replaceChild(newListElement, firstElement);
        clearInputData();
    })

    function createTODODynamincally(id, title) {
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(title);
        newListElement.append(textNode);
        newListElement.id = id;
        newListElement.classList = 'list-item';

        return newListElement;
    }

    function getTODOListFromBackend() {
        $.get('https://jsonplaceholder.typicode.com/todos', function(data, status) {
            var response = data;
            for (var i = 0; i < response.length; i++) {
                // console.log(response[i].id, response[i].title);
                // console.log(createTODODynamincally(response[i].id, response[i].title));
                list.append(createTODODynamincally(response[i].id, response[i].title));
                todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
            }
        })
    }

    getTODOListFromBackend();

    function createTODOItemAtBackend() {
        var obj = {
            "userId": 1,
            "class": "list-item",
            "title": currentInputValue,
            "completed": false,
        };
        $.post('https://jsonplaceholder.typicode.com/todos', obj, function(data, status) {
            var response = data;
            list.append(createTODODynamincally(response.id, currentInputValue));
            todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
            clearInputData();
        })
    }
});

// ///////////////////////////////////////////////////////////////////////////////////////////

// $(document).ready(function() {
//     console.log("DOM Tree ready");



//     // var list = document.getElementById('todo-list');
//     var list = $('#todo-list');
//     var inputBox = $('#todo-input');
//     // var btnAdd = $('#add-item');
//     var btnUpdate = document.getElementById('update-item');
//     var todoCount = document.getElementById('todo-count');

//     var currentInputValue = '';

//     inputBox.on({
//         'input': function(e) {
//             console.log(e.target.value);
//             currentInputValue = e.target.value;
//         },
//         'keyup': function(e) {
//             if (e.keyCode === 13) {
//                 createTODOItemAtBackend();

//             }
//         }
//     });

//     // replaced with above jQuery using Key value pairs
//     // inputBox.addEventListener('input', function(e) {
//     //     currentInputValue = e.target.value;
//     // });
//     // inputBox.addEventListener('keyup', function(e) {
//     //     if (e.keyCode === 13) {
//     //         createTODOItemAtBackend();
//     //     }
//     // });

//     function createNewNode() {
//         var newListElement = document.createElement('li');
//         var textNode = document.createTextNode(currentInputValue);
//         newListElement.append(textNode);
//         newListElement.id = "item" + (list.childElementCount + 1);

//         return newListElement;
//     }
//     console.log('test');

//     // function addListItem() {
//     //     if (currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
//     //         var newListElement = createNewNode();
//     //         list.append(newListElement);
//     //         console.log(list.childElementCount)
//     //             // inputBox.value = '';
//     //             // currentInputValue = '';
//     //         clearInputData();
//     //     } else {
//     //         alert('Please entre a valid TODO item');
//     //     }
//     // }

//     function clearInputData() {
//         console.log('clear data')
//         inputBox.val;
//         currentInputValue = '';

//     }

//     $('#add-item').click(createTODOItemAtBackend);
//     // btnAdd.click(createTODOItemAtBackend);
//     //btnAdd.addEventListener('click', createTODOItemAtBackend);

//     btnUpdate.addEventListener('click', function() {
//         var firstElement = list.firstElementChild;
//         var newListElement = createTODODynamincally(firstElement.id, currentInputValue);

//         list.replaceChild(newListElement, firstElement);
//         clearInputData();
//     })

//     function createTODODynamincally(id, title) {
//         var newListElement = document.createElement('li');
//         var textNode = document.createTextNode(title);
//         newListElement.append(textNode);
//         newListElement.id = id;
//         newListElement.classList = 'list-item';

//         return newListElement;
//     }

//     // function getTODOListFromBackend() {

//     //     var http = new XMLHttpRequest();
//     //     http.onreadystatechange = function() {
//     //         if (this.readyState === 4) {
//     //             if (this.status === 200) {
//     //                 //console.log(JSON.parse(this.responseText));
//     //                 var response = JSON.parse(this.responseText);
//     //                 for (var i = 0; i < response.length; i++) {
//     //                     // console.log(response[i].id, response[i].title);
//     //                     // console.log(createTODODynamincally(response[i].id, response[i].title));
//     //                     list.append(createTODODynamincally(response[i].id, response[i].title));
//     //                     todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
//     //                 }
//     //             } else {
//     //                 console.log("Call Failed");
//     //             }
//     //         }
//     //     }
//     //     http.open('GET', "https://jsonplaceholder.typicode.com/todos", true);
//     //     http.send();

//     // }
//     // change above to use AJAX with jQuery call back function
//     function getTODOListFromBackend() {
//         $.get('https://jsonplaceholder.typicode.com/todos', function(data, status) {
//             var response = data;
//             for (var i = 0; i < response.length; i++) {
//                 // console.log(response[i].id, response[i].title);
//                 // console.log(createTODODynamincally(response[i].id, response[i].title));
//                 list.append(createTODODynamincally(response[i].id, response[i].title));
//                 todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
//             }
//         })

//         // var http = new XMLHttpRequest();
//         // http.onreadystatechange = function() {
//         //     if (this.readyState === 4) {
//         //         if (this.status === 200) {
//         //             //console.log(JSON.parse(this.responseText));
//         //             var response = JSON.parse(this.responseText);
//         //             for (var i = 0; i < response.length; i++) {
//         //                 // console.log(response[i].id, response[i].title);
//         //                 // console.log(createTODODynamincally(response[i].id, response[i].title));
//         //                 list.append(createTODODynamincally(response[i].id, response[i].title));
//         //                 todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
//         //             }
//         //         } else {
//         //             console.log("Call Failed");
//         //         }
//         //     }
//         // }
//         // http.open('GET', "https://jsonplaceholder.typicode.com/todos", true);
//         // http.send();

//     }

//     getTODOListFromBackend();

//     //   function createTODOItemAtBackend() {
//     //         var http = new XMLHttpRequest();
//     //         http.open('POST', "https://jsonplaceholder.typicode.com/todos", true)
//     //         http.onreadystatechange = function() {
//     //             if (this.readyState === 4) {
//     //                 if (this.status === 201) {
//     //                     var response = JSON.parse(this.responseText);
//     //                     // list.appendChild(createTODODynamincally(response.id, currentInputValue));
//     //                     list.append(createTODODynamincally(response.id, currentInputValue));
//     //                     console.log("Add item to list");
//     //                     todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
//     //                     clearInputData();
//     //                 } else {
//     //                     console.log("Call Failed");
//     //                 }
//     //             }
//     //         }
//     //         var obj = JSON.stringify({
//     //             "userId": 1,
//     //             "class": "list-item",
//     //             "title": currentInputValue,
//     //             "completed": true,
//     //         });
//     //         http.send(obj);
//     //     }
//     // replace above call with AJAX , JQUERY
//     // post(url, JSON object, function for receipt )
//     function createTODOItemAtBackend() {
//         var obj = {
//             "userId": 1,
//             "class": "list-item",
//             "title": currentInputValue,
//             "completed": false,
//         };
//         $.post('https://jsonplaceholder.typicode.com/todos', obj, function(data, status) {
//             var response = data;
//             list.append(createTODODynamincally(response.id, currentInputValue));
//             todoCount.innerHTML = parseInt(todoCount.innerHTML) + 1;
//             clearInputData();
//         })

//     }
//     //jquery practice
//     // https://api.jquery.com/category/events/
//     // var listItem = "<li>First List Item</li>";
//     // var listItem2 = "<li>Second List Item</li>";
//     // var listItem3 = "<li>Third List Item</li>";
//     // var listItem4 = "<li>Fourth List Item</li>";
//     // var listItem5 = "<li>Fifth List Item</li>";
//     // console.log(listItem);
//     // list.append(listItem, listItem2, listItem3, listItem4, listItem5);
//     //list.remove();
//     // $('li:first').remove();
//     // $('li').first().remove();
//     // $('li').last().remove();
//     // $('input').last().remove();
//     // $('button').last().remove();
//     // $('li').last().remove();
//     // console.log($('body').css('background-color'));
//     // console.log($('#todo-count').css('font-size'));
//     // $('#todo-count').css('font-size', '48px');
//     // $('#todo-count').css({
//     //     'font-size': '24px',
//     //     'color': 'red'
//     // });

//     $('.menu-item').css({
//         'font-size': '24px',
//         'color': 'red'
//     });
//     $('.list-item').css({
//         'font-size': '60px',
//         'color': 'blue'
//     });
//     // $('li').addClass('list-item');
//     $('.list-item').addClass('dark-card');
//     // $('.list-item').removeClass('dark-card');
//     // $('.list-item').toggleClass('dark-card');

// });