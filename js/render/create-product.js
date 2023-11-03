
export let productHTML = "";

export async function createProductHTML(product) {

  let price = "";

  if (product.price === product.discountedPrice) {
    price = `$${product.price}`;
  } else {
    price = `<span class="old-price">$${product.price}</span>
                <span class="sale-price">$${product.discountedPrice}</span>`;
  }

  const colour = product.baseColor;

  let removeBrandName = "Rainy Days ";
  let shortenedTitle = product.title.replace(removeBrandName, "");


  let genderedFit = "";
  if (product.gender === "Male") {
    genderedFit = "Masculine Fit";
  } else if (product.gender === "Female") {
    genderedFit = "Feminine Fit";
  } else {
    genderedFit = "Unisex Fit";
  }

  productHTML = ` <a class="product" href="./items/?id=${product.id}">
                            <img src="${product.image}" alt="${product.title}" />
                            <div class="product-info">
                                <div class="product-snapshot">
                                    <h2>${shortenedTitle}</h2>
                                    <i>${genderedFit}</i>
                                    <p> ${price}</p>
                                </div>
                            <div class="colour-options">
                                <div class="colour1" style="background-color: ${colour}"></div>
                                <div class="colour2"></div>
                                <div class="colour3"></div>
                                <div class="colour4"></div>
                            </div>
                            </div>
                            </a>`;
};

console.log();
