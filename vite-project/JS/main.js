import "../css/style.css";
import { pokemon } from "../js/pokemon.js";

document.querySelector("#tb").addEventListener("click", function () {
  if (document.body.classList.contains("violet")) {
    document.body.classList.add("scarlet");
    document.body.classList.remove("violet");
  } else {
    document.body.classList.add("violet");
    document.body.classList.remove("scarlet");
  }
});

function displayCards() {
  pokemon.forEach((pokemon) => {
    document.querySelector(".cards").insertAdjacentHTML(
      "afterbegin",
      `<div class = "display">
        <h2 id = "name"> ${pokemon.Name} </h2>
        <h3 id = "number"> ${pokemon.Number} </h3>
        <img class = "image" src = "${pokemon.Image}"/>
        <h4 id = "Typing"> ${pokemon.Type} </h4>
        <h5 id = "Original"> ${pokemon.OG} </h5>
        </div>`
    );
  });
}
displayCards();

const scarletPokemon = pokemon.filter(
  (Version) => Version.Version === "Scarlet"
);

document.querySelector("#sb").addEventListener("click", function () {
  document.querySelectorAll(".display").forEach((e) => e.remove());
  scarletPokemon.forEach((scarletPokemon) => {
    document.querySelector(".cards").insertAdjacentHTML(
      "afterbegin",
      `<div class = "display">
        <h2 id = "name"> ${pokemon.Name} </h2>
        <h3 id = "number"> ${pokemon.Number} </h3>
        <img class = "image" src = "${pokemon.Image}"/>
        <h4 id = "Typing"> ${pokemon.Type} </h4>
        <h5 id = "Original"> ${pokemon.OG} </h5>
        </div>`
    );
  });
});

const violetPokemon = pokemon.filter((Version) => Version.Version === "Violet");

document.querySelector("#vb").addEventListener("click", function () {
  document.querySelectorAll(".display").forEach((e) => e.remove());
  violetPokemon.forEach((violetPokemon) => {
    document.querySelector(".cards").insertAdjacentHTML(
      "afterbegin",
      `<div class = "display">
        <h2 id = "name"> ${pokemon.Name} </h2>
        <h3 id = "number"> ${pokemon.Number} </h3>
        <img class = "image" src = "${pokemon.Image}"/>
        <h4 id = "Typing"> ${pokemon.Type} </h4>
        <h5 id = "Original"> ${pokemon.OG} </h5>
        </div>`
    );
  });
});

const sortedPokemon = pokemon;

document.querySelector("#db").addEventListener("click", function () {});

document.querySelector("#rb").addEventListener("click", function () {
  document.querySelectorAll(".display").forEach((e) => e.remove());
  displayCards();
});

document.querySelector("#db").addEventListener("click", function () {
  document.querySelectorAll(".display").forEach((e) => e.remove());
  displayCards();
});
