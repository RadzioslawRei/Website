var button_burger = document.querySelector('.burger');
var nav = document.querySelector('.nav');
var menuOpen = false;
function menuButton() {
    if(!menuOpen){
        button_burger.classList.add('open');
        nav.style.opacity = '1';
        nav.style.transform = 'translate(-100%,-15px)';
        nav.style.transition = 'all .5s ease-in-out';
        menuOpen = true;
    }
    else{
        button_burger.classList.remove('open');
        nav.style.opacity = '0';
        nav.style.transform = 'translate(-90%, -15px)';
        nav.style.transition = 'all .5s ease-in-out';
        menuOpen = false;
    }
};