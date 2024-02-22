import pepperoni from "../images/pepperoni.png"
import cheesePizza from "../images/cheesePizza.png"
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
  // cheese pizza
  const cheesePizzaField = document.createElement("div");
  cheesePizzaField.classList.add("cheese-pizza-field");
  const cheesePizzaImageContainer = document.createElement("div");
  cheesePizzaImageContainer.classList.add("cheese-pizza-image-container");
  const cheesePizzaImage = document.createElement("img");
  cheesePizzaImage.src = cheesePizza;
  const cheesePizzaDescription = document.createElement("div");
  cheesePizzaDescription.classList.add("cheese-pizza-description");
  const cheesePizzaDescriptionTitle = document.createElement("div");
  cheesePizzaDescriptionTitle.classList.add("cheese-pizza-description-title");
  cheesePizzaDescriptionTitle.textContent = "Cheese Pizza";
  const cheesePizzaDescriptionPrice = document.createElement("div");
  cheesePizzaDescriptionPrice.textContent = "£10";
  cheesePizzaDescriptionPrice.classList.add("cheese-pizza-description-price");
  const cheesePizzaDescriptionInfo = document.createElement("div");
  cheesePizzaDescriptionInfo.textContent = "Savor the cheesy perfection of our delightful Cheese Pizza, featuring a rich blend of premium cheeses on a crispy crust, all for the tempting price of £10 – a taste of indulgence without breaking the bank!";
  cheesePizzaDescriptionInfo.classList.add("cheese-pizza-description-info");



  // Add Dom
  mainElement.appendChild(menuContainer);
  menuContainer.appendChild(mainDishesContainer);
  mainDishesContainer.appendChild(mainDishesTitle);
  // Add pepperoni
  mainDishesContainer.appendChild(pepperoniField);
  pepperoniField.appendChild(pepperoniImageContainer);
  pepperoniImageContainer.appendChild(pepperoniImage)
  pepperoniField.appendChild(pepperoniDescription);
  pepperoniDescription.appendChild(pepperoniDescriptionTitle);
  pepperoniDescription.appendChild(pepperoniDescriptionPrice);
  pepperoniDescription.appendChild(pepperoniDescriptionInfo);
  // Add cheese pizza
  mainDishesContainer.appendChild(cheesePizzaField);
  cheesePizzaField.appendChild(cheesePizzaImageContainer);
  cheesePizzaImageContainer.appendChild(cheesePizzaImage);
  cheesePizzaField.appendChild(cheesePizzaDescription);
  cheesePizzaDescription.appendChild(cheesePizzaDescriptionTitle);
  cheesePizzaDescription.appendChild(cheesePizzaDescriptionPrice);
  cheesePizzaDescription.appendChild(cheesePizzaDescriptionInfo);

}
export {menu}