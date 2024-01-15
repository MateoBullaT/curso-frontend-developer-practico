
//USER MENU DESKTOP
const desktopMenu = document.querySelector(".desktop-menu");
const nameUser = document.getElementById("navbar-email");

nameUser.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    shoppingCart.classList.add("inactive");
    productContentDetail.classList.add("inactive");
};


//MENU TOGGLE RESPONSIVE
const menuToggle = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggle.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {    
    mobileMenu.classList.toggle("toggle-active");
    shoppingCart.classList.add("inactive");
    productContentDetail.classList.add("inactive");
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
    productContentDetail.classList.add("inactive");
    
}


//PRODUCT CONTENT DETAIL 
const productContentDetail = document.querySelector(".product-content-detail");

const hiddeButtonProductContent = document.querySelector(".product-content-detail-close")
hiddeButtonProductContent.addEventListener("click", hideProductContentDetail)
function hideProductContentDetail(){
    productContentDetail.classList.add("inactive"); 
}



//LIST PRODUCTS RENDERING

const productList = [];

productList.push({
    name: "Tostadora de Lujo",
    price: 25,
    image: "https://images.pexels.com/photos/7936635/pexels-photo-7936635.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Tostadora premium",
    price: 100,
    image: "https://images.pexels.com/photos/7936636/pexels-photo-7936636.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Bicicleta mamalona",
    price: 270,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Peluche pikachu",
    price: 55,
    image: "https://images.pexels.com/photos/7465580/pexels-photo-7465580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Peluche Charmander",
    price: 45,
    image: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/o/pokemon-peluche-20-cm-charmander-51245003-default-1.jpg",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Peluche Charmander",
    price: 45,
    image: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/o/pokemon-peluche-20-cm-charmander-51245003-default-1.jpg",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Peluche Charmander",
    price: 45,
    image: "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/872x872/productos/i/p/o/pokemon-peluche-20-cm-charmander-51245003-default-1.jpg",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Bicicleta mamalona",
    price: 270,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Tostadora premium",
    price: 100,
    image: "https://images.pexels.com/photos/7936636/pexels-photo-7936636.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});

productList.push({
    name: "Tostadora de Lujo",
    price: 25,
    image: "https://images.pexels.com/photos/7936635/pexels-photo-7936635.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});



function productListRendering(arr){
    let productsContainer = document.querySelector(".cards-container");
    for (const product of arr) {

        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productsContainer.append(productCard);

        let imageProduct = document.createElement("img");
        imageProduct.setAttribute("src", product.image);

        imageProduct.addEventListener("click", showProductContentDetail);

        function showProductContentDetail(){
            productContentDetail.classList.remove("inactive");
            mobileMenu.classList.add("inactive");
            shoppingCart.classList.add("inactive");

            let detailImageProduct = document.getElementById("imageProduct");
            detailImageProduct.setAttribute("src", product.image);

            let detailPriceProduct = document.getElementById("priceProduct");
            detailPriceProduct.innerText = "$" + product.price;
            
            let detailnameProduct = document.getElementById("nameProduct");
            detailnameProduct.innerText = product.name;

            let detailDescriptionProduct = document.getElementById("descriptionProduct");
            detailDescriptionProduct.innerText = product.description;
        };


        let infoContainer = document.createElement("div");
        infoContainer.classList.add("product-info");

        let detailsContainer = document.createElement("div");
        
        let priceProduct = document.createElement("p");
        priceProduct.innerText = "$" + product.price;
        let nameProduct = document.createElement("p");
        nameProduct.innerText = product.name;

        let iconContainer = document.createElement("figure");
        let cartIcon = document.createElement("img");
        cartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
        
        iconContainer.append(cartIcon);
        
        detailsContainer. append(priceProduct, nameProduct);

        infoContainer.append(detailsContainer, iconContainer);

        productCard.append(imageProduct, infoContainer);
    }
};

productListRendering(productList);






