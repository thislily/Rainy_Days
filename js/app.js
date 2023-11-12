import { collectionPage } from "./render/products.js";
import { salePage } from "./render/sale.js";
import { itemPage, productsInCart } from "./render/details.js";
import { saleBanner } from "./render/create-sale-banner.js";
import { openShoppingCart, cartIcon, updateTotalQuantity } from "./shopping-cart/show-cart.js";
import { updateCartUI } from "./shopping-cart/update-UI.js";
import { updateCheckoutPrice,checkoutCart } from "./shopping-cart/show-cart.js";
import { loginWidget } from "./login/choose-option.js";
import { checkForUsername } from "./login/login.js";


//run functions based on location
if (location.pathname === "/html/collection.html"){  
    collectionPage();
}

if (location.pathname === "/html/sale.html"){
    salePage();
}

if (location.pathname === "/html/items/"){
    itemPage();
}

if (location.pathname === "/html/checkout.html") {
    document.addEventListener("scroll", updateCheckoutPrice);
    updateCheckoutPrice();
}

if (location.pathname === "/html/successful-checkout.html"){
    checkoutCart();
}

if (location.pathname ==="/index.html" || location.pathname === "/html/successful-checkout.html"){
    saleBanner();
}

if (location.pathname ==="/html/login.html"){
    loginWidget();
};

//update all UI
updateCartUI();
updateTotalQuantity();
window.addEventListener('load', checkForUsername);

//cart opens on click
cartIcon.addEventListener("click", openShoppingCart);