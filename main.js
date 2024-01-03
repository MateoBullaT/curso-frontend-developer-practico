
//USER MENU DESKTOP
const desktopMenu = document.querySelector(".desktop-menu");
const nameUser = document.getElementById("navbar-email");

nameUser.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    shoppingCart.classList.add("inactive");
};


//MENU TOGGLE RESPONSIVE
const menuToggle = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {    
    mobileMenu.classList.toggle("toggle-active");
    shoppingCart.classList.add("inactive")
};

//SHOPPING CART
const cartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");
cartIcon.addEventListener("click", showShoppingCart); 

function showShoppingCart(){
    mobileMenu.classList.add("inactive");
    mobileMenu.classList.remove("toggle-active");
    shoppingCart.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
}
