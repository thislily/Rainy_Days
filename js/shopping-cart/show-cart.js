import { productsInCart } from "../render/details.js";
import { updateCartUI } from "./update-UI.js";

export const cartIcon = document.querySelector(".cart-icon");
export const shoppingCart = document.querySelector(".shopping-cart");

//show shopping cart on click
export function openShoppingCart() {
    shoppingCart.classList.toggle("open");
}

//calc the quantity of products
export function getTotalQuantity() {
    let totalQuantity = productsInCart.reduce(function (total, product) {
        return total + product.quantity;
    }, 0);

    return totalQuantity;
}

//display quantity of items beside cart icon and in shopping cart
export function updateTotalQuantity() {
    let totalCartItemsSpan = document.getElementById('total-cart-items');
    let totalCartItemsIcon = document.querySelector('.cart-icon-display-total')
    let totalQuantity = getTotalQuantity();

    totalCartItemsSpan.textContent = totalQuantity;

    if (totalQuantity > 0) {
        totalCartItemsIcon.style.display = ("block");
        cartIcon.classList.add("dotted");
    } else {
        totalCartItemsIcon.style.display = ("none");
        cartIcon.classList.remove("dotted");
    }
    totalCartItemsIcon.textContent = totalQuantity;
}

//calc the total price of all items in cart
export function getTotalPrice() {
    let totalPrice = productsInCart.reduce(function (total, product) {
        return total + (product.quantity * product.price);
    }, 0);

    return totalPrice;
}

//display the total price of all items in cart
export function updateTotalPrice() {
    let cartSubtotalSpan = document.getElementById('cart-subtotal');

    let totalPrice = getTotalPrice();
    
    cartSubtotalSpan.innerHTML = `$${totalPrice.toFixed(2)}`;
}

//display the total price of all items on the checkout page (multiple locations), and add the shipping cost.  If the cart is empty, shipping cost is zero.
export function updateCheckoutPrice() {
    let checkoutSubtotalSpan = document.getElementById("checkout-subtotal");
    let checkoutTotalPriceSpan = document.getElementById("total-price");
    let shipping = document.getElementById("shipping-price");

    let shippingPrice = 0;
    shipping.innerHTML =`$${shippingPrice.toFixed(2)}`;
    let totalPrice = getTotalPrice();
    let priceWithShipping = 0;

    if (totalPrice != 0){
        shippingPrice = 9.99;
        shipping.innerHTML =`$${shippingPrice.toFixed(2)}`;
        priceWithShipping = totalPrice + shippingPrice;
    }
    
    checkoutSubtotalSpan.innerHTML = `$${totalPrice.toFixed(2)}`;

    checkoutTotalPriceSpan.innerHTML = `$${priceWithShipping.toFixed(2)}`;
}

//empty the cart on load of the successful checkout page
export function checkoutCart(){
    productsInCart.splice(0, productsInCart.length);
    updateCartUI();
};