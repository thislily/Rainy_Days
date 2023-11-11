import { collectionPage } from "./render/products.js";
import { salePage } from "./render/sale.js";
import { itemPage, productsInCart } from "./render/details.js";
import { saleBanner } from "./render/create-sale-banner.js";
import { openShoppingCart, cartIcon, updateTotalQuantity } from "./shopping-cart/show-cart.js";
import { updateCartUI } from "./shopping-cart/update-UI.js";
import { updateCheckoutPrice,checkoutCart } from "./shopping-cart/show-cart.js";


//run functions based on location
if (location.pathname === "/html/collection"){  
    collectionPage();
}

if (location.pathname === "/html/sale"){
    salePage();
}

if (location.pathname === "/html/items/"){
    itemPage();
}

if (location.pathname === "/html/checkout") {
    document.addEventListener("scroll", updateCheckoutPrice);
    updateCheckoutPrice();
}

if (location.pathname === "/html/successful-checkout"){
    checkoutCart();
}

if (location.pathname ==="/index" || location.pathname === "/html/successful-checkout"){
    saleBanner();
}

//update all UI
updateCartUI();
updateTotalQuantity();

//cart opens on click
cartIcon.addEventListener("click", openShoppingCart);