import renderToDom from "../Utils/renderToDom.js";


const armyCardsOnDom = (array) => {
  let domString = "";
  
  array.forEach((studentObj) => {

    

    domString += `<div class="card" style="width: 18rem;">
    <img src="${studentObj[0].imgSource}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${studentObj[0].name}  - ${studentObj[0].house}</h5>
      <p class="card-text">${studentObj[0].cardtxts}</p>
      <a href="#" id="expel--${studentObj[0].name}" class="btn btn-primary">Expel Me</a>
    </div>
  </div>`
    
  
   
  })
  renderToDom("#army-container", domString)

  

};

export default armyCardsOnDom
