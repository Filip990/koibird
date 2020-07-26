import "./index.scss";

//Imports for webpack
import "./components/header/header";
import "./components/newCollection/newCollection";
import "./components/categories/categories";
import "./components/bestSellers/bestSellers";
import "./components/promo/promo";
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
