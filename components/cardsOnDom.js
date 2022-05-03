import renderToDom from "../Utils/renderToDom.js";

const cardsOnDom = (array) => {
  let domString = "";
  
  array.forEach((studentObj) => {

    

    domString += `<div class="card" style="width: 18rem;">
    <img src="${studentObj.imgSource}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${studentObj.name}  - ${studentObj.house}</h5>
      <p class="card-text">${studentObj.cardtxts}</p>
      <a href="#" id="expel-btn" class="btn btn-primary">Expel Me</a>
    </div>
  </div>`
    
  
   
  })
  renderToDom("#card-container", domString)

  

};

export default cardsOnDom
