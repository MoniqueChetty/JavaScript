console.log('JS Loaded')

//127 Keyboard events

// document.body.addEventListener('keydown', function(e) {
//     console.log(Keydown=>');
// });
// document.body.addEventListener('keyup', function() {
//     console.log('Keyup=>')
// })
// document.body.addEventListener('keypress', function() {
//     console.log('Keypressed=>')
// })
// www.keycode.info

// document.body.addEventListener('keydown', function(e) {
//     var keyCode = e.keyCode;
//     if (keyCode === 13) {
//         console.log(keyCode + ' Keydown was clicked');
//     }aaa
// });

var btn;
var btnAll = document.querySelectorAll('section div');
document.body.addEventListener('keyup', function(e) {
    for (i = 0; i < btnAll.length; i++) {
        btnAll[i].style.border = ('3px solid blue');
        btnAll[i].style.backgroundColor = '';
    }
});

document.body.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    switch (keyCode) {
        case 65:
            myAudio = new Audio('assets/clap.wav').play();
            btnAll[0].style.border = ('3px solid yellow');
            break;
        case 83:
            myAudio = new Audio('assets/hihat.wav').play();
            btnAll[1].style.border = ('3px solid yellow');
            break;
        case 68:
            myAudio = new Audio('assets/kick.wav').play();
            btnAll[2].style.border = ('3px solid yellow');
            break;
        case 70:
            myAudio = new Audio('assets/openhat.wav').play();
            btnAll[3].style.border = ('3px solid yellow');
            break;
        case 71:
            myAudio = new Audio('assets/boom.wav').play();
            btnAll[4].style.border = ('3px solid yellow');
            break;
        case 72:
            myAudio = new Audio('assets/ride.wav').play();
            btnAll[5].style.border = ('3px solid yellow');
            break;
        case 74:
            myAudio = new Audio('assets/snare.wav').play();
            btnAll[6].style.border = ('3px solid yellow');
            break;
        case 75:
            myAudio = new Audio('assets/tom.wav').play();
            btnAll[7].style.border = ('3px solid yellow');
            break;
        case 76:
            myAudio = new Audio('assets/tink.wav').play();
            btnAll[8].style.border = ('3px solid yellow');
            break;
    }

});