import { collectionPage } from "./render/products.js";
import { salePage } from "./render/sale.js";
import { itemPage } from "./render/details.js";



if (location.pathname === "/html/collection" || "/html/collection.html"){  
    collectionPage();
}

if (location.pathname === "/html/sale" || "/html/sale.html"){
    salePage();
}

if (location.pathname === "/html/items/"){
    itemPage();
}


// rotating img carousel on home page

// divid between mens/womens
// add items to shopping cart
// checkout
// select favourites
// log in 
// see favourites?
// sign up
