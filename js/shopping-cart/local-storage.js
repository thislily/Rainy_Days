import { productsInCart } from "../render/details.js";


//save cart array to local storage
export function saveCartToLocalStorage() {
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
}


//retrieve cart array from local storage
export function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem('productsInCart');
    return storedCart ? JSON.parse(storedCart) : null;
}