let currentStatus = false
function switchOpacity(){
  const button = document.querySelector(".button-container-opening-times button");
  const image = document.querySelector(".image-container img")
  button.onclick = ()=>{
    if (currentStatus == false){
      image.classList.add("low-opacity");
      currentStatus = true;
      button.textContent = "Hide"
    }else{
      currentStatus = false;
      image.classList.remove("low-opacity");
      button.textContent = "Opening times"
    }
  }

}
export {switchOpacity}