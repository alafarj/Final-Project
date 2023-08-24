const header = document.querySelector("header");

window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky",this.window.scrollY> 0);
})

let menu = document.querySelector('#nav-icon');
let navmenu = document.querySelector('navbar');

