import pepperoni from "../images/pepperoni.png";
import cheesePizza from "../images/cheesePizza.png";
import vegetablePizza from "../images/vegetablePizza.png";
import chocolateCake from "../images/chocolatecake.png"
import cheeseCake from "../images/cheesecake.png";
import cocoCola from "../images/coke.png";
import mangoShake from "../images/mangoshake.png";
function menu(){
  const mainElement = document.querySelector(".main");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  // Main dishes
  const mainDishesContainer = document.createElement("div");
  mainDishesContainer.classList.add("main-dishes-container")
  const mainDishesTitle = document.createElement("div")
  mainDishesTitle.textContent = "Main Dishes";
  mainDishesTitle.classList.add("main-dishes-title");
  // pepperoni pizza
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
  // Vegetable Pizza
  const vegetablePizzaField = document.createElement("div");
  vegetablePizzaField.classList.add("vegetable-pizza-field");
  const vegetablePizzaImageContainer = document.createElement("div");
  vegetablePizzaImageContainer.classList.add("vegetable-pizza-image-container");
  const vegetablePizzaImage = document.createElement("img");
  vegetablePizzaImage.src = vegetablePizza;
  const vegetablePizzaDescription = document.createElement("div");
  vegetablePizzaDescription.classList.add("vegetable-pizza-description")
  const vegetablePizzaDescriptionTitle = document.createElement("div");
  vegetablePizzaDescriptionTitle.classList.add("vegetable-pizza-description-title");
  vegetablePizzaDescriptionTitle.textContent = "Vegetable Pizza";
  const vegetablePizzaDescriptionPrice = document.createElement("div");
  vegetablePizzaDescriptionPrice.textContent = "£13";
  vegetablePizzaDescriptionPrice.classList.add("vegetable-pizza-description-price");
  const vegetablePizzaDescriptionInfo = document.createElement("div");
  vegetablePizzaDescriptionInfo.textContent = "Savor the goodness of our Vegetable Pizza for £13 – a mouthwatering blend of fresh, colorful veggies atop a perfectly baked crust. Pure delight in every bite!"
  vegetablePizzaDescriptionInfo.classList.add("vegetable-pizza-description-info");
  // Desserts
  const dessertsContainer = document.createElement("div");
  dessertsContainer.classList.add("desserts-container");
  const dessertsTitle = document.createElement("div");
  dessertsTitle.textContent = "Desserts";
  dessertsTitle.classList.add("desserts-title");
  // Chocolate cake
  const chocolateCakeField = document.createElement("div");
  chocolateCakeField.classList.add("chocolate-cake-field");
  const chocolateCakeImageContainer = document.createElement("div");
  chocolateCakeImageContainer.classList.add("chocolate-cake-image-container");
  const chocolateCakeImage = document.createElement("img");
  chocolateCakeImage.src = chocolateCake;
  const chocolateCakeDescription = document.createElement("div");
  chocolateCakeDescription.classList.add("chocolate-cake-description")
  const chocolateCakeDescriptionTitle = document.createElement("div");
  chocolateCakeDescriptionTitle.textContent = "Chocolate Cake";
  chocolateCakeDescriptionTitle.classList.add("chocolate-cake-description-title");
  const chocolateCakeDescriptionPrice = document.createElement("div");
  chocolateCakeDescriptionPrice.textContent = "£7.50";
  chocolateCakeDescriptionPrice.classList.add("chocolate-cake-description-price")
  const chocolateCakeDescriptionInfo = document.createElement("div");
  chocolateCakeDescriptionInfo.classList.add("chocolate-cake-description-info");
  chocolateCakeDescriptionInfo.textContent = "Savor the luscious goodness of a chocolate cake priced at $7.50, an affordable delight that promises a perfect blend of sweetness and satisfaction."
  // Cheesecake
  const cheeseCakeField = document.createElement("div");
  cheeseCakeField.classList.add("cheese-cake-field");
  const cheeseCakeImageContainer = document.createElement("div");
  cheeseCakeImageContainer.classList.add("cheese-cake-image-container");
  const cheeseCakeImage = document.createElement("img");
  cheeseCakeImage.src = cheeseCake;
  const cheeseCakeDescription = document.createElement("div");
  cheeseCakeDescription.classList.add("cheese-cake-description");
  const cheeseCakeDescriptionTitle = document.createElement("div");
  cheeseCakeDescriptionTitle.textContent = "Cheese Cake";
  cheeseCakeDescriptionTitle.classList.add("cheese-cake-description-title");
  const cheeseCakeDescriptionPrice = document.createElement("div");
  cheeseCakeDescriptionPrice.textContent = "£7.50";
  cheeseCakeDescriptionPrice.classList.add("cheese-cake-description-price");
  const cheeseCakeDescriptionInfo = document.createElement("div");
  cheeseCakeDescriptionInfo.classList.add("cheese-cake-description-info");
  cheeseCakeDescriptionInfo.textContent = "Indulge in the irresistible delight of a decadent cheesecake, now available for purchase at the tempting price of £7.50."
  // Drinks
  const drinksContainer = document.createElement("div");
  drinksContainer.classList.add("drinks-container");
  const drinks = document.createElement("div");
  drinks.classList.add("drinks-title");
  drinks.textContent = "Drinks";
  // coca cola
  const cocoColaField = document.createElement("div");
  cocoColaField.classList.add("coco-cola-field");
  const cocoColaImageContainer = document.createElement("div");
  cocoColaImageContainer.classList.add("coco-cola-image-container");
  const cocoColaImage = document.createElement("img");
  cocoColaImage.src = cocoCola;
  const cocoColaDescription = document.createElement("div");
  cocoColaDescription.classList.add("coco-cola-description");
  const cocoColaDescriptionTitle = document.createElement("div");
  cocoColaDescriptionTitle.textContent = "CocaCola";
  cocoColaDescriptionTitle.classList.add("coco-cola-description-title");
  const cocoColaDescriptionPrice = document.createElement("div");
  cocoColaDescriptionPrice.classList.add("coco-cola-description-price");
  cocoColaDescriptionPrice.textContent = "£1.50";
  const cocoColaDescriptionInfo = document.createElement("div");
  cocoColaDescriptionInfo.textContent = "Coca-Cola is available for £1.50 at Tasty Pizza, a perfect refreshment to complement your pizza experience.";
  cocoColaDescriptionInfo.classList.add("coco-cola-description-info");
  // mango shake
  const mangoShakeField = document.createElement("div");
  mangoShakeField.classList.add("mango-shake-field");
  const mangoShakeImageContainer = document.createElement("div");
  mangoShakeImageContainer.classList.add("mango-shake-image-container");
  const mangoShakeImage = document.createElement("img");
  mangoShakeImage.src = mangoShake;
  const mangoShakeDescription = document.createElement("div");
  mangoShakeDescription.classList.add("mango-shake-description");
  const mangoShakeDescriptionTitle = document.createElement("div");
  mangoShakeDescriptionTitle.textContent = "Mango Shake";
  mangoShakeDescriptionTitle.classList.add("mango-shake-description-title");
  const mangoShakeDescriptionPrice = document.createElement("div");
  mangoShakeDescriptionPrice.classList.add("mango-shake-description-price");
  mangoShakeDescriptionPrice.textContent = "£2.00";
  const mangoShakeDescriptionInfo = document.createElement("div");
  mangoShakeDescriptionInfo.textContent = "Mango shake is available for £2.00 at Tasty Pizza, a perfect refreshment to complement your pizza experience.";
  mangoShakeDescriptionInfo.classList.add("mango-shake-description-info");
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
  // Add vegetable pizza
  mainDishesContainer.appendChild(vegetablePizzaField);
  vegetablePizzaField.appendChild(vegetablePizzaImageContainer);
  vegetablePizzaImageContainer.appendChild(vegetablePizzaImage);
  vegetablePizzaField.appendChild(vegetablePizzaDescription);
  vegetablePizzaDescription.appendChild(vegetablePizzaDescriptionTitle);
  vegetablePizzaDescription.appendChild(vegetablePizzaDescriptionPrice);
  vegetablePizzaDescription.appendChild(vegetablePizzaDescriptionInfo);
  // Dishes
  menuContainer.appendChild(dessertsContainer);
  dessertsContainer.appendChild(dessertsTitle);
  // Chocolate cake;
  dessertsContainer.appendChild(chocolateCakeField);
  chocolateCakeField.appendChild(chocolateCakeImageContainer);
  chocolateCakeImageContainer.appendChild(chocolateCakeImage);
  chocolateCakeField.appendChild(chocolateCakeDescription);
  chocolateCakeDescription.appendChild(chocolateCakeDescriptionTitle);
  chocolateCakeDescription.appendChild(chocolateCakeDescriptionPrice);
  chocolateCakeDescription.appendChild(chocolateCakeDescriptionInfo);
  // Cheese cake
  dessertsContainer.appendChild(cheeseCakeField);
  cheeseCakeField.appendChild(cheeseCakeImageContainer);
  cheeseCakeImageContainer.appendChild(cheeseCakeImage);
  cheeseCakeField.appendChild(cheeseCakeDescription);
  cheeseCakeDescription.appendChild(cheeseCakeDescriptionTitle);
  cheeseCakeDescription.appendChild(cheeseCakeDescriptionPrice);
  cheeseCakeDescription.appendChild(cheeseCakeDescriptionInfo);
  // Drinks
  menuContainer.appendChild(drinksContainer);
  drinksContainer.appendChild(drinks);
  // Coca cola
  drinksContainer.appendChild(cocoColaField);
  cocoColaField.appendChild(cocoColaImageContainer);
  cocoColaImageContainer.appendChild(cocoColaImage);
  cocoColaField.appendChild(cocoColaDescription);
  cocoColaDescription.appendChild(cocoColaDescriptionTitle);
  cocoColaDescription.appendChild(cocoColaDescriptionPrice);
  cocoColaDescription.appendChild(cocoColaDescriptionInfo);
  // Mango shake;
  drinksContainer.appendChild(mangoShakeField);
  mangoShakeField.appendChild(mangoShakeImageContainer);
  mangoShakeImageContainer.appendChild(mangoShakeImage);
  mangoShakeField.appendChild(mangoShakeDescription);
  mangoShakeDescription.appendChild(mangoShakeDescriptionTitle);
  mangoShakeDescription.appendChild(mangoShakeDescriptionPrice);
  mangoShakeDescription.appendChild(mangoShakeDescriptionInfo);

}
export {menu}