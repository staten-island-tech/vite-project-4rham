import '../css/style.css'
import {pokemon} from "./pokemon"
console.log(pokemon)

document.querySelector("#tb").addEventListener("click", function (){
    if(document.body.classList.contains("violet")){
        document.body.classList.add("scarlet");
        document.body.classList.remove("violet");
    }
    else {
        document.body.classList.add("violet")
        document.body.classList.remove("scarlet")
    }
})

function displayCards() {
    pokemon.forEach((pokemon) => {
        document.querySelector (".cards").insertAdjacentHTML("afterbegin",
        `<div class = "display">
        <h2 id = "name"> ${pokemon.Name} </h2>
        <h3 id = "number"> ${pokemon.Number} </h3>
        <img class = "image" src = "${pokemon.Image}"/>
        <h4 id = "Typing"> ${pokemon.Type} </h4>
        <h5 id = "Original"> ${pokemon.OG} </h5>
        </div>`
        );
    })
}
displayCards();

document.querySelector("#app").innerHTML = `<h1> P4R4D0X P0K3M0N </h1>`;

document.querySelector("#")