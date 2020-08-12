var strap = document.getElementById('watch');
var items = document.querySelectorAll('#select-colour'),
    tab = [],
    divIndex;
// var divSelectorChild = document.querySelector("#select-colour div");
var colours = document.getElementById('select-colour');
var btnTime = document.getElementById('time');
var timer = document.getElementById('timer');
var btnHeartRate = document.getElementById('heart-rate');
var heartRate = document.getElementById('heartRate');
var btnBlack = document.getElementById('black');
var btnRed = document.getElementById('red');
var btnBlue = document.getElementById('blue');
var btnPurple = document.getElementById('purple');


btnBlack.addEventListener('click', function() {
    strap.src = "https://i.imgur.com/iOeUBV7.png";
})
btnRed.addEventListener('click', function() {
    strap.src = "https://i.imgur.com/PTgQlim.png";
})
btnBlue.addEventListener('click', function() {
    strap.src = "https://i.imgur.com/Mplj1YR.png";
})
btnPurple.addEventListener('click', function() {
    strap.src = "https://i.imgur.com/xSIK4M8.png";
})

btnTime.addEventListener('click', function() {
    heartRate.style.visibility = 'hidden';
    timer.style.visibility = 'visible'

})
btnHeartRate.addEventListener('click', function() {
    timer.style.visibility = 'hidden';
    heartRate.style.visibility = 'visible'

})

function startTime() {
    console.log('start');
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

//Option 2
// colours.addEventListener('mouseover', createArray());

// var col = black;
// colours.addEventListener('click', colourClicked());


// function createArray() {
//     items = document.querySelectorAll('#select-colour div'),
//         tab = [],
//         divIndex;
//     // console.log("tab = " + tab);
//     for (let i = 0; i < items.length; i++) {
//         tab.push(items[i].innerHTML)
//         console.log("tab: " + tab);
//     }
// }

// function colourClicked() {

//     for (let i = 0; i < items.length; i++) {
//         items[i].onclick = function() {
//             divIndex = tab.indexOf(this.innerHTML)
//             console.log(i);
//             var col = i;
//             switch (col) {
//                 case 0:
//                     console.log(col);
//                     strap.src = "https://i.imgur.com/iOeUBV7.png"
//                     break;
//                 case 1:
//                     strap.src = "https://i.imgur.com/PTgQlim.png"
//                     break;
//                 case 2:
//                     strap.src = "https://i.imgur.com/Mplj1YR.png"
//                     break;
//                 case 3:
//                     strap.src = "https://i.imgur.com/xSIK4M8.png"
//                     break;
//                 default:
//                     {
//                         break;
//                     }
//             }
//         }
//     }
// }