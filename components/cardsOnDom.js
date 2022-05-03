import renderToDom from "../Utils/renderToDom.js";
import houseImage from "./houseImage.js";
import cardText from "./cardText.js";

const cardsOnDom = (array) => {
  let domString = "";
  let imgSource = houseImage()
  let cardTexts = cardText()
  array.forEach((studentObj) => {

    domString += `<div class="card" style="width: 18rem;">
    <img src="${imgSource}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${studentObj.name}</h5>
      <p class="card-text">${cardTexts}</p>
      <a href="#" class="btn btn-primary">Expel Me</a>
    </div>
  </div>`
   
  })
renderToDom("#card-container", domString)


};

export default cardsOnDom
