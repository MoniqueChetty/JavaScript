console.log('JS Loaded')

var mainHeading = document.getElementById("main-heading");
var btnIncreaseFont = document.getElementById("font-increase");
var btnDecreaseFont = document.getElementById("font-decrease");

// console.log(window.getComputedStyle(btnDecreaseFont).marginRight);
// console.log(window.getComputedStyle(btnDecreaseFont).textDecoration);
// console.log(btnIncreaseFont.style.marginRight);

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
console.log(initialFontSize);
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)));

//option1
btnIncreaseFont.onclick = function() {
    initialFontSize += 20;
    console.log(initialFontSize);
    mainHeading.style.fontSize = initialFontSize + "px";
}

//option2
var decrease = function() {
    initialFontSize -= 20;
    console.log(initialFontSize);
    mainHeading.style.fontSize = initialFontSize + "px";
}

btnDecreaseFont.addEventListener('click', decrease);