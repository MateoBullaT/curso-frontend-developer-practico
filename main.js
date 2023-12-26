
//USER MENU DESKTOP
const desktopMenu = document.querySelector(".desktop-menu");
const nameUser = document.getElementById("navbar-email");

nameUser.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
};


//MENU TOGGLE RESPONSIVE
const menuToggle = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {    
    mobileMenu.classList.toggle("toggle-active");
};