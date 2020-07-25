console.log('JS Loaded');

var countDownElement = document.getElementById('countdown');

var initialCountDownVal = countDownElement.innerHTML
var bgImage = document.getElementById('bg-image');




var interval = setInterval(function() {
    initialCountDownVal = initialCountDownVal > 0 ? initialCountDownVal - 1 : 0;
    countDownElement.innerHTML = initialCountDownVal;
    countDownElement.style.fontSize = initialCountDownVal * 70 + 10 + "px";

    bgImage.src = initialCountDownVal % 2 === 0 ? '/assets/images1.jpg' : '/assets/images2.jpg';
    bgImage.style.width = initialCountDownVal * 10 + "vw";

    if (initialCountDownVal <= 0) {
        clearInterval(interval);
    }


}, 1000)