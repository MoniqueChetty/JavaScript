console.log('JS Loaded')
var username = document.getElementById('username');
var loginForm = document.getElementById('login-form');

// username.addEventListener('change', function() {
username.addEventListener('input', function() {
    console.log('Value Changed');
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
});
username.addEventListener('focus', function() {
    console.log("Element Focus");
});
username.addEventListener('blur', function() {
    console.log('Element Lost Focus')
});
// loginForm.addEventListener('submit', function() {
//     alert('Form Submitted');
// });
loginForm.addEventListener('submit', function(e) {
    alert('Form Submitted');
    e.preventDefault(); // stops for from automatically clearing iself
});
console.clear();


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

document.body.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        console.log(keyCode + ' Keydown was clicked');
    }
});