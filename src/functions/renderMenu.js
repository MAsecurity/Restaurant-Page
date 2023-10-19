import pepperoniImage from "../images/pepperoniPizza.png";
function menu(){
  const allCenteredContent = document.querySelector(".center-content");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");
  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Menu";
  // Main Dishes
  const pizzaSection = document.createElement("div");
  pizzaSection.classList.add("pizzas");
  const pizzaSectionTitle = document.createElement("div");
  pizzaSectionTitle.textContent = "Main Dishes"
  const hrElement = document.createElement("hr");
  // Pepperoni Article
  const pepperoniMenuArticle = document.createElement("div");
  pepperoniMenuArticle.classList.add("menu-article");
  const pepperoniCard = document.createElement("div");
  pepperoniCard.classList.add("card");
  const pepperoniPrice = document.createElement("div");
  pepperoniPrice.classList.add("price");
  pepperoniPrice.textContent = "£13";
  const pepperoniHeading = document.createElement("div");
  pepperoniHeading.classList.add("card-heading");
  pepperoniHeading.textContent = 'Pepperoni Pizza 12 "inch"';
  const pepperoniContainerImage = document.createElement("div");
  pepperoniContainerImage.classList.add("image");
  const pepperoniActualImage = document.createElement("img");
  pepperoniActualImage.classList.add("actual-image");
  pepperoniActualImage.src = pepperoniImage;
  const pepperoniDescription = document.createElement("div");
  pepperoniDescription.classList.add("description");
  pepperoniDescription.textContent = "Eat our delicous Pepperoni Pizza for only at the price of £13";
  // Add DOM elements
  allCenteredContent.appendChild(menuContent);
  menuContent.appendChild(menuTitle);
  menuContent.appendChild(pizzaSection);
  pizzaSection.appendChild(pizzaSectionTitle);
  pizzaSection.appendChild(hrElement);
  menuContent.appendChild(pepperoniMenuArticle);
  pepperoniMenuArticle.appendChild(pepperoniCard);
  pepperoniCard.appendChild(pepperoniPrice);
  pepperoniCard.appendChild(pepperoniHeading);
  pepperoniCard.appendChild(pepperoniContainerImage);
  pepperoniContainerImage.appendChild(pepperoniActualImage);
  pepperoniCard.appendChild(pepperoniDescription);
}
export {menu};