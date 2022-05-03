

import renderToDom from "../Utils/renderToDom.js"


const addButtons = () => {
  const domString = `  
  <div class="d-flex flex-wrap justify-content-between my-3">
  <button class="btn btn-secondary btn-lg buttonRow" id="Slytherin">Slytherin</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="Hufflepuff">Hufflepuff</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="Gryffindor">Gryffindor</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="Ravenclaw">Ravenclaw</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="select-all">Select All</button>
  
  </div>
  `
  renderToDom('#filter-btns', domString)
}

export default addButtons
