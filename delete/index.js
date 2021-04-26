var eight = document.getElementById('eight');
var seven = document.getElementById('seven');
var plus = document.getElementById('plus');
var answer = document.getElementById('answer');
var calculator = document.querySelector('.calculator')

var btnClicked = calculator.querySelector('.buttons');

answer.innerHTML = "0";
eight.addEventListener('click', function() {
    console.log('eight clicked');
    answer.innerHTML = "8";
});

btnClicked.addEventListener('click', function() {
    console.log(btnClicked.innerHTML + 'clicked');
    answer.innerHTML = btnClicked;
});

// var number
// answer =
//     seven
// eight
// nine
// plus
// four
// five
// six
// min
// one
// two
// three
// multi

// clear
// zero
// equale
// divide