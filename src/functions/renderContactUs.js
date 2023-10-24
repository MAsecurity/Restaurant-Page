import ceoImage from "../images/ceo.png";
import chefImage from "../images/chef.png";
import waiterImage from "../images/waiter.png";
function contactUs(){
  const theCenteredContent = document.querySelector(".center-content");
  const contactTitle = document.createElement("div");
  contactTitle.textContent = "Contact us";
  contactTitle.classList.add("contact-title");
  // Adding CEO details
  const ceoContactProfile = document.createElement("div");
  ceoContactProfile.classList.add("contact-profile");
  const ceoInfo = document.createElement("div");
  ceoInfo.classList.add("info-profile");
  const ceoName = document.createElement("div");
  ceoName.classList.add("name");
  ceoName.textContent = "Peter Anderson";
  const ceoUl = document.createElement("ul");
  const ceoLiOne = document.createElement("li");
  ceoLiOne.textContent = "CEO";
  const ceoLiTwo = document.createElement("li");
  ceoLiTwo.textContent = "notReal1@restaurant.com";
  const ceoLiThree = document.createElement("li");
  ceoLiThree.textContent = "222-333-4444";
  const ceoContainterProfileImage = document.createElement("div");
  ceoContainterProfileImage.classList.add("profile");
  const ceoActualImage = document.createElement("img");
  ceoActualImage.classList.add("profile-image");
  ceoActualImage.src = ceoImage;
  // Adding Chef details
  const chefContactProfile = document.createElement("div");
  chefContactProfile.classList.add("contact-profile");
  const chefInfo = document.createElement("div");
  chefInfo.classList.add("info-profile");
  const chefName = document.createElement("div");
  chefName.classList.add("name");
  chefName.textContent = "Ibrahim Yusef";
  const chefUl = document.createElement("ul");
  const chefLiOne = document.createElement("li");
  chefLiOne.textContent = "Chef";
  const chefLiTwo = document.createElement("li");
  chefLiTwo.textContent = "notReallyReal2@restaurant.com";
  const chefLiThree = document.createElement("li");
  chefLiThree.textContent = "123-343-4644";
  const chefContainterProfileImage = document.createElement("div");
  chefContainterProfileImage.classList.add("profile");
  const chefActualImage = document.createElement("img");
  chefActualImage.classList.add("profile-image");
  chefActualImage.src = chefImage;
  // Adding waiter details
  const waiterContactProfile = document.createElement("div");
  waiterContactProfile.classList.add("contact-profile");
  const waiterInfo = document.createElement("div");
  waiterInfo.classList.add("info-profile");
  const waiterName = document.createElement("div");
  waiterName.classList.add("name");
  waiterName.textContent = "Alex smith";
  const waiterUl = document.createElement("ul");
  const waiterLiOne = document.createElement("li");
  waiterLiOne.textContent = "Waiter";
  const waiterLiTwo = document.createElement("li");
  waiterLiTwo.textContent = "notReallyRealAgain3@restaurant.com";
  const waiterLiThree = document.createElement("li");
  waiterLiThree.textContent = "111-377-4678";
  const waiterContainterProfileImage = document.createElement("div");
  waiterContainterProfileImage.classList.add("profile");
  const waiterActualImage = document.createElement("img");
  waiterActualImage.classList.add("profile-image");
  waiterActualImage.src = waiterImage;
  // Adding to the DOM
  theCenteredContent.appendChild(contactTitle);
  // Add CEO section to DOM
  theCenteredContent.appendChild(ceoContactProfile);
  ceoContactProfile.appendChild(ceoInfo);
  ceoInfo.appendChild(ceoName);
  ceoInfo.appendChild(ceoUl);
  ceoUl.appendChild(ceoLiOne);
  ceoUl.appendChild(ceoLiTwo);
  ceoUl.appendChild(ceoLiThree);
  ceoContactProfile.appendChild(ceoContainterProfileImage);
  ceoContainterProfileImage.appendChild(ceoActualImage);
  // Add Chef section to DOM
  theCenteredContent.appendChild(chefContactProfile);
  chefContactProfile.appendChild(chefInfo);
  chefInfo.appendChild(chefName);
  chefInfo.appendChild(chefUl);
  chefUl.appendChild(chefLiOne);
  chefUl.appendChild(chefLiTwo);
  chefUl.appendChild(chefLiThree);
  chefContactProfile.appendChild(chefContainterProfileImage);
  chefContainterProfileImage.appendChild(chefActualImage);
  // Add Waiter section to DOM
  theCenteredContent.appendChild(waiterContactProfile);
  waiterContactProfile.appendChild(waiterInfo);
  waiterInfo.appendChild(waiterName);
  waiterInfo.appendChild(waiterUl);
  waiterUl.appendChild(waiterLiOne);
  waiterUl.appendChild(waiterLiTwo);
  waiterUl.appendChild(waiterLiThree);
  waiterContactProfile.appendChild(waiterContainterProfileImage);
  waiterContainterProfileImage.appendChild(waiterActualImage);
}
export{contactUs}