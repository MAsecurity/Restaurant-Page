import ceoImage from "../images/ceo.png";
import chefImage from "../images/chef.png";
import waiterImage from "../images/waiter.png"
function contactUs(){
  const mainContainer = document.querySelector(".main")
  const contactFields = document.createElement("div");
  contactFields.classList.add("contact-fields")
  // ceo
  const ceoField = document.createElement("div");
  ceoField.classList.add("ceo-fields")
  const ceoDetails = document.createElement("div");
  ceoDetails.classList.add("ceo-details");
  const ceoName = document.createElement("div");
  ceoName.textContent = "Peter Anderson";
  ceoName.classList.add("name")
  const ceoUl = document.createElement("ul");
  const ceoLiOne = document.createElement("li");
  ceoLiOne.textContent = "CEO"
  const ceoLiTwo = document.createElement("li");
  ceoLiTwo.textContent = "notReal1@restaurant.com";
  const ceoLiThree = document.createElement("li");
  ceoLiThree.textContent = "222-333-4444";
  const ceoImageContainer = document.createElement("div");
  ceoImageContainer.classList.add("ceo-image-container");
  const ceoActualImage = document.createElement("img");
  ceoActualImage.src = ceoImage;
  // chef
  const chefField = document.createElement("div");
  chefField.classList.add("chef-fields");
  const chefDetails = document.createElement("div");
  chefDetails.classList.add("chef-details")
  const chefName = document.createElement("div");
  chefName.textContent = "Ibrahim Yusef";
  chefName.classList.add("name");
  const chefUl = document.createElement("ul");
  const chefLiOne = document.createElement("li");
  chefLiOne.textContent = "Chef";
  const chefLiTwo = document.createElement("li");
  chefLiTwo.textContent = "notReallyReal2@restaurant.com";
  const chefLiThree = document.createElement("li");
  chefLiThree.textContent = "921-292-3302";
  const chefImageContainer = document.createElement("div");
  chefImageContainer.classList.add("chef-image-container");
  const chefActualImage = document.createElement("img");
  chefActualImage.src = chefImage;
  // waiter
  const waiterField = document.createElement("div");
  waiterField.classList.add("waiter-fields");
  const waiterDetails = document.createElement("div");
  waiterDetails.classList.add("waiter-details");
  const waiterName = document.createElement("div");
  waiterName.textContent = "Alex Smith";
  waiterName.classList.add("name");
  const waiterUl = document.createElement("ul");
  const waiterLiOne = document.createElement("li");
  waiterLiOne.textContent = "Waiter";
  const waiterLiTwo = document.createElement("li");
  waiterLiTwo.textContent = "notReallyRealAgain3@restaurant.com";
  const waiterLiThree = document.createElement("li");
  waiterLiThree.textContent = "111-222-9121";
  const waiterImageContainer = document.createElement("div");
  waiterImageContainer.classList.add("waiter-image-container");
  const waiterActualImage = document.createElement("img");
  waiterActualImage.src = waiterImage;
  // Add DOM
  mainContainer.appendChild(contactFields);
  // ceo
  contactFields.appendChild(ceoField);
  ceoField.appendChild(ceoDetails);
  ceoDetails.appendChild(ceoName);
  ceoDetails.appendChild(ceoUl);
  ceoUl.appendChild(ceoLiOne);
  ceoUl.appendChild(ceoLiTwo);
  ceoUl.appendChild(ceoLiThree)
  ceoField.appendChild(ceoImageContainer);
  ceoImageContainer.appendChild(ceoActualImage);
  // chef
  contactFields.appendChild(chefField);
  chefField.appendChild(chefDetails);
  chefDetails.appendChild(chefName);
  chefDetails.appendChild(chefUl);
  chefUl.appendChild(chefLiOne);
  chefUl.appendChild(chefLiTwo);
  chefUl.appendChild(chefLiThree);
  chefField.appendChild(chefImageContainer);
  chefImageContainer.appendChild(chefActualImage);
  // waiter
  contactFields.appendChild(waiterField);
  waiterField.appendChild(waiterDetails);
  waiterDetails.appendChild(waiterName);
  waiterDetails.appendChild(waiterUl);
  waiterUl.appendChild(waiterLiOne);
  waiterUl.appendChild(waiterLiTwo);
  waiterUl.appendChild(waiterLiThree);
  waiterField.appendChild(waiterImageContainer);
  waiterImageContainer.appendChild(waiterActualImage);

}
export {contactUs};