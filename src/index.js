import "./index.scss";

//Imports for webpack
import headerjs from "./components/header/header";
import newCollectionjs from "./components/newCollection/newCollection";
import categoriesjs from "./components/categories/categories";
import bestSellersjs from "./components/bestSellers/bestSellers";
import promojs from "./components/promo/promo";
//End of imports for webpack

import header from "./components/header/header.html";
import banner from "./components/banner/banner.html";
import newCollection from "./components/newCollection/newCollection.html";
import categories from "./components/categories/categories.html";
import bestSellers from "./components/bestSellers/bestSellers.html";
import promo from "./components/promo/promo.html";
import footer from "./components/footer/footer.html";

document.body.innerHTML = `
  ${header}
  ${banner}
  ${newCollection}
  ${categories}
  ${bestSellers}
  ${promo}
  ${footer}
`;
