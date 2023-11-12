import { displayError } from "../messages/error.js";
import { createProductHTML, productHTML } from "./create-product.js";

export const url = "https://api.noroff.dev/api/v1/rainy-days/";

export const productsContainer = document.querySelector(".products");
export const loader = document.querySelector(".loader");

//HTML for the end of product lists
export const addOnSignUpHtml = `<div class="dont-miss-out">
                         <h2>Don't Miss Out!</h2>
                         <p>Sign up to get early access to upcoming sales</p>
                         <a class="subscribe-button" href="login.html">Subscribe</a>
                         </div>`;


//recieve all products from API                        
export async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    productsContainer.innerHTML = displayError(
      `We can't seem to access our collection right now, please <a href="contact-us.html">contact us</a> for more information.`
    );
    loader.classList.remove("loader");
  }
};

//display all products
export async function displayProducts(data) {
  for (let i = 0; i < data.length; i++) {
    createProductHTML(data[i]);
    productsContainer.innerHTML += productHTML;
  }
  loader.classList.remove("loader");
  productsContainer.innerHTML += addOnSignUpHtml;
};

export async function collectionPage() {
  const products = await getProducts();
  displayProducts(products);
};