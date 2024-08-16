import Header from "./src/components/header";
import Hero from "./src/components/hero";
import About from "./src/components/about";

document.querySelector("#app").innerHTML = `
  ${Header}
  ${Hero}
  ${About}
`;
