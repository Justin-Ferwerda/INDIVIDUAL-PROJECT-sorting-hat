import renderToDom from "../Utils/renderToDom.js";


const armyCardsOnDom = (array) => {
  let domString = "";
  
  array.forEach((studentObj) => {

    

    domString += `<div class="card" style="width: 18rem;">
    <img src="assets/images/deathEaterimg.webp" class="card-img-top" alt="death-eater">
    <div class="card-body">
      <h5 class="card-title">${studentObj[0].name}</h5>
      <p class="card-text">Radical pure blood supremacists who practiced the Dark Arts with reckless abandon and without regard to or fear of wizarding law.</p>
      
    </div>
  </div>`
    
  
   
  })
  renderToDom("#army-container", domString)

  

};

export default armyCardsOnDom
