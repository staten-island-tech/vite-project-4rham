import "../CSS/style.css";
import { Spokemon } from "../JS/pokemon.js";

document.querySelector("#app").innerHTML = ` 
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

document.querySelector("#app").innerHTML = (
  <h1 class="title">P4R4D0X P0K3M0N</h1>
);

document.querySelector("#app").innerHTML = <button id="theme">Theme</button>;
