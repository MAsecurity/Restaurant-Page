function clearContents(){
  const currentNode = document.querySelector(".center-content");
  while(currentNode.firstElementChild){
    currentNode.firstElementChild.remove();
  }
}
export{clearContents};