var button_burger = document.querySelector('.burger');
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