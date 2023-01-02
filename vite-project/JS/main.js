import '../css/style.css'
import {spokemon} from "./pokemon"
console.log(spokemon)

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