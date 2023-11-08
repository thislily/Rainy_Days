import { getProducts } from "./products.js";

const saleBannerContainer = document.querySelector(".winter-sale-full");

let saleBannerHTML = "";

export async function displayRandomProduct(data) {
  let saleArr = [];
  for (let i = 0; i < data.length; i++) {
    if (!data[i].onSale) {
      continue;
    }
    saleArr.push(data[i]);
  }

  let randomNumber = Math.floor(Math.random() * saleArr.length);

  let saleImageHTML = `src="${saleArr[randomNumber].image}" alt="${saleArr[randomNumber].title}"`;

  saleBannerHTML = `<img ${saleImageHTML}/>`;

  saleBannerContainer.innerHTML += saleBannerHTML;
}

export async function saleBanner() {
  const products = await getProducts();
  displayRandomProduct(products);
}
