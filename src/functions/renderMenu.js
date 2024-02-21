import pepperoni from "../images/pepperoni.png"
function menu(){
  const mainElement = document.querySelector(".main");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const mainDishesContainer = document.createElement("div");
  mainDishesContainer.classList.add("main-dishes-container")
  const mainDishesTitle = document.createElement("div")
  mainDishesTitle.textContent = "Main Dishes";
  mainDishesTitle.classList.add("main-dishes-title");
  const mainFoodsContainer = document.createElement("div");
  mainFoodsContainer.classList.add("main-foods-container");
  const pepperoniField = document.createElement("div");
  pepperoniField.classList.add("pepperoni-field")
  const pepperoniImageContainer = document.createElement("div");
  pepperoniImageContainer.classList.add("pepperoni-image-container")
  const pepperoniImage = document.createElement("img");
  pepperoniImage.src = pepperoni;
  const pepperoniDescription = document.createElement("div");
  pepperoniDescription.classList.add("pepperoni-description")
  const pepperoniDescriptionTitle = document.createElement("div");
  pepperoniDescriptionTitle.textContent = "Pepperoni Pizza";
  pepperoniDescriptionTitle.classList.add("pepperoni-description-title")
  const pepperoniDescriptionPrice = document.createElement("div");
  pepperoniDescriptionPrice.textContent = "£13";
  pepperoniDescriptionPrice.classList.add("pepperoni-description-price")
  const pepperoniDescriptionInfo = document.createElement("div")
  pepperoniDescriptionInfo.textContent = "Indulge in Tasty Pizza's classic £13 pepperoni delight – rich tomato sauce, melted cheese, and savory pepperoni, delivering a delicious slice of simplicity."
  pepperoniDescriptionInfo.classList.add("pepperoni-description-info")

  mainElement.appendChild(menuContainer);
  menuContainer.appendChild(mainDishesContainer);
  mainDishesContainer.appendChild(mainDishesTitle);
  mainDishesContainer.appendChild(pepperoniField);
  pepperoniField.appendChild(pepperoniImageContainer);
  pepperoniImageContainer.appendChild(pepperoniImage)
  pepperoniField.appendChild(pepperoniDescription);
  pepperoniDescription.appendChild(pepperoniDescriptionTitle);
  pepperoniDescription.appendChild(pepperoniDescriptionPrice);
  pepperoniDescription.appendChild(pepperoniDescriptionInfo);
}
export {menu}