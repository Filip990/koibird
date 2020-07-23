import "./index.scss";

//Imports for webpack
import headerjs from "./components/header/header";
//End of imports for webpack

import header from "./components/header/header.html";
import banner from "./components/banner/banner.html";

document.body.innerHTML = `
  ${header}
  ${banner}
`;
