import "../style.css";
function getDefault(){
  const contentElement = document.createElement("div");
  contentElement.setAttribute("id", "content");
  const navElement = document.createElement("nav");
  const mainElement = document.createElement("main");
  const footerElement = document.createElement("footer");
  footerElement.textContent = "Copyright © MAsecurity 2023";
  const ulElement = document.createElement("ul");
  const liHome = document.createElement("li");
  const liMenu = document.createElement("li");
  const liContact = document.createElement("li");
  liHome.textContent = "Home";
  liMenu.textContent = "Menu";
  liContact.textContent = "Contact us";
  liHome.setAttribute("id", "home");
  liMenu.setAttribute("id", "menu");
  liContact.setAttribute("id", "contact")
  const centeredContent  = document.createElement("div");
  centeredContent.classList.add("center-content");
  document.body.appendChild(contentElement);
  contentElement.appendChild(navElement);
  contentElement.appendChild(mainElement);
  contentElement.appendChild(footerElement)
  navElement.appendChild(ulElement);
  ulElement.appendChild(liHome);
  ulElement.appendChild(liMenu);
  ulElement.appendChild(liContact);
  mainElement.appendChild(centeredContent);
}

export{getDefault};

