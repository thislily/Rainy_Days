import { productsInCart } from "../render/details.js";
import { updateCartUI } from "./update-UI.js";
import { saveCartToLocalStorage } from "./local-storage.js";
import { updateTotalQuantity, updateTotalPrice } from "./show-cart.js";


//remove the selected item from the cart.  if the quantity of the item is more than 1, decrease the quantity by 1
export function removeFromCart(productId) {

  var index = productsInCart.findIndex(function (product) {
    return product.id === productId;
  });

  if (index !== -1) {

    if (productsInCart[index].quantity > 0) {
      productsInCart[index].quantity -= 1;
    }

    if (productsInCart[index].quantity === 0) {
      productsInCart.splice(index, 1);
    }

    //update all UI and storage to reflect the removed item
    updateCartUI();
    saveCartToLocalStorage();
    updateTotalQuantity();
    updateTotalPrice();
  }
}
