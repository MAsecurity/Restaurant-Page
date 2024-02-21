function clear(){
  const content = document.querySelector(".main");
  while(content.firstElementChild){
    content.firstElementChild.remove()
  }
}
export {clear}