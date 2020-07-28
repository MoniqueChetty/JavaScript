var btn = document.querySelector('button');

btn.addEventListener('mousedown', function() {
    console.log('Mouse Down')
});
btn.addEventListener('mouseup', function() {
    console.log('Mouse Up')
});
btn.addEventListener('click', function() {
    console.log('Mouse Click')
});
btn.addEventListener('dblclick', function() {
    console.log('Mouse Double Click')
});

var over = document.querySelectorAll('div');
var number = document.querySelectorAll('p');


over[0].addEventListener('mouseover', function() {
    number[0].innerHTML = parseInt(number[0].innerHTML) + 1;
})
over[1].addEventListener('mouseenter', function() {
    number[1].innerHTML = parseInt(number[1].innerHTML) + 1;
})
over[2].addEventListener('mousemove', function() {
    number[2].innerHTML = parseInt(number[2].innerHTML) + 1;
})