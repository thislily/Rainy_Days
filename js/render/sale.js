import { productsContainer, loader, getProducts, addOnSignUpHtml } from "./products.js";
import { createProductHTML,productHTML } from "./create-product.js";


export async function displaySaleProducts(data){
  for (let i = 0; i < data.length; i++) {
    if (!data[i].onSale) {
          continue;
        } 
    createProductHTML(data[i]);
    productsContainer.innerHTML += productHTML;
  }
  loader.classList.remove("loader");
  productsContainer.innerHTML += addOnSignUpHtml;
};


export async function salePage(){
    const products = await getProducts();
    displaySaleProducts(products);
  }; 