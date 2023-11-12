import { productsInCart } from "../render/details.js";
import { saveCartToLocalStorage } from "./local-storage.js";
import { removeFromCart } from "./remove-items.js";
import { updateTotalQuantity, updateTotalPrice } from "./show-cart.js";

//update shopping cart UI
export function updateCartUI() {
  let cartItems = document.querySelector(".cart-items");

  let filteredCart = productsInCart.filter(function (product) {
    return product.quantity > 0;
  });

  saveCartToLocalStorage(filteredCart);

  cartItems.innerHTML = "";

  //display message if cart is empty
  if (filteredCart.length === 0) {
    let emptyCartMessage = document.createElement("p");
    emptyCartMessage.classList.add("empty-cart-message");
    let spacer = `</div><span class="cart-spacing-line"></span>`;
    emptyCartMessage.textContent =
      "Oops, there isn't anything in your cart yet!";

    cartItems.appendChild(emptyCartMessage);
    cartItems.innerHTML += spacer;

  } else {

    //add the following html to the shopping cart ul for every product in the cart array
    filteredCart.forEach(function (product) {
      let listItem = document.createElement("li");
      listItem.innerHTML = `<div class="cart-item">
                  <img
                    class="cart-item-image"
                    src="${product.image}"
                    alt="${product.name}"
                  />
                  <div class="cart-item-info">
                    <b>${product.name}</b>
                    <div>
                      <p>Size: <span class="cart-item-size"">Medium</span></p>
                      <p>Colour: <span class="cart-item-colour">${product.colour}</span></p>
                    </div>
                    <div class="item-quantity-box">
                      <label for="cart-item-quantity">Qty: </label>
                      <input
                        type="number"
                        id="cart-item-quantity"
                        name="cart-item-quantity"
                        min="1"
                        max="10"
                        readonly
                        value="${product.quantity}"
                      />
                    </div>
                  </div>
                  <div class="cart-item-cost">
                    <button class="remove" data-product-id="${product.id}"><img
                      class="x-mark"
                      src="../../images/checkout/close.svg"
                      alt="close icon, click to remove item from cart"
                    /></button>
                    <p><span class="cart-item-price">$${product.price}</span></p>
                  </div>
                   
                  </div><span class="cart-spacing-line"></span>
               
                  `;
      cartItems.appendChild(listItem);

      //remove items on click of remove button
      listItem.querySelector(".remove").addEventListener("click", function () {
        removeFromCart(product.id);
      });
    });
  }

  //update all UI and storage 
  saveCartToLocalStorage();
  updateTotalQuantity();
  updateTotalPrice();
}