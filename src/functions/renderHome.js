function getHome(){
  const centerContent = document.querySelector(".center-content");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Welcome to Tasty Pizza";
  const about = document.createElement("div");
  about.classList.add("about-us");
  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("about-heading");
  aboutHeading.textContent = "About us"
  const openingTimes = document.createElement("div");
  openingTimes.classList.add("opening-times");
  const openingHeading = document.createElement("div");
  openingHeading.classList.add("opening-times-heading");
  openingHeading.textContent = "Hours";
  const location = document.createElement("div");
  location.classList.add("location");
  const locationHeading = document.createElement("div");
  locationHeading.classList.add("location-heading");
  locationHeading.textContent = "Location";
  centerContent.appendChild(title);
  centerContent.appendChild(about);
  centerContent.appendChild(openingTimes);
  centerContent.appendChild(location);
  about.appendChild(aboutHeading);
  openingTimes.appendChild(openingHeading);
  location.appendChild(locationHeading);
};
export{getHome};