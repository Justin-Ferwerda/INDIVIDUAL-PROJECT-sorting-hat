

import renderToDom from "../Utils/renderToDom.js"


const addButtons = () => {
  const domString = `  
  <div class="d-flex flex-wrap justify-content-between my-3">
  <button class="btn btn-secondary btn-lg buttonRow" id="slytherin">Slytherin</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="hufflepuff">HufflePuff</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="Gryffindor">Gryffindor</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="ravenclaw">Ravenclaw</button>
  <button class="btn btn-secondary btn-lg buttonRow" id="select-all">Select All</button>
  
  </div>
  `
  renderToDom('#filter-btns', domString)
}

export default addButtons
