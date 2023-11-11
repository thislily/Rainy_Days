import { productsInCart } from "../render/details.js";

export function saveCartToLocalStorage() {
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
}

export function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem('productsInCart');
    return storedCart ? JSON.parse(storedCart) : null;
}