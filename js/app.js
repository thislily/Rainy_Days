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

if (location.pathname ===".app" || location.pathname === "/html/successful-checkout"){
    saleBanner();
}

if (location.pathname ==="/html/login"){
    saleBanner();
    loginWidget();
};

//update all UI
updateCartUI();
updateTotalQuantity();
window.addEventListener('load', checkForUsername);

//cart opens on click
cartIcon.addEventListener("click", openShoppingCart);