import { loader } from "./products.js";
import { url } from "./products.js";
import { displayError } from "../messages/error.js";
import { addToCart } from "../shopping-cart/add-items.js";
import { getCartFromLocalStorage } from "../shopping-cart/local-storage.js";

const itemContainer = document.querySelector(".item-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const itemURL = url + id;


//create array of selected products
export let productsInCart = getCartFromLocalStorage() || [];

//recieve item details from API
export async function getItem() {
  try {
    const response = await fetch(itemURL);
    const item = await response.json();
    return item;    
  } catch (error) {
    itemContainer.innerHTML = displayError(`We couldn't find the item you were looking for, <a href="../../html/contact-us.html">contact us</a> for more info.`)
    loader.classList.remove("loader");
  }

  };

//display item details
export async function displayItem(data){

    let itemHTML = "";

    //check if item is on sale and change price accordingly
      let price = "";
      if (data.price === data.discountedPrice) {
      price = `$${data.price}`;
      } else {
       price = `<span class="old-price">$${data.price}</span>
                <span class="sale-price">$${data.discountedPrice}<span>`;
      };
    
      //remove brand name from title
      let removeBrandName = "Rainy Days ";
      let shortenedTitle = data.title.replace(removeBrandName, "");
    

       // display the gender based fit of the item
      let genderedFit = "";
      if (data.gender === "Male") {
        genderedFit = "Masculine Fit";
      } else if (data.gender === "Female") {
        genderedFit = "Feminine Fit";
      } else {
          genderedFit = "Unisex";
      };

      //create labels for sizes based on size array
      let sizeLabels = "";
      for (let i = 0; i < data.sizes.length; i++){
          let size = data.sizes[i];  
          let selectedSize = "";
          if (size === "M"){
            selectedSize =  "selected-size-bubble";
          }
          sizeLabels += `<label class="size-bubble ${selectedSize}" for="${size}">
                            <input type="radio" name="colour-picker" id="${size}" value="${size}" />
                            <h3>${size.toUpperCase()}</h3>
                        </label>`
        }

      // create colour labels. I made it function like the size label maker, despite only having one colour.
      let colourLabels = "";
      if (Array.isArray(data.baseColor)){
          for (let i = 0; i < data.baseColor.length; i++){
          let colour = data.baseColor[i];
          colourLabels += `<label style="background-color: ${colour}" class="colour-option " aria-label="colour-option: ${colour}">
            <input type="radio" name="colour" value="${colour}" />
            <span></span>
          </label>`;
        } 
      }else {
         let colour = data.baseColor;
         colourLabels = `<label style="background-color: ${colour}"class="colour-option " aria-label="colour-option: ${colour}">
            <input type="radio" name="colour" value="${colour}" />
            <span></span>
          </label>`;
      };
    
      //// template html for each item
      itemHTML = `<img
      src="${data.image}" alt="${data.title}"/>
      <div class="item-information">
      <h1 class="product-name">${shortenedTitle}</h1>
      <h2><i>${genderedFit}</i></h2>
      <p>${data.description}</p>
      <p class="product-price">${price}</p>
      <div class="size-picker">${sizeLabels}</div>
      <div class="colour-picker">${colourLabels}</div>

      <div class="checkout-buttons">
        <button class="add-to-cart" data-product-id="1">Add to Cart</button>
        <a class="go-to-checkout" href="../checkout.html">Checkout</a>
        </div>
      </div> `;
    
      loader.classList.remove("loader");
      itemContainer.innerHTML = itemHTML;

      //add item to cart on click
      const cartButton = document.querySelector('.add-to-cart');
      if (cartButton) {
          cartButton.addEventListener('click', function() {
              cartButton.innerText = "Item in Cart";
              setTimeout(() => {
                cartButton.innerText = "Add to Cart";
              }, "5000");
              addToCart(data);
          });
        }
};

//function runs on page load
  export async function itemPage(){
      const item = await getItem();
      displayItem(item);  
  };
