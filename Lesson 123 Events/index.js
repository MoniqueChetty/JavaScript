console.log('JS Loaded');

var btnClickme = document.getElementById('btn-Click');
var headerDiv = document.querySelector('header div');


// btnClickme.onmousemove
// btnClickme.onplay

// btnClickme.onclick = function() {
//     alert("Button Clicked");
// }

function onBtnClicked() {
    btnClickme.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
    btnClickme.style.color = 'white';
    btnClickme.style.border = 'none';
    //alert(Math.floor(Math.random() * 255));

    headerDiv.style.backgroundColor = ('rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')');

    // alert("Button Clicked 2");
}

// btnClickme.onclick = onBtnClicked();//() triggers function automatically
// btnClickme.onclick = onBtnClicked;

//add Event listener

// btnClickme.addEventListener('click', function() { //hover or mouseover
//     alert("Anonymous Funtion Called");
// });

btnClickme.addEventListener('click', onBtnClicked);