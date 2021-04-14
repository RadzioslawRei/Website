var button_burger = document.querySelector('.burger');
var nav = document.querySelector('.nav');
nav
var navitem1 = document.querySelector('.nav-item1');
var navitem2 = document.querySelector('.nav-item2');
var menuOpen = false;
function menuButton() {
    if(!menuOpen){
        button_burger.classList.add('open');
        menuOpen = true;
    }
    else{
        button_burger.classList.remove('open');
        menuOpen = false;
    }
};