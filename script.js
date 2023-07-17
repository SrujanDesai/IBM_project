let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');
let search = document.getElementById("search");

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
};

// scroll functionality
function scrollToId(){
let types = document.getElementById("types").value.toLowerCase();
var access = document.getElementById(types);
console.log(access);
access.scrollIntoView({behavior: 'smooth'}, true);
}