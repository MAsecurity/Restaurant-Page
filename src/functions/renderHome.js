function getHome(){
  const centerContent = document.querySelector(".center-content");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Welcome to Tasty Pizza";
  // About section
  const about = document.createElement("div");
  about.classList.add("about-us");
  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("about-heading");
  aboutHeading.textContent = "About us";
  const aboutPara = document.createElement("div");
  aboutPara.textContent = "Welcome to Tasty Pizza, where the art of pizza-making comes to life! Our restaurant is a culinary haven for pizza lovers, offering a delectable array of handcrafted pizzas that are bound to tantalize your taste buds.\nWith a focus on high-quality, fresh ingredients, and a passion for perfecting the pizza experience, we invite you to savor each bite and join us on a delightful gastronomic journey.\n Explore our diverse menu and discover the flavors that make our pizzas a true sensation.\n We can't wait to serve you!";
  // Opening-Times section
  const openingTimes = document.createElement("div");
  openingTimes.classList.add("opening-times");
  const openingHeading = document.createElement("div");
  openingHeading.classList.add("opening-times-heading");
  openingHeading.textContent = "Hours";
  const openingUl = document.createElement("ul");
  const liMon = document.createElement("li");
  liMon.textContent= "Monday: 12am to 9pm"
  const liTue = document.createElement("li");
  liTue.textContent = "Tuesday: 12am to 9pm";
  const liWed = document.createElement("li");
  liWed.textContent = "Wednesday: 12am to 9pm"
  const liThu = document.createElement("li");
  liThu.textContent = "Thursday: 12am to 9pm";
  const liFri = document.createElement("li");
  liFri.textContent = "Friday: 12am to 9pm";
  const liSat = document.createElement("li");
  liSat.textContent = "Saturday: 12am to 9pm";
  const liSun = document.createElement("li");
  liSun.textContent = "Sunday: 12am to 9pm"
  //Location section
  const location = document.createElement("div");
  location.classList.add("location");
  const locationHeading = document.createElement("div");
  locationHeading.classList.add("location-heading");
  locationHeading.textContent = "Location";
  const addressPartOne = document.createElement("div");
  addressPartOne.textContent = "123 Main Street";
  const addressPartTwo = document.createElement("div");
  addressPartTwo.textContent = "faketown, USA 12345";
  //Appending DOM elements
  centerContent.appendChild(title);
  centerContent.appendChild(about);
  centerContent.appendChild(openingTimes);
  centerContent.appendChild(location);
  about.appendChild(aboutHeading);
  about.appendChild(aboutPara);
  openingTimes.appendChild(openingHeading);
  openingTimes.appendChild(openingUl);
  openingUl.appendChild(liMon);
  openingUl.appendChild(liTue);
  openingUl.appendChild(liWed);
  openingUl.appendChild(liThu);
  openingUl.appendChild(liFri);
  openingUl.appendChild(liSat);
  openingUl.appendChild(liSun);
  location.appendChild(locationHeading);
  location.appendChild(addressPartOne);
  location.appendChild(addressPartTwo);
};
export{getHome};