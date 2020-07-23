import "./index.scss";

//Imports for webpack
import headerjs from "./components/header/header";
import cardjs from "./components/card/card";
//End of imports for webpack

import header from "./components/header/header.html";
import banner from "./components/banner/banner.html";
import card from "./components/card/card.html";

document.body.innerHTML = `
  ${header}
  ${banner}
  ${card}
`;
