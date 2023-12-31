import pepperoniImage from "../images/pepperoniPizza.png";
import tandooriImage from "../images/TandooriChicken.png";
import donnerKebabImage from "../images/donnerKebab.png";
import beefImage from "../images/beefPizza.png";
import vegetarianImage from "../images/veganPizza.png";
import strawberryImage from "../images/strawberryCheeseCake.png";
import chocolateImage from "../images/Chocolate.png";
import sevenUpImage from "../images/sevenUp.png";
import cocoColaImage from "../images/Coco-cola.png";
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
  // TandooriChicken article
  const tandooriMenuArticle = document.createElement("div");
  tandooriMenuArticle.classList.add("menu-article");
  const tandooriCard = document.createElement("div");
  tandooriCard.classList.add("card");
  const tandooriPrice = document.createElement("div");
  tandooriPrice.classList.add("price");
  tandooriPrice.textContent = "£13";
  const tandooriHeading = document.createElement("div");
  tandooriHeading.classList.add("card-heading");
  tandooriHeading.textContent = 'Tandoori Chicken Pizza 12 "inch"';
  const tandooriContainerImage = document.createElement("div");
  tandooriContainerImage.classList.add("image");
  const tandooriActualImage = document.createElement("img");
  tandooriActualImage.classList.add("actual-image");
  tandooriActualImage.src = tandooriImage;
  const tandooriDescription = document.createElement("div");
  tandooriDescription.classList.add("description");
  tandooriDescription.textContent = "Eat our delicous Tandoori Chicken Pizza for only at the price of £13";
  //Donner Kebab Article
  const donnerKebabMenuArticle = document.createElement("div");
  donnerKebabMenuArticle.classList.add("menu-article");
  const donnerKebabCard = document.createElement("div");
  donnerKebabCard.classList.add("card");
  const donnerKebabPrice = document.createElement("div");
  donnerKebabPrice.classList.add("price");
  donnerKebabPrice.textContent = "£13";
  const donnerKebabHeading = document.createElement("div");
  donnerKebabHeading.classList.add("card-heading");
  donnerKebabHeading.textContent = 'Donner Kebab Pizza 12 "inch"';
  const donnerKebabContainerImage = document.createElement("div");
  donnerKebabContainerImage.classList.add("image");
  const donnerKebabActualImage = document.createElement("img");
  donnerKebabActualImage.classList.add("actual-image");
  donnerKebabActualImage.src = donnerKebabImage;
  const donnerKebabDescription = document.createElement("div");
  donnerKebabDescription.classList.add("description");
  donnerKebabDescription.textContent = "Eat our delicous Donner Kebab Pizza for only at the price of £13";
  // Beef Pizza Article
  const beefMenuArticle = document.createElement("div");
  beefMenuArticle.classList.add("menu-article");
  const beefCard = document.createElement("div");
  beefCard.classList.add("card");
  const beefPrice = document.createElement("div");
  beefPrice.classList.add("price");
  beefPrice.textContent = "£13";
  const beefHeading = document.createElement("div");
  beefHeading.classList.add("card-heading");
  beefHeading.textContent = 'Beef Pizza 12 "inch"';
  const beefContainerImage = document.createElement("div");
  beefContainerImage.classList.add("image");
  const beefActualImage = document.createElement("img");
  beefActualImage.classList.add("actual-image");
  beefActualImage.src = beefImage;
  const beefDescription = document.createElement("div");
  beefDescription.classList.add("description");
  beefDescription.textContent = "Eat our delicous Beef Pizza for only at the price of £13";
  //Vegetarian Article
  const vegetarianMenuArticle = document.createElement("div");
  vegetarianMenuArticle.classList.add("menu-article");
  const vegetarianCard = document.createElement("div");
  vegetarianCard.classList.add("card");
  const vegetarianPrice = document.createElement("div");
  vegetarianPrice.classList.add("price");
  vegetarianPrice.textContent = "£13";
  const vegetarianHeading = document.createElement("div");
  vegetarianHeading.classList.add("card-heading");
  vegetarianHeading.textContent = 'Vegetarian Pizza 12 "inch"';
  const vegetarianContainerImage = document.createElement("div");
  vegetarianContainerImage.classList.add("image");
  const vegetarianActualImage = document.createElement("img");
  vegetarianActualImage.classList.add("actual-image");
  vegetarianActualImage.src = vegetarianImage;
  const vegetarianDescription = document.createElement("div");
  vegetarianDescription.classList.add("description");
  vegetarianDescription.textContent = "Eat our delicous Vegetarian Pizza for only at the price of £13";
  //Adding Desserts section
  const dessertsSection = document.createElement("div");
  dessertsSection.classList.add("desserts");
  const dessertsSectionTitle = document.createElement("div");
  dessertsSectionTitle.textContent = "Desserts";
  // Strawberry Cheesecake Article
  const strawberryMenuArticle = document.createElement("div");
  strawberryMenuArticle.classList.add("menu-article");
  const strawberryCard = document.createElement("div");
  strawberryCard.classList.add("card");
  const strawberryPrice = document.createElement("div");
  strawberryPrice.classList.add("price");
  strawberryPrice.textContent = "£4";
  const strawberryHeading = document.createElement("div");
  strawberryHeading.classList.add("card-heading");
  strawberryHeading.textContent = 'Strawberry Cheesecake';
  const strawberryContainerImage = document.createElement("div");
  strawberryContainerImage.classList.add("image");
  const strawberryActualImage = document.createElement("img");
  strawberryActualImage.classList.add("actual-image");
  strawberryActualImage.src = strawberryImage;
  const strawberryDescription = document.createElement("div");
  strawberryDescription.classList.add("description");
  strawberryDescription.textContent = "Eat our delicous Strawberry Cheesecake for only at the price of £4";
  // Chocolate cake Article
  const chocolateMenuArticle = document.createElement("div");
  chocolateMenuArticle.classList.add("menu-article");
  const chocolateCard = document.createElement("div");
  chocolateCard.classList.add("card");
  const chocolatePrice = document.createElement("div");
  chocolatePrice.classList.add("price");
  chocolatePrice.textContent = "£4";
  const chocolateHeading = document.createElement("div");
  chocolateHeading.classList.add("card-heading");
  chocolateHeading.textContent = 'Chocolate cake';
  const chocolateContainerImage = document.createElement("div");
  chocolateContainerImage.classList.add("image");
  const chocolateActualImage = document.createElement("img");
  chocolateActualImage.classList.add("actual-image");
  chocolateActualImage.src = chocolateImage;
  const chocolateDescription = document.createElement("div");
  chocolateDescription.classList.add("description");
  chocolateDescription.textContent = "Eat our delicous Chocolate cake for only at the price of £4";
  // Add Drinks section
  const drinksSection = document.createElement("div");
  drinksSection.classList.add("drinks");
  const drinksSectionTitle = document.createElement("div");
  drinksSectionTitle.textContent = "Drinks";
  // Add 7Up article
  const sevenUpMenuArticle = document.createElement("div");
  sevenUpMenuArticle.classList.add("menu-article");
  const sevenUpCard = document.createElement("div");
  sevenUpCard.classList.add("card");
  const sevenUpPrice = document.createElement("div");
  sevenUpPrice.classList.add("price");
  sevenUpPrice.textContent = "£1";
  const sevenUpHeading = document.createElement("div");
  sevenUpHeading.classList.add("card-heading");
  sevenUpHeading.textContent = '7up';
  const sevenUpContainerImage = document.createElement("div");
  sevenUpContainerImage.classList.add("image");
  const sevenUpActualImage = document.createElement("img");
  sevenUpActualImage.classList.add("actual-image");
  sevenUpActualImage.src = sevenUpImage;
  const sevenUpDescription = document.createElement("div");
  sevenUpDescription.classList.add("description");
  sevenUpDescription.textContent = "Want a drink with your meal?, have some 7up.";
  // Adding Coco-cola article
  const cocoColaMenuArticle = document.createElement("div");
  cocoColaMenuArticle.classList.add("menu-article");
  const cocoColaCard = document.createElement("div");
  cocoColaCard.classList.add("card");
  const cocoColaPrice = document.createElement("div");
  cocoColaPrice.classList.add("price");
  cocoColaPrice.textContent = "£1";
  const cocoColaHeading = document.createElement("div");
  cocoColaHeading.classList.add("card-heading");
  cocoColaHeading.textContent = 'Coco-cola';
  const cocoColaContainerImage = document.createElement("div");
  cocoColaContainerImage.classList.add("image");
  const cocoColaActualImage = document.createElement("img");
  cocoColaActualImage.classList.add("actual-image");
  cocoColaActualImage.src = cocoColaImage;
  const cocoColaDescription = document.createElement("div");
  cocoColaDescription.classList.add("description");
  cocoColaDescription.textContent = "Want a drink with your meal?, have some Coco-cola.";
  // Add DOM elements
  allCenteredContent.appendChild(menuContent);
  menuContent.appendChild(menuTitle);
  menuContent.appendChild(pizzaSection);
  pizzaSection.appendChild(pizzaSectionTitle);
  pizzaSection.appendChild(hrElement);
  //Adding Pepperoni Pizza to DOM
  menuContent.appendChild(pepperoniMenuArticle);
  pepperoniMenuArticle.appendChild(pepperoniCard);
  pepperoniCard.appendChild(pepperoniPrice);
  pepperoniCard.appendChild(pepperoniHeading);
  pepperoniCard.appendChild(pepperoniContainerImage);
  pepperoniContainerImage.appendChild(pepperoniActualImage);
  pepperoniCard.appendChild(pepperoniDescription);
  //Adding Tandoori Chicken Pizza to DOM
  menuContent.appendChild(tandooriMenuArticle);
  tandooriMenuArticle.appendChild(tandooriCard);
  tandooriCard.appendChild(tandooriPrice);
  tandooriCard.appendChild(tandooriHeading);
  tandooriCard.appendChild(tandooriContainerImage);
  tandooriContainerImage.appendChild(tandooriActualImage);
  tandooriCard.appendChild(tandooriDescription);
  //Adding Donner Kebab Pizza to DOM
  menuContent.appendChild(donnerKebabMenuArticle);
  donnerKebabMenuArticle.appendChild(donnerKebabCard);
  donnerKebabCard.appendChild(donnerKebabPrice);
  donnerKebabCard.appendChild(donnerKebabHeading);
  donnerKebabCard.appendChild(donnerKebabContainerImage);
  donnerKebabContainerImage.appendChild(donnerKebabActualImage);
  donnerKebabCard.appendChild(donnerKebabDescription);
  //Adding Beef Pizza to DOM
  menuContent.appendChild(beefMenuArticle);
  beefMenuArticle.appendChild(beefCard);
  beefCard.appendChild(beefPrice);
  beefCard.appendChild(beefHeading);
  beefCard.appendChild(beefContainerImage);
  beefContainerImage.appendChild(beefActualImage);
  beefCard.appendChild(beefDescription);
  //Adding Vegetarian Pizza to DOM
  menuContent.appendChild(vegetarianMenuArticle);
  vegetarianMenuArticle.appendChild(vegetarianCard);
  vegetarianCard.appendChild(vegetarianPrice);
  vegetarianCard.appendChild(vegetarianHeading);
  vegetarianCard.appendChild(vegetarianContainerImage);
  vegetarianContainerImage.appendChild(vegetarianActualImage);
  vegetarianCard.appendChild(vegetarianDescription);
  //Adding Desserts section
  menuContent.appendChild(dessertsSection);
  dessertsSection.appendChild(dessertsSectionTitle);
  dessertsSection.appendChild(hrElement);
  // Adding Strawberry Cheesecake to DOM
  menuContent.appendChild(strawberryMenuArticle);
  strawberryMenuArticle.appendChild(strawberryCard);
  strawberryCard.appendChild(strawberryPrice);
  strawberryCard.appendChild(strawberryHeading);
  strawberryCard.appendChild(strawberryContainerImage);
  strawberryContainerImage.appendChild(strawberryActualImage);
  strawberryCard.appendChild(strawberryDescription);
  // Adding Chocolate cake to DOM
  menuContent.appendChild(chocolateMenuArticle);
  chocolateMenuArticle.appendChild(chocolateCard);
  chocolateCard.appendChild(chocolatePrice);
  chocolateCard.appendChild(chocolateHeading);
  chocolateCard.appendChild(chocolateContainerImage);
  chocolateContainerImage.appendChild(chocolateActualImage);
  chocolateCard.appendChild(chocolateDescription);
  //Adding Drinks section
  menuContent.appendChild(drinksSection);
  drinksSection.appendChild(drinksSectionTitle);
  drinksSection.appendChild(hrElement);
  //Adding sevenUp to DOM
  menuContent.appendChild(sevenUpMenuArticle);
  sevenUpMenuArticle.appendChild(sevenUpCard);
  sevenUpCard.appendChild(sevenUpPrice);
  sevenUpCard.appendChild(sevenUpHeading);
  sevenUpCard.appendChild(sevenUpContainerImage);
  sevenUpContainerImage.appendChild(sevenUpActualImage);
  sevenUpCard.appendChild(sevenUpDescription);
  //Adding Coco-cola to DOM
  menuContent.appendChild(cocoColaMenuArticle);
  cocoColaMenuArticle.appendChild(cocoColaCard);
  cocoColaCard.appendChild(cocoColaPrice);
  cocoColaCard.appendChild(cocoColaHeading);
  cocoColaCard.appendChild(cocoColaContainerImage);
  cocoColaContainerImage.appendChild(cocoColaActualImage);
  cocoColaCard.appendChild(cocoColaDescription);


}
export {menu};