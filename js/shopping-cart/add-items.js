import { productsInCart } from "../render/details.js";
import { saveCartToLocalStorage } from "./local-storage.js";
import { updateCartUI } from "./update-UI.js";
import { updateTotalQuantity,updateTotalPrice } from "./show-cart.js";


//on click of "add to cart", push the selected item to the cart array. if the item it already in the cart, increase the quantity by 1.
export function addToCart(item) {
    let existingProduct = productsInCart.find(function(product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        let removeBrandName = "Rainy Days ";
        let product = {
            id: item.id,
            name: item.title.replace(removeBrandName, ""),
            title: item.title,
            quantity: 1,
            colour: item.baseColor,
            price: item.discountedPrice,
            oldPrice: item.price,
            onSale: item.onSale,
            image: item.image
        };

        productsInCart.push(product);
    }

    //update all UI and storage to adjust for new items
    updateCartUI();
    updateTotalQuantity();
    saveCartToLocalStorage();
    updateTotalPrice();
}