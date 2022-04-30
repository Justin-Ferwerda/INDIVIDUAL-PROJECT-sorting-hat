import renderToDom from "../Utils/renderToDom.js";


// add form function
const addForm = () => {
  const domString = `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Please enter your name!</label>
  <input type="email" class="form-control" id="name" placeholder="First name Last name">
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</div>`;
  renderToDom('#enter-student-form', domString);
}

export default addForm
