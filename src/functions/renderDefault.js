import img from "../images/restaurant.png"
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
  linkHome.textContent = "Home"
  const linkMenu = document.createElement("li");
  linkMenu.textContent = "Menu"
  const linkContact = document.createElement("li");
  linkContact.textContent = "Contact us"
  // main
  const main =  document.createElement("div");
  main.classList.add("main");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  mainContainer.classList.add("starting-layout")
  const descriptionFields = document.createElement("div")
  descriptionFields.classList.add("description-fields")
  const titleField = document.createElement("div");
  titleField.textContent = "Welcome to Tasty ";
  titleField.classList.add("title-field")
  const pizzaSpan = document.createElement("span");
  pizzaSpan.textContent = "Pizza"
  pizzaSpan.classList.add("pizza-span")
  const aboutUs = document.createElement("div");
  aboutUs.textContent = "Welcome to Tasty Pizza, where the art of pizza-making comes to life! Our restaurant is a culinary haven for pizza lovers, offering a delectable array of handcrafted pizzas that are bound to tantalize your taste buds. With a focus on high-quality, fresh ingredients, and a passion for perfecting the pizza experience, we invite you to savor each bite and join us on a delightful gastronomic journey. Explore our diverse menu and discover the flavors that make our pizzas a true sensation. We can't wait to serve you!"
  aboutUs.classList.add("description-about-us")
  const openingTimesFields = document.createElement("div");
  openingTimesFields.classList.add("opening-times-fields")
  const openTimesTitle = document.createElement("div");
  openTimesTitle.textContent = "Opening times";
  openTimesTitle.classList.add("opening-times-title")
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container")
  const actualImage = document.createElement("img");
  actualImage.src =  img;
  actualImage.style.cssText = "border-radius: 4px; height: 100%; width: auto; "
  actualImage.classList.add("low-opacity")
  const buttonContainer = document.createElement("div");
  const menuButton = document.createElement("button")
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
  main.appendChild(mainContainer);
  mainContainer.appendChild(descriptionFields);
  descriptionFields.appendChild(titleField);
  titleField.appendChild(pizzaSpan)
  descriptionFields.appendChild(aboutUs)
  mainContainer.appendChild(openingTimesFields);
  openingTimesFields.appendChild(openTimesTitle)
  mainContainer.appendChild(imgContainer);
  imgContainer.appendChild(actualImage)
  container.appendChild(footer)
  footer.appendChild(repoLink)

}
export {renderDefault}