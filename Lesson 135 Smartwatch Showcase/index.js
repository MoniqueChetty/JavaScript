var strap = document.getElementById('watch-img');
var colour = document.querySelectorAll('select-colour');

colour[1].addEventListener('click', colChange());
document.getElementById('watch-img').src = "https: //i.imgur.com/iOeUBV7.png"

function colChange() {
    var col = black;
    switch (col) {
        case black:
            strap.src = "https: //i.imgur.com/iOeUBV7.png"
            break;
        case red:
            strap = "https: //i.imgur.com/PTgQlim.png"
            break;
        case blue:
            strap = "https: //i.imgur.com/Mplj1YR.png"
            break;
        case purple:
            strap = "https: //i.imgur.com/xSIK4M8.png"
            break;
    }
}