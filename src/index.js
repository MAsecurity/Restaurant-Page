import "./style.css";
import {getDefault} from "./functions/renderDefault";
import {getHome} from "./functions/renderHome";
import { clearContents } from "./functions/clear";

(function deploy(){
  getDefault();
  getHome();
  const homeLink = document.querySelector("#home");
  const menuLink = document.querySelector("#menu");
  const contactLink = document.querySelector("#contact")
  homeLink.addEventListener("click", ()=>{
    clearContents();
    getHome();
  });
  menuLink.addEventListener("click", ()=>{
    clearContents();
  });
  contactLink.addEventListener("click", ()=>{
    clearContents();
  });
  
})();







