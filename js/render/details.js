import { loader } from "./products.js";
import { url } from "./products.js";
import { displayError } from "../messages/error.js";

const itemContainer = document.querySelector(".item-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const itemURL = url + id;

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

export async function displayItem(data){

    let itemHTML = "";
    
      let price = "";
      if (data.price === data.discountedPrice) {
      price = `$${data.price}`;
      } else {
       price = `<span class="old-price">$${data.price}</span>
                <span class="sale-price">$${data.discountedPrice}<span>`;
      };
    
      let removeBrandName = "Rainy Days ";
      let shortenedTitle = data.title.replace(removeBrandName, "");
    
      let genderedFit = "";
      if (data.gender === "Male") {
        genderedFit = "Masculine Fit";
      } else if (data.gender === "Female") {
        genderedFit = "Feminine Fit";
      } else {
          genderedFit = "Unisex";
      };

      let sizeLabels = "";
      for (let i = 0; i < data.sizes.length; i++){
          let size = data.sizes[i];  
          sizeLabels += `<label class="size-bubble" for="${size}">
                            <input type="radio" name="colour-picker" id="${size}" value="${size}" />
                            <h3>${size.toUpperCase()}</h3>
                        </label>`
        }

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
    
      itemHTML = `<img
      src="${data.image}" alt="${data.title}"/>
      <div class="item-information">
      <h1>${shortenedTitle}</h1>
      <h2><i>${genderedFit}</i></h2>
      <p>${data.description}</p>
      <p>${price}</p>
      <div class="size-picker">${sizeLabels}</div>
      <div class="colour-picker">${colourLabels}</div>

      <div class="checkout-buttons">
        <button class="add-to-cart">Add to Cart</button>
        <a class="go-to-checkout" href="../checkout.html">Checkout</a>
        </div>
      </div> `;
    
      loader.classList.remove("loader");
      itemContainer.innerHTML = itemHTML;

};

  export async function itemPage(){
      const item = await getItem();
      displayItem(item);  
  };