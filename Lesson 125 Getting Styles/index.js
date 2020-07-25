console.log('JS Loaded')

// selectedElement.classList.add('MyClass');
var mainHeading = document.getElementById("main-heading");
var btn = document.getElementById('btn-click');
var sidebar = document.getElementById('sidebar');
var toggleIcon = document.getElementById('toggle-icon');

// var removeF = function() { mainHeading.classList.remove('big'); }

var showHide = function() {
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.add('show');
        sidebar.classList.remove('hide');
    }
}

var smallLarge = function() {
    sidebar.classList.remove('show');
    sidebar.classList.add('hide');
    if (mainHeading.classList.contains('small')) {
        mainHeading.classList.remove('small');
        mainHeading.classList.add('big');
    } else {
        mainHeading.classList.remove('big');
        mainHeading.classList.add('small');
    }
}


btn.addEventListener('click', smallLarge);

toggleIcon.addEventListener('click', showHide);


// setTimeout(removeF, 1500);