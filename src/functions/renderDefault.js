import { home } from "./renderHome";
import { clear } from "./clear";
import { switchOpacity } from "./logic/switchOpacity";
import { menu } from "./renderMenu";
import { contactUs } from "./renderContactUs";
function renderDefault(){
  const container = document.createElement("div");
  // navbar
  container.classList.add("container")
  const navElement = document.createElement("div");
  navElement.classList.add("nav");
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo")
  logoContainer.textContent = "Tasty ";
  const pizzaTitle = document.createElement("span");
  pizzaTitle.textContent = "Pizza";
  const links = document.createElement("ul");
  const linkHome = document.createElement("li");
  linkHome.textContent = "Home";
  linkHome.onclick = () =>{
    clear();
    home();
    switchOpacity();
  }
  const linkMenu = document.createElement("li");
  linkMenu.textContent = "Menu";
  linkMenu.onclick = () =>{
    clear();
    menu()
  }
  const linkContact = document.createElement("li");
  linkContact.textContent = "Contact us";
  linkContact.onclick = () =>{
    clear();
    contactUs();
  }
  // main
  const main =  document.createElement("div");
  main.classList.add("main");
  // footer
  const footer = document.createElement("div");
  footer.classList.add("footer")
  const repoLink = document.createElement("a");
  repoLink.textContent = `Created by Mohamed`;
  repoLink.setAttribute("href","https://github.com/MAsecurity")

  // Add to DOM
  document.body.appendChild(container);
  container.appendChild(navElement);
  navElement.appendChild(logoContainer);
  logoContainer.appendChild(pizzaTitle);
  navElement.appendChild(links);
  links.appendChild(linkHome);
  links.appendChild(linkMenu);
  links.appendChild(linkContact)
  container.appendChild(main);
  container.appendChild(footer)
  footer.appendChild(repoLink);
  home();
  switchOpacity()

}
export {renderDefault}